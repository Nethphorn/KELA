export interface TextToSpeech {
  speak(text: string, language: string): Promise<void>
}

export interface SpeechToText {
  transcribe(language: string): Promise<string>
}

export function createUnimplementedTextToSpeech(): TextToSpeech {
  return {
    speak: (_text, _language) =>
      Promise.reject(new Error('Text-to-speech is not implemented yet')),
  }
}

export function createUnimplementedSpeechToText(): SpeechToText {
  return {
    transcribe: (_language) =>
      Promise.reject(new Error('Speech-to-text is not implemented yet')),
  }
}
