# Complete Deployment Guide: GitHub Pages + GoDaddy Custom Domain

This comprehensive guide will walk you through deploying your VICAD Contracting website to GitHub Pages and connecting it to a custom domain from GoDaddy.

---

## Part 1: GitHub Pages Setup

### Step 1: Enable GitHub Pages

1. **Navigate to Your Repository**
   - Go to: https://github.com/btareke/Vicad-Contrating
   - Click on the **Settings** tab (located in the top menu bar of your repository)

2. **Access Pages Settings**
   - In the left sidebar, scroll down and click on **Pages**
   - You'll see the "GitHub Pages" configuration page

3. **Configure Source**
   - Under **Source**, select:
     - **Branch**: `commit` (or `main` if you prefer)
     - **Folder**: `/ (root)`
   - Click **Save**

4. **Wait for Initial Deployment**
   - GitHub will build and deploy your site (usually takes 1-2 minutes)
   - You'll see a green checkmark ✓ when deployment is complete
   - Your site will be temporarily available at:
     ```
     https://btareke.github.io/Vicad-Contrating/
     ```

---

## Part 2: GoDaddy Domain Configuration

### Step 2: Access GoDaddy DNS Settings

1. **Log into GoDaddy**
   - Go to: https://www.godaddy.com
   - Click **Sign In** (top right)
   - Enter your GoDaddy account credentials

2. **Navigate to Domain Management**
   - Click on your account name (top right)
   - Select **My Products** from the dropdown
   - Find your domain name in the list
   - Click **DNS** next to your domain (or click the domain name, then click **DNS**)

3. **View Current DNS Records**
   - You'll see a table with your current DNS records
   - Note: You may need to scroll down to see all records

### Step 3: Configure DNS Records for GitHub Pages

You have two options for connecting your domain:

#### Option A: Using Apex Domain (e.g., `vicadcontracting.com`)

If you want to use your domain without `www`:

1. **Find Existing A Records**
   - Look for records with:
     - **Type**: `A`
     - **Name**: `@` (or blank/empty)
   - Note: You may have multiple A records

2. **Update A Records**
   - Delete or update existing A records pointing to other IPs
   - Add/Update these **4 A Records** (GitHub Pages IPs):
   
   | Type | Name | Value | TTL |
   |------|------|-------|-----|
   | A | @ | 185.199.108.153 | 600 seconds (or 1 hour) |
   | A | @ | 185.199.109.153 | 600 seconds (or 1 hour) |
   | A | @ | 185.199.110.153 | 600 seconds (or 1 hour) |
   | A | @ | 185.199.111.153 | 600 seconds (or 1 hour) |

   **How to add each record:**
   - Click **Add** button
   - Select **Type**: `A`
   - Enter **Name**: `@` (or leave blank if @ is not accepted)
   - Enter **Value**: One of the IP addresses above
   - Set **TTL**: `600 seconds` (or 1 hour)
   - Click **Save**
   - Repeat for all 4 IP addresses

#### Option B: Using www Subdomain (e.g., `www.vicadcontracting.com`)

If you prefer using `www`:

1. **Add CNAME Record**
   - Click **Add** button
   - Select **Type**: `CNAME`
   - Enter **Name**: `www`
   - Enter **Value**: `btareke.github.io` (your GitHub username + .github.io)
   - Set **TTL**: `600 seconds` (or 1 hour)
   - Click **Save**

2. **Optional: Redirect Apex to www**
   - If you want `vicadcontracting.com` to redirect to `www.vicadcontracting.com`:
   - Add an A record pointing to GitHub's IPs (see Option A)
   - Or use GoDaddy's forwarding feature

### Step 4: Save DNS Changes

1. **Review Your Changes**
   - Double-check all DNS records are correct
   - Make sure there are no conflicting records

2. **Wait for DNS Propagation**
   - DNS changes can take 24-48 hours to fully propagate
   - Usually takes 1-4 hours in most cases
   - You can check propagation status at: https://www.whatsmydns.net

---

## Part 3: Connect Domain to GitHub Pages

### Step 5: Add Custom Domain in GitHub

1. **Return to GitHub Pages Settings**
   - Go back to: https://github.com/btareke/Vicad-Contrating/settings/pages
   - Scroll down to **Custom domain** section

2. **Enter Your Domain**
   - In the **Custom domain** field, enter:
     - `vicadcontracting.com` (if using apex domain)
     - OR `www.vicadcontracting.com` (if using www subdomain)
   - Click **Save**

3. **GitHub Will Create CNAME File**
   - GitHub automatically creates a `CNAME` file in your repository
   - This file contains your domain name
   - **Important**: Do not delete this file!

4. **Enable Enforce HTTPS** (Recommended)
   - After DNS propagates (usually within a few hours), you'll see:
     - ☑️ **Enforce HTTPS** checkbox
   - Check this box to enable SSL/HTTPS
   - This ensures your site is secure and uses HTTPS

---

## Part 4: Verification and Testing

### Step 6: Verify DNS Configuration

1. **Check DNS Records**
   - Visit: https://www.whatsmydns.net
   - Enter your domain name
   - Select **A** record type
   - Verify it shows GitHub's IP addresses (185.199.108.153, etc.)

2. **Test Domain Connection**
   - Wait 1-4 hours after DNS changes
   - Visit your domain in a browser: `http://vicadcontracting.com`
   - If it works, you'll see your GitHub Pages site

### Step 7: Enable HTTPS (SSL Certificate)

