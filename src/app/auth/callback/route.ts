import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (!error) {
      // Redirect to dashboard on successful confirmation
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }

  // Redirect to login with error if something went wrong
  return NextResponse.redirect(new URL('/login?error=auth_callback_error', request.url))
}