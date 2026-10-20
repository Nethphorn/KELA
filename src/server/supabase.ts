import { createClient } from '@supabase/supabase-js'

function requireEnv(value: string | undefined, name: string): string {
  if (value === undefined || value.length === 0) {
    throw new Error(`Missing environment variable: ${name}`)
  }
  return value
}

const supabaseUrl = requireEnv(process.env.SUPABASE_URL, 'SUPABASE_URL')

const supabaseSecretKey = requireEnv(
  process.env.SUPABASE_SECRET_KEY,
  'SUPABASE_SECRET_KEY',
)

export const supabaseAdmin = createClient(supabaseUrl, supabaseSecretKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})