1. **Wait for DNS Propagation**
   - GitHub needs to verify your domain ownership
   - This usually happens automatically within 24 hours

2. **Enable HTTPS**
   - Go back to GitHub Pages settings
   - Check the **Enforce HTTPS** checkbox
   - GitHub will automatically provision an SSL certificate
   - Your site will now use `https://` instead of `http://`

3. **Verify HTTPS Works**
   - Visit: `https://vicadcontracting.com`
   - You should see a padlock icon in your browser
   - The site should load securely

---

## Part 5: Final Configuration

### Step 8: Update Repository (If Needed)

If you need to manually create or update the CNAME file:

1. **Create CNAME File** (if GitHub didn't create it automatically)
   ```bash
   echo "vicadcontracting.com" > CNAME
   # OR
   echo "www.vicadcontracting.com" > CNAME
   ```

2. **Commit and Push**
   ```bash
   git add CNAME
   git commit -m "Add custom domain CNAME file"
   git push origin commit
   ```

### Step 9: Test Your Website

1. **Test All Pages**
   - Home page loads correctly
   - Navigation links work
   - Images display properly
   - Contact form functions (if applicable)

2. **Test Mobile Responsiveness**
   - Open site on mobile device
   - Test on different screen sizes
   - Verify all elements are visible and functional

3. **Test HTTPS**
   - Ensure site redirects from HTTP to HTTPS
   - Verify SSL certificate is valid
   - Check for mixed content warnings

---

## Troubleshooting

### DNS Not Propagating

**Problem**: Domain not resolving after 24 hours

**Solutions**:
- Double-check DNS records in GoDaddy match exactly
- Clear your browser cache and DNS cache:
  ```bash
  # Mac/Linux
  sudo dscacheutil -flushcache
  
  # Windows (run in Command Prompt as Admin)
  ipconfig /flushdns
  ```
- Use different DNS checker: https://dnschecker.org
- Contact GoDaddy support if issues persist

### GitHub Pages Not Showing Custom Domain

**Problem**: Site shows GitHub Pages default page

**Solutions**:
- Verify CNAME file exists in repository root
- Check CNAME file contains correct domain (no www if using apex)
- Ensure DNS records are correct
- Wait for DNS propagation (can take up to 48 hours)

### HTTPS Not Enabling

**Problem**: "Enforce HTTPS" checkbox is grayed out

**Solutions**:
- Wait 24-48 hours for DNS to fully propagate
- Verify DNS records point to GitHub's IPs
- Remove any conflicting DNS records
- Check that CNAME file is in repository root
- Try removing and re-adding the custom domain

### Mixed Content Warnings

**Problem**: Browser shows "Not Secure" or mixed content warnings

**Solutions**:
- Ensure all images use HTTPS URLs (if using external images)
- Check that all resources load over HTTPS
- Use relative paths for local images (already done in your code)

### Images Not Loading

**Problem**: Images don't display on live site

**Solutions**:
- Verify image files are committed to repository
- Check image paths are relative (e.g., `Pictures/Logo.png`)
- Ensure file names match exactly (case-sensitive)
- Clear browser cache

---

## Quick Reference

### Important URLs

- **GitHub Repository**: https://github.com/btareke/Vicad-Contrating
- **GitHub Pages Settings**: https://github.com/btareke/Vicad-Contrating/settings/pages
- **GoDaddy DNS Management**: https://dcc.godaddy.com/manage
- **DNS Checker**: https://www.whatsmydns.net
- **SSL Checker**: https://www.ssllabs.com/ssltest/

### GitHub Pages IP Addresses (for A Records)

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### Common GoDaddy DNS Settings

**For Apex Domain (vicadcontracting.com)**:
- Type: A
- Name: @
- Value: 185.199.108.153 (and 3 more A records with other IPs)

**For www Subdomain (www.vicadcontracting.com)**:
- Type: CNAME
- Name: www
- Value: btareke.github.io

---

## Maintenance

### Updating Your Website

1. **Make Changes Locally**
   - Edit files on your computer
   - Test changes locally

2. **Commit and Push**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin commit
   ```

3. **Automatic Deployment**
   - GitHub Pages automatically rebuilds your site
   - Changes go live within 1-2 minutes
   - Check deployment status in the **Actions** tab

### Monitoring

- **Check Site Status**: Visit your domain regularly
- **Monitor DNS**: Use DNS checker tools periodically
- **SSL Certificate**: GitHub automatically renews SSL certificates
- **GitHub Actions**: Check for deployment errors in Actions tab

---

## Support Resources

- **GitHub Pages Documentation**: https://docs.github.com/en/pages
- **GoDaddy Help Center**: https://www.godaddy.com/help
- **DNS Propagation Checker**: https://www.whatsmydns.net
- **SSL Test**: https://www.ssllabs.com/ssltest/

---

## Checklist

Use this checklist to ensure everything is set up correctly:

- [ ] GitHub Pages enabled and site is live on `.github.io` URL
- [ ] DNS records configured in GoDaddy
- [ ] Custom domain added in GitHub Pages settings
- [ ] CNAME file created in repository
- [ ] DNS propagated (verified with DNS checker)
- [ ] Site accessible via custom domain (HTTP)
- [ ] HTTPS enabled and working
- [ ] All images and resources load correctly
- [ ] Navigation and links work properly
- [ ] Mobile responsiveness tested
- [ ] Contact form tested (if applicable)

---

**Congratulations!** Your VICAD Contracting website is now live with a custom domain! 🎉
