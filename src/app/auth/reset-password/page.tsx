'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { validatePassword, getAuthErrorMessage } from '@/lib/validation'

export default function ResetPassword() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Handle the auth callback for password reset
    const handleAuthCallback = async () => {
      const code = searchParams.get('code')
      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code)
        if (error) {
          setErrors({ general: 'Invalid or expired reset link. Please request a new one.' })
        }
      } else {
        setErrors({ general: 'Invalid reset link. Please request a new password reset.' })
      }
    }

    handleAuthCallback()
  }, [searchParams])

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required'
    } else {
      const passwordValidation = validatePassword(password)
      if (!passwordValidation.isValid) {
        newErrors.password = passwordValidation.errors[0]
      }
    }

    // Confirm password validation
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setLoading(true)
    setMessage('')
    setErrors({})

    try {
      const { error } = await supabase.auth.updateUser({
        password: password
      })
      
      if (error) {
        setErrors({ general: getAuthErrorMessage(error.message) })
      } else {
        setMessage('Password updated successfully! Redirecting to dashboard...')
        setTimeout(() => {
          router.push('/dashboard')
        }, 2000)
      }
    } catch (error) {
      setErrors({ general: 'An unexpected error occurred. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Milo Time</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Set New Password</h2>
          <p className="text-gray-600">Enter your new password below</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`input-field ${errors.password ? 'border-red-500 focus:ring-red-500' : ''}`}
                placeholder="Enter your new password"
                disabled={loading}
              />
              {errors.password && <p className="error-text">{errors.password}</p>}
              <p className="text-xs text-gray-500 mt-1">
                Must be at least 6 characters with uppercase, lowercase, and number
              </p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm New Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`input-field ${errors.confirmPassword ? 'border-red-500 focus:ring-red-500' : ''}`}
                placeholder="Confirm your new password"
                disabled={loading}
              />
              {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
            </div>

            {errors.general && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="error-text">{errors.general}</p>
              </div>
            )}

            {message && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="success-text">{message}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Updating Password...
                </span>
              ) : (
                'Update Password'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}