/// <reference path="../.astro/types.d.ts" />
// src/env.d.ts
/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    user?: {
      id: string;
      email?: string | null;
      role?: 'parent' | 'staff' | 'admin'; // Preparing for Security Point #4
    };
  }
}