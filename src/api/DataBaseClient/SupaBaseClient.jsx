// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ijrhccskuvuibrjpchvi.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqcmhjY3NrdXZ1aWJyanBjaHZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwMDQ5NDgsImV4cCI6MjA4OTU4MDk0OH0.a12PpCDfwWtETPyVJPUtVJK4q0KjSU8SWyo1tOyblKg'; 

export const supabase = createClient(supabaseUrl, supabaseKey);
