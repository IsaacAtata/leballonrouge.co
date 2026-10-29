// src/middleware.ts
import { defineMiddleware } from 'astro:middleware';

// ✅ Routes that NEVER require authentication
// Dashboard is here because auth is validated INSIDE the page (prevents redirect loops)
const PUBLIC_PATHS = [
  '/', 
  '/accounts/login', 
  '/accounts/register', 
  '/accounts/dashboard', // Auth checked in-page, not here
  '/contact',
  '/qui-sommes-nous', 
  '/programmes', 
  '/gouvernance',
  '/espace-parents', 
  '/inscription', 
  '/personnel',
  '/centres/', 
  '/api/auth/'
];

export const onRequest = defineMiddleware(async ({ locals, cookies, url, redirect }, next) => {
  const pathname = url.pathname;
  
  // 1️⃣ PUBLIC ROUTES: Attach user for navbar, but never block access
  if (PUBLIC_PATHS.some(p => pathname.startsWith(p))) {
    const accessCookie = cookies.get('sb-access-token');
    
    if (accessCookie) {
      try {
        const { createClient } = await import('@supabase/supabase-js');
        const supabase = createClient(
          import.meta.env.SUPABASE_URL!,
          import.meta.env.SUPABASE_ANON_KEY!
        );
        
        const { data } = await supabase.auth.getUser(accessCookie.value);
        
        if (data?.user) {
          locals.user = {
            id: data.user.id,
            email: data.user.email,
            role: 'parent',
          };
        }
      } catch (e) {
        // Silently fail - invalid token on public page just means "guest"
      }
    }
    
    return next();
  }

  // 2️⃣ PROTECTED ROUTES: Everything else requires valid session
  const accessCookie = cookies.get('sb-access-token');
  
  if (!accessCookie) {
    return redirect('/accounts/login?error=missing_cookies');
  }

  try {
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      import.meta.env.SUPABASE_URL!,
      import.meta.env.SUPABASE_ANON_KEY!
    );
    
    const { data, error } = await supabase.auth.getUser(accessCookie.value);

    if (error || !data.user) {
      cookies.delete('sb-access-token', { path: '/' });
      cookies.delete('sb-refresh-token', { path: '/' });
      return redirect('/accounts/login?error=invalid_session');
    }

    locals.user = {
      id: data.user.id,
      email: data.user.email,
      role: 'parent',
    };
  } catch (err) {
    console.error('[MIDDLEWARE ERROR]', err);
    return redirect('/accounts/login?error=server_error');
  }

  return next();
});