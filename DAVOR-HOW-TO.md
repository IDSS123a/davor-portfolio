# 🚀 Davor's Easy Project Management Guide

Follow these steps to download your project, check it, and put it on the live internet using Vercel.

---

## 1. How to get the project onto your laptop
1.  **Download**: Click the download button on your screen to save the project as a `.zip` file.
2.  **Unzip**: Right-click the file and select "Extract All" to see the project folder.
3.  **Prepare**: Make sure you have a tool called **Node.js** installed (you can get it at nodejs.org — choose the "LTS" version).

---

## 2. How to check the files on your laptop
1.  **Open Terminal**: Search for "Command Prompt" or "PowerShell" on your laptop and open it.
2.  **Go to Folder**: Type `cd` followed by a space, then drag your project folder into the window and press **Enter**.
3.  **Install**: Type `npm install` and press **Enter**. Wait for the progress bar to finish.
4.  **Run**: Type `npm run dev` and press **Enter**. 
5.  **View**: A web address like `http://localhost:5173` will appear. Click it or copy it into your browser to see your website locally.

---

## 3. How to log in to Vercel
1.  Go to **Vercel.com** and sign in with your account.
2.  On your laptop terminal, type `npm i -g vercel` to install the Vercel tool (only do this once).
3.  Type `vercel login` and follow the instructions to link your laptop to your account.

---

## 4. How to upload or connect from your laptop
1.  Inside your project folder in the terminal, type `vercel`.
2.  It will ask "Set up and deploy?". Type `y` and press **Enter**.
3.  Follow the prompts (choose "default" settings by pressing Enter for most questions).
4.  Once it finishes, it will give you a "Preview" link to see the uploaded version.

---

## 5. How to make the website update (Redeploy)
1.  When you are ready to make the changes live on your main domain (`mulalic.ai-studio.wiki`), type:
    `vercel --prod`
2.  Wait for the "Production" link to appear. Your website is now updated!

---

## 6. How to confirm it worked correctly
1.  Open your browser and go to: `https://mulalic.ai-studio.wiki/`
2.  Check the **Portfolio** section. You should see exactly 20 Apps and 20 Prompts.
3.  Check the **Case Studies**. You should see exactly 3 items, and they should be generic (no company names).

---

## 7. Troubleshooting (If things go wrong)
*   **"Command not found"**: This usually means Node.js is not installed. Re-install from nodejs.org.
*   **"Permission denied"**: On a Mac, you might need to type `sudo` before your commands.
*   **"AI Chat is not working"**: Ensure your `API_KEY` is added in the Vercel Dashboard under **Settings > Environment Variables**.

---

**Davor Mulalić Portfolio - Content & Visual Standard Verified.**
