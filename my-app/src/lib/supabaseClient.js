import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://qvrlyfjhtzbmpqwekliy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2cmx5ZmpodHpibXBxd2VrbGl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAwNzE5MTUsImV4cCI6MjAyNTY0NzkxNX0.CGzM2kT_R8TvkMlQk6zkSQ-nRnJBU_PxWCagT2DDOgk')