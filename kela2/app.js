/* KELA – dashboard + course page + lesson player
 * Lessons live in data/lesson_N.json (one owner each: Tito=1, Prathna=2, Houykea=3).
 * Needs http (fetch won't work from file://):  python3 -m http.server 8000
 *
 * Flow:  dashboard card  ->  course page (lesson list + progress)  ->  random quiz  ->  score  ->  back to course
 */
const LESSONS = [
  { id: 1, file: 'data/lesson_1.json', icon: '🔢', cls: 't1', unit: 'Unit 1 • ជំពូកទី ១', current: true },
  { id: 2, file: 'data/lesson_2.json', icon: '+',  cls: 't2', unit: 'Unit 2 • ជំពូកទី ២', count: '5 មេរៀន', pct: 80 },
  { id: 3, file: 'data/lesson_3.json', icon: '−',  cls: 't3', unit: 'Unit 3 • ជំពូកទី ៣', count: '5 មេរៀន', pct: 60,
    desc: 'វិធីដកមានខ្ចីនិងក្បាលខ្ចី • Taking away, borrowing & problem solving' },
];

const $ = (id) => document.getElementById(id);
const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};
const XP_MAX = 500;
const state = {
  xp: store.get('kela.xp', 340),
  coins: store.get('kela.coins', 1250),
  sec: store.get('kela.sec', {}),          // { "1": { s1: bestPercent, ... } }
};
const save = () => { store.set('kela.xp', state.xp); store.set('kela.coins', state.coins); store.set('kela.sec', state.sec); };

function toast(msg) {
  const t = $('toast'); t.textContent = msg; t.hidden = false;
  clearTimeout(toast._t); toast._t = setTimeout(() => (t.hidden = true), 2400);
}
const shuffle = (a) => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

// ---------- data ----------
const cache = {};
async function loadLesson(l) {
  if (cache[l.id]) return cache[l.id];
  const res = await fetch(l.file);
  if (!res.ok) throw new Error(`Cannot load ${l.file} (${res.status})`);
  return (cache[l.id] = await res.json());
}
const best = (lid, sid) => (state.sec[lid] || {})[sid] ?? null;
const passMark = (d) => d.pass_percent ?? 60;
const isDone = (d, sid) => (best(d.id, sid) ?? -1) >= passMark(d);
const sectionPool = (d, s) => d.questions.filter((q) => s.topics.includes(q.topic));
function courseProgress(d) {
  const secs = d.sections || [];
  if (!secs.length) return 0;
  return Math.round((secs.filter((s) => isDone(d, s.id)).length / secs.length) * 100);
}

// ---------- dashboard ----------
function statusText(p) { return p >= 100 ? '✔ បានបញ្ចប់ 100%' : p === 0 ? '▶ ចាប់ផ្តើម' : `ឧត្តមភាព ${p}%`; }

function renderLessons() {
  const list = $('lessonList'); list.innerHTML = '';
  LESSONS.forEach((l) => {
    const el = document.createElement('button');
    el.className = `lesson ${l.cls}${l.current ? ' current' : ''}`;
    el.innerHTML = `
      ${l.current ? '<span class="badge-current">🔥កំពុងសិក្សា Current</span>' : ''}
      <div class="l-top"><div class="l-icon">${l.icon}</div><span class="status" data-status></span></div>
      <div class="l-meta"><b>${l.unit}</b><span class="count" data-count>${l.count || ''}</span></div>
      <div class="l-title" data-km>…</div>
      <div class="l-sub" data-en></div>
      ${l.desc ? `<div class="l-desc">${l.desc}</div>` : ''}
      <div class="l-foot">
        <div class="bar"><div class="fill" data-fill style="width:0%"></div></div>
        <div class="l-foot-row"><span data-left></span><span data-frac></span></div>
      </div>`;
    el.addEventListener('click', () => openCourse(l));
    list.appendChild(el);

    const paint = (p, left, frac) => {
      el.querySelector('[data-status]').textContent = statusText(p);
      el.querySelector('[data-fill]').style.width = p + '%';
      el.querySelector('[data-left]').textContent = left;
      el.querySelector('[data-frac]').textContent = frac;
    };
    if (l.pct != null) paint(l.pct, 'នៅសល់ ១ មេរៀនទៀត', l.id === 2 ? '4/5' : '3/5');
    loadLesson(l).then((d) => {
      el.querySelector('[data-km]').textContent = d.title_km;
      el.querySelector('[data-en]').textContent = d.title_en;
      if (d.sections) {                                   // real lesson: progress from saved results
        const done = d.sections.filter((s) => isDone(d, s.id)).length, n = d.sections.length;
        el.querySelector('[data-count]').textContent = `${n} មេរៀន`;
        paint(courseProgress(d), done === n ? 'បានរៀនចប់សព្វគ្រប់' : `នៅសល់ ${n - done} មេរៀនទៀត`, `${done}/${n}`);
      }
    }).catch(() => { el.querySelector('[data-km]').textContent = `Lesson ${l.id}`; });
  });
}

