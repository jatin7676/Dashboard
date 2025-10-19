# Vercel Deployment Guide

## Required Environment Variables

Make sure to add these environment variables in your Vercel project settings:

### 1. POSTGRES_URL
Your PostgreSQL database connection string.
```
POSTGRES_URL=postgresql://username:password@host:port/database?sslmode=require
```

### 2. AUTH_SECRET (CRITICAL!)
This is required for NextAuth.js to work properly. Without it, you'll get 404 errors after login.

To generate a secure AUTH_SECRET:
```bash
openssl rand -base64 32
```

Or use an online generator: https://generate-secret.vercel.app/32

Add it to Vercel:
```
AUTH_SECRET=your_generated_secret_here
```

## How to Add Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Click on "Settings"
3. Click on "Environment Variables"
4. Add each variable:
   - Name: `POSTGRES_URL`
   - Value: Your database connection string
   - Name: `AUTH_SECRET`
   - Value: Your generated secret
5. Make sure to select all environments (Production, Preview, Development)
6. Click "Save"
7. Redeploy your application

## Troubleshooting 404 After Login

If you're getting a 404 error after login, check:

1. ✅ AUTH_SECRET is set in Vercel environment variables
2. ✅ POSTGRES_URL is correct and accessible
3. ✅ The users table exists in your database
4. ✅ The middleware is properly configured

## Verify Environment Variables

After adding the variables, redeploy:
```bash
git push origin main
```

Then check the deployment logs in Vercel to ensure the variables are loaded correctly.

