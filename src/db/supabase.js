// src/db/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase credentials. Check .env.local for SUPABASE_URL and SUPABASE_ANON_KEY'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    flowType: 'pkce', // CRITICAL for server-side session exchange
    persistSession: false, // We manage sessions via cookies, not localStorage
    autoRefreshToken: false, // Handled manually in middleware
  },
});
