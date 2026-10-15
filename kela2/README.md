# KELA – Daily Learning Assistant

Static web app (no build step). Dashboard + playable lessons driven by JSON.

## Run
```bash
cd kela
python3 -m http.server 8000   # then open http://localhost:8000
```
(Opening index.html directly won't work: lessons are loaded with `fetch`.)

## Team split
| Person  | Lesson | File                 |
|---------|--------|----------------------|
| Tito    | 1      | `data/lesson_1.json` |
| Prathna | 2      | `data/lesson_2.json` |
| Houykea | 3      | `data/lesson_3.json` |

Each person only edits their own JSON file → no merge conflicts.

## Lesson JSON format
```json
{
  "id": 1, "owner": "Tito",
  "title_km": "...", "title_en": "...",
  "questions_per_session": 5,
  "pass_percent": 60,
  "questions": [
    { "id": "1-01", "type": "choice",
      "prompt_km": "...", "prompt_en": "...", "visual": "🍎🍎🍎",
      "options": ["2","3","4","5"], "answer": 1,
      "explanation_en": "...", "tts_text": "text to read aloud" }
  ]
}
```
`answer` = index into `options`. Add more questions than `questions_per_session` – each play picks a random subset and shuffles the options.

## Flow
click lesson → random N questions → answer each (instant feedback) → lesson ends after the last question → score screen (XP/coins, pass/fail) → play again / back.

## ASR / TTS
Interface only for now (🔊 Listen, 🎤 Speak answer). Replace the bodies of `Voice.speak` and `Voice.toggleRecord` in `app.js` with Gemini API calls when ready.

## Git
```bash
git clone <repo-url>      # whoever hasn't yet
git checkout -b lesson-N
git add kela/data/lesson_N.json && git commit -m "Add lesson N data" && git push
```
