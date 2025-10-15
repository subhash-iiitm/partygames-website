# Deployment Guide - PartyGamePortal

## 🚀 Free Hosting Options

### Option 1: DigitalOcean App Platform (RECOMMENDED - FREE)

DigitalOcean App Platform allows **3 free static sites**.

#### Steps:

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/PartyGamePortal.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on DigitalOcean:**
   - Go to https://cloud.digitalocean.com/apps
   - Click "Create App"
   - Connect your GitHub account
   - Select your repository
   - DigitalOcean will auto-detect the `.do/app.yaml` configuration
   - Select the **FREE Static Site plan**
   - Click "Create Resources"

3. **Done!** Your site will be live at: `https://party-game-portal-xxxxx.ondigitalocean.app`

#### Custom Domain (Optional):
- In App Settings → Domains → Add Domain
- Point your DNS A record to DigitalOcean's IP
- SSL certificate is automatic and free!

---

### Option 2: Vercel (FREE - Unlimited Bandwidth)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```
   - Follow prompts
   - Set output directory: `dist/public`
   - Done!

---

### Option 3: Netlify (FREE)

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy:**
   ```bash
   netlify deploy --prod
   ```
   - Choose `dist/public` as deploy folder

---

### Option 4: GitHub Pages (FREE)

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts:**
   ```json
   "deploy": "npm run build && gh-pages -d dist/public"
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Enable in GitHub:**
   - Repo Settings → Pages → Source: `gh-pages` branch

---

### Option 5: Cloudflare Pages (FREE - Best Performance)

1. **Push to GitHub (if not done)**

2. **Go to:** https://pages.cloudflare.com/
   - Connect GitHub
   - Select repository
   - Build command: `npm run build`
   - Output directory: `dist/public`
   - Deploy!

---

## 📊 Comparison

| Platform | Free Tier | Bandwidth | SSL | Custom Domain | Build Time |
|----------|-----------|-----------|-----|---------------|------------|
| **DigitalOcean** | 3 sites | 100GB/mo | ✅ | ✅ | ~2-3 min |
| **Vercel** | Unlimited | Unlimited | ✅ | ✅ | ~1-2 min |
| **Netlify** | Unlimited | 100GB/mo | ✅ | ✅ | ~1-2 min |
| **GitHub Pages** | Unlimited | 100GB/mo | ✅ | ✅ | ~2-4 min |
| **Cloudflare** | Unlimited | Unlimited | ✅ | ✅ | ~1 min |

## 🎯 Recommendation

**For you:** Use **Vercel** or **Cloudflare Pages** - they're the fastest, easiest, and completely free with unlimited bandwidth!

If you want DigitalOcean specifically, the App Platform is great and offers 3 free static sites.