function renderXp() {
  $('xpText').textContent = `${state.xp} / ${XP_MAX} XP`;
  $('xpFill').style.width = Math.min(100, (state.xp / XP_MAX) * 100) + '%';
  $('coins').textContent = state.coins.toLocaleString();
}

// ---------- course page ----------
let COURSE = null; // { l, d }

async function openCourse(l) {
  let d;
  try { d = await loadLesson(l); }
  catch (e) { toast('Run via a local server: python3 -m http.server'); console.error(e); return; }
  if (d.placeholder) { toast(`Lesson ${l.id} belongs to ${d.owner} – data coming soon`); return; }
  COURSE = { l, d };
  renderCourse();
  $('dashView').hidden = true; $('courseView').hidden = false;
  window.scrollTo(0, 0);
}

function renderCourse() {
  const { d } = COURSE, secs = d.sections || [];
  $('cSubject').textContent = (d.subject_en || 'Mathematics').toUpperCase();
  $('cTitleKm').textContent = d.title_km;
  $('cTitleEn').textContent = d.title_en;
  $('cDesc').textContent = d.description_en || '';
  $('cMeta').innerHTML = `<span>📚 ${secs.length} lessons</span><span>❓ ${d.questions.length} questions</span><span>🎯 Pass at ${passMark(d)}%</span>`;

  const pct = courseProgress(d), done = secs.filter((s) => isDone(d, s.id)).length;
  $('cPct').textContent = `${pct}% Complete`;
  $('cCount').textContent = `${done} of ${secs.length} lessons`;
  $('cBar').style.width = pct + '%';
  const next = secs.find((s) => !isDone(d, s.id));
  $('cContinue').textContent = !next ? 'Review a lesson 🔁' : done ? 'Continue ▶' : 'Start learning ▶';
  $('cContinue').onclick = () => startSection(next || secs[0]);

  const box = $('sectionList'); box.innerHTML = '';
  secs.forEach((s, i) => {
    const b = best(d.id, s.id), ok = isDone(d, s.id);
    const status = ok ? `<span class="sec-status done">✓ Completed</span>`
      : b != null ? `<span class="sec-status prog">Best ${b}% · Try again</span>`
      : `<span class="sec-status new">Start ▶</span>`;
    const note = (d.notes || []).find((n) => n.page === s.note_page);
    const el = document.createElement('button');
    el.className = 'sec' + (ok ? ' done' : '');
    el.innerHTML = `<div class="sec-num">${ok ? '✓' : i + 1}</div>
      <div class="sec-main"><b>Lesson ${i + 1} — ${s.title_en}</b><span class="km">${s.title_km}</span>
      <small>${sectionPool(d, s).length} questions${note ? ' • ' + note.text_en : ''}</small></div>${status}`;
    el.addEventListener('click', () => startSection(s));
    box.appendChild(el);
  });
  const per = d.questions_per_session || 8;
  $('practiceSub').textContent = `${Math.min(per, d.questions.length)} random questions from all lessons`;
}

$('courseBack').addEventListener('click', () => { $('courseView').hidden = true; $('dashView').hidden = false; renderLessons(); });
$('practiceAll').addEventListener('click', () => startSession(d_(), d_().questions, d_().questions_per_session || 8, null));
const d_ = () => COURSE.d;

// ---------- lesson session ----------
let S = null;
const SECTION_Q = 5;

function startSection(s) { startSession(COURSE.d, sectionPool(COURSE.d, s), SECTION_Q, s); }

function startSession(d, pool, want, section) {
  // Random generation: shuffle the pool, take N, shuffle options per question (answer follows).
  const n = Math.min(want, pool.length);
  const qs = shuffle(pool).slice(0, n).map((q) => ({ ...q, opts: shuffle(q.options.map((text, i) => ({ text, correct: i === q.answer }))) }));
  S = { d, section, qs, i: 0, score: 0, answered: false };
  $('pUnit').textContent = section ? `Lesson • ${section.title_en}` : 'Mixed practice';
  $('pTitle').textContent = d.title_km;
  $('quizView').hidden = false; $('resultView').hidden = true;
  $('player').hidden = false;
  showQuestion();
}

