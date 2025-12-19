# 📘 Davor's Domain Management Manual (Updated)

You are seeing **"Verification Needed"** because Vercel needs extra proof that you own `ai-studio.wiki`. This happens if the domain was used by someone else on Vercel before.

---

## 1. The Namecheap "Double Fix"
You need to add **TWO** records in your Namecheap **Advanced DNS** tab.

### Record #1: The Connection (CNAME)
*   **Type**: `CNAME Record`
*   **Host**: `mulalic`
*   **Value (Target)**: `66694b83f1af40e1.vercel-dns-017.com.`
*   **TTL**: Automatic

### Record #2: The Security Proof (TXT)
*   **Type**: `TXT Record`
*   **Host**: `_vercel`
*   **Value (Target)**: `vc-domain-verify=mulalic.ai-studio.wiki,b1596424f9834344a9fe`
*   **TTL**: Automatic

---

## 2. Steps in Namecheap
1.  Log in to **Namecheap**.
2.  Go to **Domain List** -> `ai-studio.wiki` -> **Manage**.
3.  Click **Advanced DNS**.
4.  Click **+ Add New Record** for the CNAME (use the values above).
5.  Click **+ Add New Record** for the TXT (use the values above).
6.  Click the **Green Checkmark** for both.

---

## 3. Clear the Vercel Error
1.  Go back to the Vercel Dashboard.
2.  Wait 5 minutes and click **Refresh**.
3.  The status will change from **"Verification Needed"** to **"Valid Configuration"** (Green).

---

## 4. Final Deployment (How to Update)
To make the Contact Form work and fix the Vercel crash, follow these 3 steps:

### Step 1: Sync the Code
Save all the updated code I just provided into your project folder. Ensure `index.html` and `App.tsx` are updated.

### Step 2: Open Terminal
Navigate to your project folder in your terminal (Command Prompt or PowerShell).

### Step 3: Trigger Production Update
Run this exact command:
```bash
vercel --prod
```
*   This command bypasses the "Preview" phase and pushes your clean code directly to **https://mulalic.ai-studio.wiki**.
*   It will automatically rebuild the project without the problematic "Import Map".

---

### Why did I change index.html?
The "Import Map" block was intended for simple browser-native execution. When using a professional hosting platform like Vercel, the internal build system (Vite) manages these connections. Keeping the block caused a "conflict of interest" in the code, resulting in **Exit Code 1**. Removing it allows the site to build perfectly.

### Contact Form Fix
The form now uses **React State**. When you click "Send Message", it creates a pre-formatted email window. This ensures you receive high-quality inquiries with all the necessary details (Name, Organization, Interest) directly in your inbox.