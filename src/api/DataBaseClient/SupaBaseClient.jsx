// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zapcdfucvonafgnffqpa.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphcGNkZnVjdm9uYWZnbmZmcXBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1NTE0MzcsImV4cCI6MjA1NDEyNzQzN30.JvVIyj88YPLSyOSHw7HFYKavZKceB5r59m9hvEg1SJI'; // Replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseKey);
