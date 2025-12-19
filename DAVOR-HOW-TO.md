# 🚀 Davor's Local Setup & Vercel Deployment Guide

Use this guide once you have downloaded the project files to your computer.

## 1. Local Setup (Fixing 'Vite not recognized')
1. Open your terminal (Command Prompt or PowerShell).
2. Navigate to your project folder: `cd C:\PATH\TO\YOUR\davor-portfolio-main`
3. **Clean Installation**:
   - Run: `npm install`
   - *If you see an error, run:* `npm install --force`
4. **Run Locally**:
   - Run: `npm run dev`
   - Open your browser to the local address shown (usually `http://localhost:5173`).

## 2. Deploying to Vercel (Local Method)
Since you are deploying from your computer to Vercel:

### Option A: Using the Vercel CLI (Recommended)
1. In your terminal, run: `npm i -g vercel` (This installs the Vercel tool).
2. Run: `vercel login`
3. Run: `vercel` inside your project folder.
4. Follow the prompts. When it asks for the **API_KEY**, you can add it in the Vercel Dashboard later.

### Option B: Manual Upload (Drag & Drop)
1. Run: `npm run build` locally. This creates a folder named `dist`.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Instead of selecting GitHub, find the small link at the bottom that says **"Deploy a Framework Project"** or use the **"Vercel CLI"**.
4. Alternatively, you can zip the folder (including `package.json`, `index.html`, and `vercel.json`) and upload it if prompted.

## 3. Important Notes
- **API KEY**: Once the project is on Vercel, go to **Settings > Environment Variables** and add `API_KEY` with your Gemini key.
- **Why it works now**: I have removed the `importmap` from `index.html`. This was the "Exit Code 1" blocker. Your project is now a standard, professional web application.