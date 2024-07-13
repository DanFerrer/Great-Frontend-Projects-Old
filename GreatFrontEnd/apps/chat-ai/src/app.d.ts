import { SupabaseClient, Session, User } from '@supabase/supabase-js';
import type { Database } from './types/supabase';

declare global {
  namespace App {
    interface Locals {
      supabase: SupabaseClient<Database>;
      safeGetSession(): Promise<{ session: Session | null; user: User | null }>
	    session: Session | null;
      user: User | null;
    }
    interface PageData {
   	  session: Session | null;
    }

    // interface LayoutData {
    //   session: Session,
    //   supabase: SupabaseClient;
    // }

	  // interface PageState
    // interface Error {}
    // interface Platform {}
  }
}