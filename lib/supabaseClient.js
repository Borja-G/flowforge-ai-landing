import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cplrfccrencytmmlnzjk.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwbHJmY2NyZW5jeXRtbWxuemprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2MDgyMDEsImV4cCI6MjA4OTE4NDIwMX0.8q9FKUGOQysFZkqdenET5-RMpZozoQTyAOsn8DltRXo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);