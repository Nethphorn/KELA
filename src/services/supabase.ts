import { createClient } from '@supabase/supabase-js'

function requireEnv(value: string, name: string): string {
  if (value.length === 0) {
    throw new Error(`Missing environment variable: ${name}`)
  }
  return value
}

const supabaseUrl = requireEnv(
  import.meta.env.VITE_SUPABASE_URL,
  'VITE_SUPABASE_URL',
)

const supabaseKey = requireEnv(
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
  'VITE_SUPABASE_PUBLISHABLE_KEY',
)

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
})
