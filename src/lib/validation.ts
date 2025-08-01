export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePassword = (password: string): { 
  isValid: boolean
  errors: string[] 
} => {
  const errors: string[] = []
  
  if (password.length < 6) {
    errors.push('Password must be at least 6 characters long')
  }
  
  if (!/(?=.*[a-z])/.test(password)) {
    errors.push('Password must contain at least one lowercase letter')
  }
  
  if (!/(?=.*[A-Z])/.test(password)) {
    errors.push('Password must contain at least one uppercase letter')
  }
  
  if (!/(?=.*\d)/.test(password)) {
    errors.push('Password must contain at least one number')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

export const getAuthErrorMessage = (error: string): string => {
  switch (error) {
    case 'Invalid login credentials':
      return 'Invalid email or password. Please check your credentials and try again.'
    case 'Email not confirmed':
      return 'Please check your email and click the confirmation link before signing in.'
    case 'User already registered':
      return 'An account with this email already exists. Please sign in instead.'
    case 'Signup disabled':
      return 'New user registration is currently disabled.'
    case 'Email rate limit exceeded':
      return 'Too many emails sent. Please wait a moment before trying again.'
    default:
      return error || 'An unexpected error occurred. Please try again.'
  }
}