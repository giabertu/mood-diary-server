const {createClient} = require('@supabase/supabase-js')


const projUrl = 'https://drxkhmuiheyogtzbktoq.supabase.co'
const publicAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyeGtobXVpaGV5b2d0emJrdG9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5NjU2NzUsImV4cCI6MjAyNDU0MTY3NX0.nybBNviS2Oy0mUcXwco8YX8yINFwMxVDRRPT9HGgShg'


const supabase = createClient(projUrl, publicAnonKey);

module.exports = supabase