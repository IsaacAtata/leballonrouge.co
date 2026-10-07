// src/pages/api/image/[...path].ts
import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';
import { readFileSync, existsSync } from 'fs';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';

// 1. SAFE PATH RESOLUTION FOR ASTRO SSR
const __dirname = fileURLToPath(new URL('.', import.meta.url));
const IMAGES_DIR = resolve(__dirname, '../../../public/assets/images');

export const GET: APIRoute = async ({ params, cookies }) => {
  // 2. STRICT SESSION VALIDATION (Do NOT trust Astro.locals here)
  const accessToken = cookies.get('sb-access-token');
  const refreshToken = cookies.get('sb-refresh-token');

  if (!accessToken || !refreshToken) {
    return new Response(null, { status: 401 });
  }

  const supabase = createClient(
    import.meta.env.SUPABASE_URL!,
    import.meta.env.SUPABASE_ANON_KEY!
  );

  const { data: { user }, error } = await supabase.auth.setSession({
    access_token: accessToken.value,
    refresh_token: refreshToken.value,
  });

  if (error || !user) {
    return new Response(null, { status: 401 });
  }

  // 3. ANTI-PATH TRAVERSAL PROTECTION
  const requestedPath = params.path;
  if (!requestedPath || requestedPath.includes('..') || requestedPath.startsWith('/')) {
    return new Response('Forbidden', { status: 403 });
  }

  // Resolve and verify the file is INSIDE our allowed images directory
  const fullPath = resolve(IMAGES_DIR, decodeURIComponent(requestedPath));
  if (!fullPath.startsWith(IMAGES_DIR)) {
    return new Response('Forbidden', { status: 403 });
  }

  if (!existsSync(fullPath)) {
    return new Response('Image Not Found', { status: 404 });
  }

  // 4. SECURE RESPONSE HEADERS
  try {
    const buffer = readFileSync(fullPath);
    const ext = fullPath.split('.').pop()?.toLowerCase();
    
    const mimeTypes: Record<string, string> = {
      jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', 
      webp: 'image/webp', gif: 'image/gif', svg: 'image/svg+xml'
    };

    return new Response(buffer, {
      headers: {
        'Content-Type': mimeTypes[ext || 'jpg'] || 'image/jpeg',
        'Cache-Control': 'private, max-age=3600, no-store', // Private cache only!
        'X-Content-Type-Options': 'nosniff', // Prevent MIME sniffing
        'X-Frame-Options': 'DENY', // Prevent clickjacking
      },
    });
  } catch (e) {
    console.error(`[Image Proxy Error] Failed to serve ${requestedPath}:`, e);
    return new Response('Internal Server Error', { status: 500 });
  }
};