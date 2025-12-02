// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://vialkxtlunuapwvlvkqm.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpYWxreHRsdW51YXB3dmx2a3FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQzMTYwNzksImV4cCI6MjA3OTg5MjA3OX0.DR_rsxb6LCXgaqWM06ldvrpVuTdpNt7qQiqZtZLUGLA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);