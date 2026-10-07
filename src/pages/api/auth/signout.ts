// src/pages/api/auth/signout.ts
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ cookies, redirect }) => {
  // Clear all auth cookies
  cookies.delete('sb-access-token', { path: '/' });
  cookies.delete('sb-refresh-token', { path: '/' });
  cookies.delete('csrf-token', { path: '/' });
  
  // ✅ Redirect to home page after logout
  return redirect('/');
};