import type { prismaClient } from '$lib/prismaClient';
import type { Database } from '$lib/__generated__/database.types';
import type { SupabaseClient } from '@supabase/supabase-js';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			prisma: typeof prismaClient;
			supabase: SupabaseClient<Database>;
			getSession(): Promise<Session | null>;
		}
		interface PageData {
			session: Session | null;
		}
		// interface Error {}
		// interface Platform {}
	}
}

export {};
