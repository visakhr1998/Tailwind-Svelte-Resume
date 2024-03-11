import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("jobs").select('*');
  console.log("F1",data);
  return {
    jobs: data ?? [],
  };
}