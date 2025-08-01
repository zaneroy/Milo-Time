# Quick Setup Guide for Milo Time

Follow these steps to get your authentication system running in under 10 minutes!

## ⚡ Quick Start (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Set up Supabase (2 minutes)
1. Go to [supabase.com](https://supabase.com) → Create new project
2. Wait for database to initialize
3. Go to **Settings** → **API**
4. Copy your **Project URL** and **anon public key**

### 3. Configure Environment
```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Configure Supabase Auth
In your Supabase dashboard:
- **Authentication** → **Settings**
- **Site URL**: `http://localhost:3000`
- **Redirect URLs**: Add these two URLs:
  - `http://localhost:3000/auth/callback`
  - `http://localhost:3000/auth/reset-password`

### 5. Start Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) 🎉

## ✅ Test Your Setup

1. **Sign Up**: Create a new account
2. **Check Email**: Look for confirmation email
3. **Confirm**: Click the link in your email
4. **Dashboard**: You should be redirected to the dashboard
5. **Sign Out**: Test the logout functionality
6. **Sign In**: Test logging back in
7. **Password Reset**: Test the forgot password flow

## 🚨 Troubleshooting

### "Invalid login credentials"
- Check your Supabase credentials in `.env.local`
- Verify the user confirmed their email

### "Auth callback error"
- Check redirect URLs in Supabase dashboard
- Ensure URLs match exactly (no trailing slashes)

### Email not sending
- Check Supabase email settings
- For production, configure custom SMTP

### Build errors
- Run `npm run build` to check for TypeScript errors
- Ensure all environment variables are set

## 🚀 Production Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Update Supabase redirect URLs with your domain
5. Deploy!

### Environment Variables for Production
```env
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_anon_key
```

## 🎯 What's Included

✅ **Complete Authentication Flow**
- Sign up with email confirmation
- Sign in with session management
- Password reset via email
- Secure logout

✅ **Form Validation**
- Email format validation
- Password strength requirements
- Real-time error feedback

✅ **Security Features**
- Protected routes
- Session persistence
- CSRF protection
- Secure redirects

✅ **Modern UI/UX**
- Responsive design
- Loading states
- Error handling
- Beautiful dashboard

## 📞 Need Help?

1. Check the main [README.md](./README.md) for detailed documentation
2. Visit [Supabase Docs](https://supabase.com/docs/guides/auth) for auth-specific help
3. Check browser console for error messages
4. Verify your Supabase project settings

---

**You're all set! Welcome to Milo Time! 🎉**