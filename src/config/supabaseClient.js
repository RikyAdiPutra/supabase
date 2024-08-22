import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://swtavyxtlouojhthwric.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3dGF2eXh0bG91b2podGh3cmljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQzMDIzMDQsImV4cCI6MjAzOTg3ODMwNH0.66IV9OTKovIqiXgzXaJM9Lw0XYOnpZ3U4VI1rkKI4FY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
