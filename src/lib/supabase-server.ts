// src/lib/supabase-server.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase credentials');
}

// Dedicated server client WITHOUT pkce flow for session validation
export const supabaseServer = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    flowType: 'implicit', // Works better with manual setSession in SSR
    persistSession: false,
    autoRefreshToken: false,
  },
});