function showQuestion() {
  const q = S.qs[S.i]; S.answered = false;
  $('qCounter').textContent = `Question ${S.i + 1} / ${S.qs.length}`;
  $('liveScore').textContent = `Score: ${S.score}`;
  $('qBar').style.width = (S.i / S.qs.length) * 100 + '%';
  $('qVisual').textContent = q.visual || '';
  $('qKm').textContent = q.prompt_km;
  $('qEn').textContent = q.prompt_en || '';
  $('feedback').hidden = true; $('nextBtn').hidden = true; $('voiceStatus').textContent = '';
  const box = $('options'); box.innerHTML = '';
  q.opts.forEach((o, k) => {
    const b = document.createElement('button');
    b.className = 'opt'; b.textContent = o.text;
    b.addEventListener('click', () => answer(k));
    box.appendChild(b);
  });
}

function answer(k) {
  if (S.answered) return;
  S.answered = true;
  const q = S.qs[S.i], ok = q.opts[k].correct;
  if (ok) S.score++;
  [...$('options').children].forEach((b, j) => {
    b.disabled = true;
    if (q.opts[j].correct) b.classList.add('correct'); else if (j === k) b.classList.add('wrong');
  });
  const fb = $('feedback');
  fb.className = 'feedback ' + (ok ? 'ok' : 'no');
  fb.textContent = (ok ? '✅ Correct! ' : '❌ Not quite. ') + (q.explanation_en || '');
  fb.hidden = false;
  $('liveScore').textContent = `Score: ${S.score}`;
  $('nextBtn').textContent = S.i === S.qs.length - 1 ? 'Finish 🏁' : 'Next ➜';
  $('nextBtn').hidden = false;
}

// The session ends after the last question -> result screen.
function next() { if (S.i < S.qs.length - 1) { S.i++; showQuestion(); } else finish(); }

function finish() {
  const total = S.qs.length, pct = Math.round((S.score / total) * 100), pass = pct >= passMark(S.d);
  const xpGain = S.score * 10, coinGain = S.score * 5;
  state.xp = Math.min(XP_MAX, state.xp + xpGain);
  state.coins += coinGain;
  if (S.section) {
    const m = (state.sec[S.d.id] ||= {});
    m[S.section.id] = Math.max(m[S.section.id] ?? 0, pct);
  }
  save(); renderXp();

  $('quizView').hidden = true; $('resultView').hidden = false;
  $('rEmoji').textContent = pct === 100 ? '🏆' : pass ? '🎉' : '💪';
  $('rTitle').textContent = pass ? 'Lesson complete!' : 'Keep practising!';
  $('rScore').textContent = S.score; $('rTotal').textContent = `/ ${total}`;
  $('rMsg').textContent = `${pct}% correct — ${pass ? 'you passed' : `you need ${passMark(S.d)}% to pass`}.`;
  $('rReward').textContent = `+${xpGain} XP   +${coinGain} 🪙`;
}

function closePlayer() {
  $('player').hidden = true; S = null;
  if (COURSE && !$('courseView').hidden) renderCourse();
}

// ---------- TTS / ASR : interface stubs ----------
// Buttons work as UI only. Replace the bodies with Gemini API calls later.
const Voice = {
  async speak(text) {
    // TODO: Gemini TTS -> play returned audio.
    $('voiceStatus').textContent = `🔊 [TTS stub] would speak: "${text}"`;
  },
  recording: false,
  toggleRecord() {
    // TODO: capture mic -> Gemini ASR -> compare transcript with the answer.
    this.recording = !this.recording;
    $('asrBtn').classList.toggle('recording', this.recording);
    $('voiceStatus').textContent = this.recording
      ? '🎤 [ASR stub] listening… (tap again to stop)'
      : '🎤 [ASR stub] stopped – no audio processed yet';
  },
};

// ---------- wiring ----------
$('nextBtn').addEventListener('click', next);
$('closeBtn').addEventListener('click', closePlayer);
$('homeBtn').addEventListener('click', closePlayer);
$('againBtn').addEventListener('click', () => startSession(S.d, S.section ? sectionPool(S.d, S.section) : S.d.questions, S.section ? SECTION_Q : (S.d.questions_per_session || 8), S.section));
$('ttsBtn').addEventListener('click', () => S && Voice.speak(S.qs[S.i].tts_text || S.qs[S.i].prompt_km));
$('asrBtn').addEventListener('click', () => Voice.toggleRecord());
$('sanctuaryBtn').addEventListener('click', () => toast('Pet Sanctuary – coming soon'));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !$('player').hidden) closePlayer(); });

renderLessons(); renderXp();
