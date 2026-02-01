# Google Tag Manager Setup Guide

This project uses Google Tag Manager (GTM) with cookie consent integration.

## Setup Instructions

### 1. Get Your GTM Container ID

1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Create a new container or use an existing one
3. Copy your Container ID (format: `GTM-XXXXXXX`)

### 2. Add GTM ID to Your Site

Open `src/layouts/Layout.astro` and replace `GTM-XXXXXXX` with your actual GTM Container ID:

```astro
<meta name="gtm-id" content="GTM-XXXXXXX" />
```

### 3. Configure Google Analytics in GTM

1. In GTM, go to **Tags** → **New**
2. Choose **Google Analytics: GA4 Configuration**
3. Enter your GA4 Measurement ID
4. Set the trigger to **Consent Initialization - All Pages**
5. Under **Advanced Settings** → **Consent Settings**, configure:
   - **Analytics Storage**: Required
   - **Wait for consent before firing**: Yes
6. Save and publish

### 4. Cookie Consent Integration

The cookie consent is already integrated with GTM:

- **Essential cookies**: Always enabled
- **Analytics cookies**: Controls Google Analytics and GTM
- **Marketing cookies**: Controls advertising/marketing tags

When users accept analytics cookies, GTM is automatically loaded.

### 5. Testing

1. Open your site with browser dev tools
2. Check the **Console** for GTM initialization messages
3. Check the **Network** tab for GTM requests
4. Use [Google Tag Assistant](https://tagassistant.google.com/) to verify setup

### 6. Advanced Configuration

#### Custom Events

Send custom events to GTM:

```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "custom_event",
  eventCategory: "category",
  eventAction: "action",
  eventLabel: "label",
});
```

#### User Consent Updates

The cookie consent automatically updates GTM consent mode:

```javascript
// Automatically handled by CookieConsent.astro
gtag('consent', 'update', {
  'analytics_storage': 'granted', // or 'denied'
  'ad_storage': 'granted', // or 'denied'
});
```

## Customization

### Change Cookie Categories

Edit `src/components/CookieConsent.astro` to modify cookie categories:

```javascript
categories: {
  necessary: {
    enabled: true,
    readOnly: true,
  },
  analytics: {
    enabled: false,
    readOnly: false,
  },
  marketing: {
    enabled: false,
    readOnly: false,
  },
}
```

### Style Customization

Cookie consent styles are defined in `CookieConsent.astro` using CSS variables that match your design system:

```css
:root {
  --cc-bg: hsl(var(--background));
  --cc-text: hsl(var(--foreground));
  --cc-btn-primary-bg: hsl(var(--primary));
  /* ... */
}
```

## Resources

- [Google Tag Manager Documentation](https://developers.google.com/tag-manager)
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [Cookie Consent Library](https://github.com/orestbida/cookieconsent)
- [GTM Consent Mode](https://developers.google.com/tag-platform/security/guides/consent)

## Compliance

This implementation follows GDPR requirements:

- ✅ No cookies loaded before consent
- ✅ Granular consent options
- ✅ Easy consent withdrawal
- ✅ Clear cookie information
- ✅ Privacy policy links

Make sure to:
1. Update your privacy policy with cookie information
2. Document all cookies in the consent modal
3. Test consent flow thoroughly
4. Keep cookie consent library updated
