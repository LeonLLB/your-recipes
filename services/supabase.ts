import { createClient } from '@supabase/supabase-js';

const supabaseClient = createClient('https://kvdnzecehmywtjxeeeow.supabase.co',process.env.ANON_KEY);

export default supabaseClient;