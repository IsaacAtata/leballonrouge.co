// src/pages/api/auth/signin.ts
import type { APIRoute } from 'astro';
import { supabase } from '../../../db/supabase';

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  try {
    const formData = await request.formData();
    const email = formData.get('email')?.toString()?.trim();
    const password = formData.get('password')?.toString();

    if (!email || !password) {
      return redirect('/accounts/login?error=missing_fields');
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data.session) {
      console.error('[SIGNIN ERROR]', error?.message);
      return redirect(`/accounts/login?error=${encodeURIComponent(error?.message || 'Invalid credentials')}`);
    }

    // ✅ FIX: Use ONLY the access_token. Ignore the broken refresh_token.
    const token = data.session.access_token;

    // Set BOTH cookies to the valid access token
    const cookieOptions = {
      path: '/',
      httpOnly: true,
      secure: false, // Keep false for localhost!
      sameSite: 'lax' as const,
    };

    cookies.set('sb-access-token', token, { ...cookieOptions, maxAge: 60 * 60 * 24 * 7 });
    cookies.set('sb-refresh-token', token, { ...cookieOptions, maxAge: 60 * 60 * 24 * 30 });

    console.log('[SIGNIN SUCCESS] Valid token set for:', email);
    return redirect('/accounts/dashboard');

  } catch (err) {
    console.error('[SIGNIN EXCEPTION]', err);
    return redirect('/accounts/login?error=server_error');
  }
};