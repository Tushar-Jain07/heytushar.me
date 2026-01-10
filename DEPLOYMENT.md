# Deployment Guide

## Pre-Deployment Checklist

Before deploying your portfolio, ensure you've completed these steps:

### 1. Content Updates
- [ ] Update project descriptions and links
- [ ] Add real project screenshots/images
- [ ] Verify all contact information is correct
- [ ] Check resume PDF is uploaded to `/public/Tushar_Jain_Resume.pdf`
- [ ] Add real social media links
- [ ] Update domain in SEO tags (if different from heytushar.me)

### 2. Images & Assets
- [ ] Create favicon files:
  - `/public/favicon.ico`
  - `/public/favicon-16x16.png`
  - `/public/favicon-32x32.png`
  - `/public/apple-touch-icon.png`
- [ ] Add Open Graph image: `/public/og-image.png` (1200x630px)
- [ ] Optimize all images for web

### 3. SEO Updates
- [ ] Update URLs in `_document.js` to your actual domain
- [ ] Update sitemap.xml with your domain
- [ ] Update robots.txt with your domain
- [ ] Verify meta descriptions are accurate

### 4. Testing
- [ ] Test on mobile devices
- [ ] Test contact form
- [ ] Test all navigation links
- [ ] Check responsive design
- [ ] Test in different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify animations work smoothly
- [ ] Check accessibility with screen reader

---

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel offers the best experience for Next.js applications.

1. **Install Vercel CLI** (optional)
   ```bash
   npm install -g vercel
   ```

2. **Deploy via Git**
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and deploy

3. **Deploy via CLI**
   ```bash
   vercel
   ```

**Environment Variables:** (if needed)
- None required for this portfolio

---

### Option 2: Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy**
   - Connect your Git repository
   - Netlify will auto-build and deploy

---

### Option 3: Custom Server (VPS/Cloud)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

3. **Using PM2 for process management**
   ```bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

4. **Nginx Configuration** (example)
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

---

## Post-Deployment Tasks

### 1. Verify Deployment
- [ ] Visit your live site
- [ ] Test all features
- [ ] Check mobile responsiveness
- [ ] Verify contact form works
- [ ] Check all links work

### 2. SEO & Analytics

**Google Search Console**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property
3. Submit sitemap: `https://yourdomain.com/sitemap.xml`

**Google Analytics** (optional)
1. Create GA4 property
2. Add tracking code to `_app.js`

**Bing Webmaster Tools** (optional)
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add your site
3. Submit sitemap

### 3. Social Media

**Test Social Sharing**
- Facebook: [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug/)
- Twitter: [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)
- LinkedIn: [linkedin.com/post-inspector](https://www.linkedin.com/post-inspector/)

### 4. Performance Optimization

**Check Performance**
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

**Optimize if needed:**
- Enable Vercel Analytics
- Enable image optimization
- Use CDN for assets
- Enable compression

---

## Domain Setup

### Custom Domain on Vercel

1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### SSL Certificate
- Vercel automatically provisions SSL certificates
- Netlify also provides automatic SSL
- For custom servers, use [Let's Encrypt](https://letsencrypt.org/)

---

## Maintenance

### Regular Updates

**Monthly:**
- [ ] Check for dependency updates: `npm outdated`
- [ ] Update dependencies: `npm update`
- [ ] Review security vulnerabilities: `npm audit`

**As Needed:**
- [ ] Update project portfolio
- [ ] Add new blog posts (if implemented)
- [ ] Refresh resume
- [ ] Update skills

### Monitoring

**Set up monitoring for:**
- Uptime monitoring (e.g., UptimeRobot)
- Error tracking (e.g., Sentry)
- Analytics (Google Analytics)

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Kill process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac:
lsof -ti:3000 | xargs kill
```

### Images Not Loading
- Check image paths are correct
- Verify images are in `/public` directory
- Check Next.js image optimization settings

---

## Environment Variables (if needed in future)

Create `.env.local` file:
```env
# Email Service (if you add backend)
EMAIL_SERVICE_API_KEY=your_api_key

# Analytics
NEXT_PUBLIC_GA_ID=your_ga_id

# Other keys
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## Backup

**Regular Backups:**
1. Code is backed up via Git
2. Export database (if added later)
3. Backup media files
4. Document configuration

---

## Support & Resources

- **Next.js Documentation:** [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)
- **Tailwind CSS:** [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **React Documentation:** [react.dev](https://react.dev)

---

**Last Updated:** December 7, 2025
