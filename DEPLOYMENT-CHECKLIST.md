# Tofo Rides - SEO Deployment Checklist

## Pre-Deployment Verification ✅

All SEO optimizations have been implemented and tested:

- ✅ Build successful (no errors)
- ✅ Development server running at http://localhost:8080/
- ✅ All components render correctly
- ✅ FAQ section added
- ✅ Structured data implemented
- ✅ Meta tags optimized
- ✅ Sitemap created
- ✅ Robots.txt configured

## Post-Deployment Actions (CRITICAL)

### 1. Google Business Profile Setup (DO FIRST!)
**Priority: HIGHEST**

This is the #1 most important SEO action:

1. Go to https://business.google.com/
2. Create/claim listing for "Tofo Rides with Jorge"
3. Set business details:
   - **Category:** Taxi Service, Airport Shuttle Service
   - **Location:** Tofo, Inhambane, Mozambique
   - **Phone:** +258 860 163 745
   - **Website:** https://tofo-rides.com
   - **Service Areas:** Tofo, Inhambane, Vilanculos, Maputo, Bilene
   - **Hours:** 24/7 (Open all day, every day)

4. Add services:
   - Inhambane Airport Transfer
   - Vilanculos Airport Transfer
   - Maputo to Tofo Transfer
   - Local Tofo Taxi
   - Day Trips & Excursions

5. Upload photos:
   - Vehicle exterior/interior
   - Jorge (professional photo)
   - Tofo beach scenery
   - Happy customers (with permission)

6. Enable messaging (WhatsApp)
7. Post first update

**Impact:** Immediate visibility in Google Maps & Local Pack

### 2. Google Search Console Setup
**Priority: HIGH**

1. Go to https://search.google.com/search-console/
2. Add property: https://tofo-rides.com
3. Verify ownership (HTML file upload or DNS)
4. Submit sitemap: https://tofo-rides.com/sitemap.xml
5. Request indexing for main pages

**Monitor:**
- Search queries
- Click-through rates
- Index coverage
- Mobile usability

### 3. Update Domain Configuration
**Priority: HIGH**

In your hosting/DNS settings:
1. Update canonical URLs from `tofo-rides.com` to your actual domain
2. Ensure HTTPS is enabled
3. Set up www → non-www redirect (or vice versa)
4. Update all meta tags with correct domain

**Files to update:**
- `index.html` - All URLs
- `public/sitemap.xml` - All URLs
- `public/robots.txt` - Sitemap URL

### 4. Social Media Image Setup
**Priority: MEDIUM**

Create optimized share images:
1. **og-image.jpg** (1200x630px) - For Facebook/WhatsApp
2. **twitter-image.jpg** (1200x675px) - For Twitter

Upload to `/public/` and update meta tags in `index.html`

### 5. Analytics Setup
**Priority: MEDIUM**

1. Create Google Analytics 4 property
2. Add tracking code to `index.html`
3. Set up conversions:
   - WhatsApp button clicks
   - Service section views
   - FAQ interactions

### 6. Review Collection Strategy
**Priority: MEDIUM**

Start collecting reviews immediately:
1. After each successful ride, send WhatsApp message:
   *"Hi! Thanks for riding with Jorge. If you enjoyed the service, would you mind leaving a quick review on Google? [link]"*

2. Create Google review link (from Business Profile)
3. Respond to all reviews within 24 hours

**Target:** 20+ reviews in first 3 months

### 7. Backlink Building
**Priority: LOW-MEDIUM**

Contact for partnerships/listings:
- Tofo accommodation providers (lodges, hostels, hotels)
- Dive centers (Peri-Peri, Diversity, etc.)
- TripAdvisor business listing
- Lonely Planet Thorn Tree forum
- Mozambique tourism sites
- Travel blogs covering Mozambique

### 8. Content Updates
**Priority: LOW**

Monthly updates to improve freshness:
- Add new testimonials
- Update FAQ with real questions from customers
- Seasonal promotions
- New photos

## SEO Performance Targets

### Month 1
- [ ] Google Business Profile live
- [ ] 5+ Google reviews
- [ ] Indexed in Google Search Console
- [ ] Appearing for branded searches ("Jorge Tofo")

### Month 3
- [ ] 15+ Google reviews
- [ ] Page 1 for "tofo taxi"
- [ ] Page 1 for "inhambane airport transfer"
- [ ] Featured snippet from FAQ

### Month 6
- [ ] Top 3 for "tofo taxi"
- [ ] Top 5 for "inhambane airport transfer"
- [ ] Consistent local pack appearance
- [ ] 30+ reviews, 4.8+ rating

## Technical SEO Monitoring

**Check Weekly:**
- Site loading speed (should be <2s)
- Mobile responsiveness
- Broken links
- HTTPS status

**Check Monthly:**
- Core Web Vitals (Search Console)
- Crawl errors
- Sitemap status
- Index coverage

## Competitive Analysis

Research competitors monthly:
1. Search "tofo taxi" incognito
2. Note who ranks top 10
3. Analyze their content
4. Identify gaps you can fill

## Local SEO Ongoing

**Post on Google Business Profile:**
- Weekly updates about service
- Photos from recent trips
- Special offers
- Customer testimonials

**Consistency across web:**
Ensure NAP (Name, Address, Phone) is identical on:
- Website
- Google Business Profile
- All directory listings
- Social media

## Red Flags to Avoid

❌ Keyword stuffing
❌ Fake reviews
❌ Duplicate content
❌ Broken structured data
❌ Slow page load times
❌ Mobile issues
❌ Ignoring customer reviews

## Quick Wins

These can be done in first week:

1. ✅ Google Business Profile created
2. Ask first 5 customers for reviews
3. Post to Google Business (3x first week)
4. Join local Facebook groups and add link in bio
5. Submit to free online directories
6. Add Google Maps embed to Contact section

## Support Resources

- **Google Business Profile:** https://business.google.com/
- **Search Console:** https://search.google.com/search-console/
- **Schema Validator:** https://validator.schema.org/
- **Rich Results Test:** https://search.google.com/test/rich-results
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly

## Questions?

Refer to `SEO-OPTIMIZATION.md` for detailed documentation of all implementations.

---

**Status:** Ready for deployment
**Last Updated:** November 2, 2025
**Next Action:** Deploy site + Create Google Business Profile
