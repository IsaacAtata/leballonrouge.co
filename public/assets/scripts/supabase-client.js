// public/assets/scripts/supabase-client.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (supabaseUrl && supabaseAnonKey) {
  window.supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn('Supabase credentials missing. Auth disabled.');
}