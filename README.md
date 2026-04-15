# Aayoush Dahal - Portfolio Website

A modern, fully responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript.

![Portfolio Preview](https://img.shields.io/badge/Status-Ready-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🚀 Features

### Sections
- ✅ **Hero Section** - Animated typing effect, CTA buttons, social links
- ✅ **About Section** - Professional intro with animated statistics
- ✅ **Services Section** - 3 service cards with hover effects
- ✅ **Portfolio Section** - Dynamic filtering, modal popup, 9 projects
- ✅ **Skills Section** - Animated progress bars & circular indicators
- ✅ **Testimonials Section** - Auto-sliding carousel with navigation
- ✅ **Contact Section** - Validated contact form
- ✅ **Footer** - Newsletter signup, quick links, social media

### Interactive Features
- 🎨 Light/Dark theme toggle
- 📱 Fully responsive design
- 🎯 Smooth scrolling navigation
- 🔄 Dynamic typing animation
- 🎭 Scroll-based fade-in animations
- 🎪 Portfolio filtering system
- 📊 Animated skill progress bars
- ✉️ Form validation
- ⬆️ Back-to-top button
- 🔄 Preloader animation
- 🍔 Mobile hamburger menu

## 📁 Project Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
└── README.md           # Documentation
```

## 🎯 Quick Start

### Option 1: Open Directly
1. Download all files to the same folder
2. Double-click `index.html` to open in your browser
3. That's it! The website is fully functional

### Option 2: Use Live Server (Recommended)
1. Install [VS Code](https://code.visualstudio.com/)
2. Install the "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"
4. Website opens at `http://localhost:5500`

### Option 3: Deploy Online
Upload files to any hosting platform:
- **GitHub Pages** (Free)
- **Netlify** (Free)
- **Vercel** (Free)
- **000webhost** (Free)

## 🎨 Customization Guide

### 1. Change Colors
Edit CSS variables in `styles.css` (lines 12-28):

```css
:root {
    --primary-color: #6366f1;      /* Change primary color */
    --secondary-color: #8b5cf6;    /* Change secondary color */
    --accent-color: #ec4899;       /* Change accent color */
}
```

### 2. Update Personal Information

**In `index.html`:**
- Line 54: Update name "Aayoush Dahal"
- Lines 93-95: Update social media links
- Lines 173-185: Update contact information
- Line 403: Update email address

### 3. Add Your Portfolio Projects

**In `script.js`** (starting at line 267), edit the `portfolioData` array:

```javascript
const portfolioData = [
    {
        id: 1,
        title: 'Your Project Title',
        category: 'development', // or 'uiux', 'web-design'
        categoryLabel: 'Web Development',
        image: 'path/to/your/image.jpg',
        description: 'Project description here...',
        tech: ['React', 'Node.js', 'MongoDB']
    },
    // Add more projects...
];
```

### 4. Replace Images

**Method 1: Use Your Own Images**
```html
<!-- Replace Unsplash URLs with your images -->
<img src="images/profile.jpg" alt="Aayoush Dahal">
```

**Method 2: Keep Using Unsplash**
- Find images at [unsplash.com](https://unsplash.com)
- Use the URL format: `https://images.unsplash.com/photo-ID?w=600&h=400&fit=crop`

### 5. Add Your CV

1. Add your CV file (e.g., `cv.pdf`) to the project folder
2. In `index.html` (line 147), update the download link:

```html
<a href="cv.pdf" download class="btn btn-primary download-cv">
    <span>Download CV</span>
    <i class="fas fa-download"></i>
</a>
```

### 6. Update Testimonials

In `index.html` (lines 340-410), modify the testimonial cards:

```html
<div class="testimonial-card">
    <div class="testimonial-header">
        <img src="client-image.jpg" alt="Client">
        <div class="testimonial-info">
            <h4>Client Name</h4>
            <p>Client Title</p>
        </div>
    </div>
    <!-- ... -->
    <p class="testimonial-text">Client feedback here...</p>
</div>
```

## 🛠️ Customization Examples

### Change Font
Add to `<head>` in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
```

Update in `styles.css`:
```css
body {
    font-family: 'Inter', sans-serif;
}
```

### Modify Typing Animation
In `script.js` (line 90), change the roles:
```javascript
const textArray = ['Your Role 1', 'Your Role 2', 'Your Role 3'];
```

### Adjust Animation Speed
In `styles.css`, modify transition variables:
```css
:root {
    --transition-fast: 0.2s ease;   /* Quick animations */
    --transition-base: 0.3s ease;   /* Normal animations */
    --transition-slow: 0.5s ease;   /* Slow animations */
}
```

## 📱 Responsive Breakpoints

```css
/* Desktop First - Default styles for desktop */

@media (max-width: 968px) {
    /* Tablet styles */
}

@media (max-width: 640px) {
    /* Mobile styles */
}
```

## 🔧 Advanced Features

### Enable Contact Form Backend

The form currently shows a success message without sending emails. To add real functionality:

**Option 1: Formspree (Easy)**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- Your form fields -->
</form>
```

**Option 2: EmailJS (No Backend Required)**
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Add their JavaScript library
3. Update the form submission in `script.js`

**Option 3: PHP Backend**
Create `send-email.php` and update form action:
```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    mail("your@email.com", "New Contact", $message);
}
?>
```

### Add Google Analytics

Add before `</head>` in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

## 🐛 Troubleshooting

### Images Not Loading
- Ensure image paths are correct
- Use relative paths: `./images/photo.jpg`
- Check file extensions (`.jpg`, `.png`, etc.)

### Animations Not Working
- Check JavaScript console for errors (F12)
- Ensure `script.js` is in the same folder
- Clear browser cache (Ctrl+Shift+R)

### Mobile Menu Not Opening
- Verify all three files are in the same folder
- Check that Font Awesome CDN is loading
- Test in different browsers

### Form Not Submitting
- This is intentional - add backend integration (see Advanced Features)
- Currently shows success message without sending

## 🎯 SEO Optimization

### Update Meta Tags
In `index.html` `<head>`:
```html
<meta name="description" content="Your custom description">
<meta name="keywords" content="web design, UI/UX, developer, portfolio">
<meta name="author" content="Aayoush Dahal">

<!-- Open Graph for Social Media -->
<meta property="og:title" content="Aayoush Dahal - Portfolio">
<meta property="og:description" content="Web Designer & Developer">
<meta property="og:image" content="path/to/preview-image.jpg">
<meta property="og:url" content="https://yourwebsite.com">
```

## 📦 Deployment Guide

### Deploy to GitHub Pages (Free)

1. Create GitHub account
2. Create new repository: `username.github.io`
3. Upload all files
4. Go to Settings → Pages
5. Select main branch → Save
6. Visit: `https://username.github.io`

### Deploy to Netlify (Free)

1. Sign up at [netlify.com](https://www.netlify.com)
2. Drag and drop your folder
3. Get instant URL: `https://yoursite.netlify.app`
4. Optional: Add custom domain

### Deploy to Vercel (Free)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in project folder
3. Follow prompts
4. Get URL: `https://yoursite.vercel.app`

## 🎨 Color Schemes

Try these pre-made color combinations:

### Ocean Blue
```css
--primary-color: #0ea5e9;
--secondary-color: #06b6d4;
--accent-color: #3b82f6;
```

### Purple Haze
```css
--primary-color: #8b5cf6;
--secondary-color: #a855f7;
--accent-color: #d946ef;
```

### Neon Green
```css
--primary-color: #10b981;
--secondary-color: #14b8a6;
--accent-color: #22c55e;
```

### Sunset Orange
```css
--primary-color: #f59e0b;
--secondary-color: #f97316;
--accent-color: #ef4444;
```

## 📊 Performance Tips

1. **Optimize Images**
   - Compress images before uploading
   - Use [TinyPNG](https://tinypng.com/)
   - Recommended: under 500KB per image

2. **Minify Code** (For Production)
   - Use [HTML Minifier](https://www.willpeavy.com/tools/minifier/)
   - Use [CSS Minifier](https://cssminifier.com/)
   - Use [JS Minifier](https://javascript-minifier.com/)

3. **Enable Caching**
   - Add `.htaccess` file (for Apache servers)
   ```apache
   <IfModule mod_expires.c>
     ExpiresActive On
     ExpiresByType image/jpg "access plus 1 year"
     ExpiresByType image/jpeg "access plus 1 year"
     ExpiresByType image/png "access plus 1 year"
     ExpiresByType text/css "access plus 1 month"
     ExpiresByType application/javascript "access plus 1 month"
   </IfModule>
   ```

## 🆘 Support

If you encounter issues:
1. Check the browser console (F12) for errors
2. Verify all files are in the same folder
3. Clear browser cache
4. Test in different browsers (Chrome, Firefox, Safari)

## 📝 License

Free to use for personal and commercial projects.

## 🌟 Credits

- **Font Awesome** - Icons
- **Google Fonts** - Poppins font
- **Unsplash** - Placeholder images

---

**Built with ❤️ by Aayoush Dahal**

Need help? Update this README as your project evolves!
