// src/pages/api/auth/register.ts
import type { APIRoute } from 'astro';
import { supabase } from '../../../db/supabase';

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get('email')?.toString()?.trim();
  const password = formData.get('password')?.toString();
  const confirmPassword = formData.get('confirmPassword')?.toString();

  if (!email || !password) {
    return new Response(JSON.stringify({ error: 'Email and password are required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (password !== confirmPassword) {
    return new Response(JSON.stringify({ error: 'Passwords do not match' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (password.length < 8) {
    return new Response(JSON.stringify({ error: 'Password must be at least 8 characters' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${import.meta.env.SITE_URL}/api/auth/callback`,
    },
  });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return redirect('/login?registered=true');
};