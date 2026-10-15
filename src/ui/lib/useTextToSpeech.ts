import { createUnimplementedTextToSpeech } from '@/domain/speech'

const TEXT_TO_SPEECH = createUnimplementedTextToSpeech()

export function useTextToSpeech(): (text: string) => void {
  return (text: string) => {
    void TEXT_TO_SPEECH.speak(text, 'km').catch(() => undefined)
  }
}
