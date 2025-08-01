# Milo Time - Secure Authentication System

A modern, secure email-based authentication system built for parents using Next.js 14, TypeScript, Tailwind CSS, and Supabase Auth.

## 🚀 Features

### Authentication
- ✅ **Email-based authentication** with proper validation
- ✅ **Secure password requirements** (uppercase, lowercase, numbers)
- ✅ **Sign up** with email confirmation
- ✅ **Sign in** with email and password
- ✅ **Forgot password** / Reset password flow
- ✅ **Automatic session management** with secure storage
- ✅ **Protected routes** with automatic redirects
- ✅ **Logout functionality** accessible from any page

### Security Best Practices
- ✅ **Email format validation**
- ✅ **Password strength validation**
- ✅ **Comprehensive error handling**
- ✅ **Session persistence** with automatic refresh
- ✅ **Secure redirect flows**
- ✅ **CSRF protection** via Supabase

### User Experience
- ✅ **Modern, responsive UI** with Tailwind CSS
- ✅ **Loading states** and user feedback
- ✅ **Validation feedback** ("Invalid email", "Passwords do not match", etc.)
- ✅ **Beautiful parent dashboard** after successful login
- ✅ **Intuitive navigation** with user info and logout

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel-ready

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Supabase project (free tier available)

### 1. Clone and Install

\`\`\`bash
git clone <your-repo-url>
cd milo-time
npm install
\`\`\`

### 2. Set up Supabase

1. Go to [supabase.com](https://supabase.com) and create a new project
2. In your Supabase dashboard, go to **Settings > API**
3. Copy your **Project URL** and **anon public** key

### 3. Configure Environment Variables

1. Copy the example environment file:
\`\`\`bash
cp .env.local.example .env.local
\`\`\`

2. Update `.env.local` with your Supabase credentials:
\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
\`\`\`

### 4. Configure Supabase Auth

In your Supabase dashboard:

1. Go to **Authentication > Settings**
2. Add your site URL to **Site URL**: `http://localhost:3000`
3. Add redirect URLs to **Redirect URLs**:
   - `http://localhost:3000/auth/callback`
   - `http://localhost:3000/auth/reset-password`

For production, add your production URLs as well.

### 5. Run the Development Server

\`\`\`bash
npm run dev
\`\`\`

Visit [http://localhost:3000](http://localhost:3000) to see your app!

## 📱 Pages & Routes

### Public Routes
- `/` - Home page (redirects to login or dashboard)
- `/login` - Sign in page
- `/signup` - Create account page
- `/forgot-password` - Request password reset

### Protected Routes
- `/dashboard` - Parent dashboard (requires authentication)

### Auth Routes
- `/auth/callback` - Handles email confirmations
- `/auth/reset-password` - Set new password after reset

## 🔐 Authentication Flow

### Sign Up Process
1. User enters email and password (with confirmation)
2. System validates email format and password strength
3. Supabase sends confirmation email
4. User clicks email link → redirected to dashboard
5. Session is automatically managed

### Sign In Process
1. User enters email and password
2. System validates credentials
3. On success → redirect to dashboard
4. Session persists across browser sessions

### Password Reset Process
1. User enters email on forgot password page
2. Supabase sends reset email
3. User clicks reset link → redirected to reset password page
4. User sets new password → redirected to dashboard

## 🎨 UI Components

### Form Validation
- Real-time email format validation
- Password strength requirements
- Confirm password matching
- Clear error messages

### Loading States
- Spinner animations during API calls
- Disabled form inputs during submission
- User feedback for all actions

### Responsive Design
- Mobile-first approach
- Beautiful gradient backgrounds
- Card-based layouts
- Consistent spacing and typography

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repo to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Update Supabase redirect URLs with your production domain
5. Deploy!

### Environment Variables for Production

Make sure to set these in your deployment platform:

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_anon_key
\`\`\`

## 🔧 Customization

### Styling
- Modify `src/app/globals.css` for global styles
- Update Tailwind config in `tailwind.config.ts`
- Customize component styles using Tailwind classes

### Authentication Logic
- Modify `src/hooks/useAuth.tsx` for auth behavior
- Update validation rules in `src/lib/validation.ts`
- Customize error messages and user feedback

### Dashboard Content
- Edit `src/app/dashboard/page.tsx` for dashboard content
- Add new protected routes following the same pattern
- Customize navigation in `src/components/Navigation.tsx`

## 📚 Project Structure

\`\`\`
src/
├── app/                    # Next.js app router pages
│   ├── auth/              # Auth callback routes
│   ├── dashboard/         # Protected dashboard
│   ├── login/             # Sign in page
│   ├── signup/            # Sign up page
│   ├── forgot-password/   # Password reset request
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Navigation bar
│   └── ProtectedRoute.tsx # Route protection
├── hooks/                 # Custom React hooks
│   └── useAuth.tsx       # Authentication hook
└── lib/                   # Utility functions
    ├── supabase.ts       # Supabase client
    └── validation.ts     # Form validation
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues:

1. Check the [Supabase documentation](https://supabase.com/docs)
2. Verify your environment variables
3. Check browser console for errors
4. Ensure your Supabase project is properly configured

## 🎯 Next Steps

This authentication system provides a solid foundation. Consider adding:

- User profile management
- Email preferences
- Two-factor authentication
- Social login options
- Admin panel
- User analytics

---

**Built with ❤️ for parents everywhere**