// src/middleware.ts
import { defineMiddleware } from 'astro:middleware';
import { supabase } from '../db/supabase';

// Paths that don't require authentication:
const PUBLIC_PATHS = [
  '/',
  '/accounts/login',
  '/accounts/register',
  '/contact',
  '/qui-sommes-nous',
  '/programmes',
  '/gouvernance',
  '/espace-parents',
  '/inscription',
  '/personnel',
  '/centres/', // ← CHANGED: Use prefix so BOTH brantford AND hamilton work
  '/api/auth/', // ← ADDED: Auth endpoints must be explicitly public
];

export const onRequest = defineMiddleware(async ({ locals, cookies, url, redirect }, next) => {
  const pathname = url.pathname;

  // ✅ FIXED: Check both exact matches AND prefix matches against PUBLIC_PATHS
  const isPublic = PUBLIC_PATHS.some(path => 
    pathname === path || pathname.startsWith(path)
  );

  if (isPublic) {
    // Optional: Load user session silently for public pages 
    // (so navbar can show "Welcome Parent" without forcing login)
    const accessToken = cookies.get('sb-access-token');
    const refreshToken = cookies.get('sb-refresh-token');
    
    if (accessToken && refreshToken) {
      try {
        const { data } = await supabase.auth.setSession({
          access_token: accessToken.value,
          refresh_token: refreshToken.value,
        });
        if (data?.user) {
          locals.user = {
            id: data.user.id,
            email: data.user.email,
            role: 'parent',
          };
        }
      } catch (e) {
        // Ignore errors on public pages - just treat as guest
      }
    }
    return next();
  }

  // PROTECTED ROUTE LOGIC
  const accessToken = cookies.get('sb-access-token');
  const refreshToken = cookies.get('sb-refresh-token');

  if (!accessToken || !refreshToken) {
    return redirect('/accounts/login'); // ✅ FIXED: Correct path
  }

  try {
    const { data, error } = await supabase.auth.setSession({
      access_token: accessToken.value,
      refresh_token: refreshToken.value,
    });

    if (error || !data.user) {
      cookies.delete('sb-access-token', { path: '/' });
      cookies.delete('sb-refresh-token', { path: '/' });
      return redirect('/accounts/login'); // ✅ FIXED: Correct path
    }

    locals.user = {
      id: data.user.id,
      email: data.user.email,
      role: 'parent',
    };
  } catch {
    cookies.delete('sb-access-token', { path: '/' });
    cookies.delete('sb-refresh-token', { path: '/' });
    return redirect('/accounts/login'); // ✅ FIXED: Correct path
  }

  return next();
});