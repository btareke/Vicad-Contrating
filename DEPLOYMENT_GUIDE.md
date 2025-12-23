# GitHub Pages Deployment Guide for VICAD Contracting Website

This guide will walk you through deploying your VICAD Contracting website to GitHub Pages.

## Prerequisites

- Your code is already pushed to GitHub at: `https://github.com/btareke/Vicad-Contrating`
- You have admin access to the repository

## Step-by-Step Deployment Instructions

### Option 1: Deploy from the `commit` branch (Current Branch)

1. **Navigate to Repository Settings**
   - Go to https://github.com/btareke/Vicad-Contrating
   - Click on the **Settings** tab (top right of the repository)

2. **Access Pages Settings**
   - Scroll down in the left sidebar and click on **Pages**

3. **Configure Source**
   - Under **Source**, select:
     - **Branch**: `commit`
     - **Folder**: `/ (root)`
   - Click **Save**

4. **Wait for Deployment**
   - GitHub will build and deploy your site (usually takes 1-2 minutes)
   - You'll see a green checkmark when deployment is complete

5. **Access Your Site**
   - Your site will be available at:
     ```
     https://btareke.github.io/Vicad-Contrating/
     ```

### Option 2: Deploy from `main` branch (Recommended)

If you prefer to use the `main` branch (GitHub Pages default):

1. **Switch to main branch or create it**
   ```bash
   git checkout -b main
   git push -u origin main
   ```

2. **Follow Steps 1-5 from Option 1**, but select `main` as the branch instead of `commit`

## Important Notes

### File Paths
- Make sure all image paths are relative (e.g., `Pictures/Logo.png`)
- Your current setup uses relative paths, which is correct for GitHub Pages

### Custom Domain (Optional)
If you want to use a custom domain:
1. In Pages settings, add your custom domain
2. Update your DNS records as instructed by GitHub
3. Enable HTTPS (GitHub will do this automatically)

### Updating Your Site
Every time you push changes to the selected branch:
- GitHub Pages will automatically rebuild and deploy
- Updates typically go live within 1-2 minutes
- You can check deployment status in the **Actions** tab

## Troubleshooting

### Site Not Loading
- Check the **Actions** tab for build errors
- Verify all file paths are correct (case-sensitive)
- Ensure `index.html` is in the root directory

### Images Not Showing
- Verify image files are committed to the repository
- Check that image paths match exactly (case-sensitive)
- Use relative paths: `Pictures/filename.png` not absolute paths

### 404 Error
- Make sure `index.html` exists in the root directory
- Check that the branch name matches what's configured in Pages settings

## Quick Reference

- **Repository**: https://github.com/btareke/Vicad-Contrating
- **Pages URL**: https://btareke.github.io/Vicad-Contrating/
- **Settings**: https://github.com/btareke/Vicad-Contrating/settings/pages

## Next Steps After Deployment

1. Test all links and navigation
2. Verify all images load correctly
3. Test the contact form functionality
4. Check mobile responsiveness
5. Share your live site URL!

---

**Need Help?** Check GitHub's official documentation: https://docs.github.com/en/pages

