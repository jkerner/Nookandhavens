# Nook & Haven Logo Implementation Guide

## Files Provided
- `nook-haven-logo.png` - Standard transparent PNG
- `nook-haven-logo-optimized.png` - Web-optimized version (recommended)

Original dimensions: 1094 × 612 pixels

---

## HTML Implementation

### Basic Header Logo
```html
<header class="site-header">
  <a href="/" class="logo-link">
    <img src="/images/nook-haven-logo-optimized.png" 
         alt="Nook and Haven" 
         class="site-logo">
  </a>
  <nav>
    <!-- navigation items -->
  </nav>
</header>
```

### With Multiple Sizes (Responsive)
```html
<a href="/" class="logo-link">
  <img src="/images/nook-haven-logo-optimized.png" 
       alt="Nook and Haven" 
       class="site-logo"
       width="250"
       height="140">
</a>
```

---

## CSS Styling Options

### Option 1: Fixed Header Logo
```css
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: white;
}

.logo-link {
  display: inline-block;
  line-height: 0; /* Prevents extra space below image */
}

.site-logo {
  height: 60px; /* Adjust as needed */
  width: auto;
  display: block;
}
```

### Option 2: Responsive Logo (Mobile-Friendly)
```css
.site-logo {
  height: 50px;
  width: auto;
  display: block;
  transition: height 0.3s ease;
}

@media (min-width: 768px) {
  .site-logo {
    height: 70px;
  }
}

@media (min-width: 1024px) {
  .site-logo {
    height: 80px;
  }
}
```

### Option 3: Centered Logo (Hero/Full Width)
```css
.hero-logo {
  max-width: 400px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: block;
}

@media (min-width: 768px) {
  .hero-logo {
    max-width: 500px;
  }
}
```

### Option 4: Sticky Header with Shrinking Logo
```css
.site-header {
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  transition: padding 0.3s ease;
  z-index: 1000;
  padding: 1.5rem 2rem;
}

.site-header.scrolled {
  padding: 0.75rem 2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.site-logo {
  height: 70px;
  width: auto;
  transition: height 0.3s ease;
}

.site-header.scrolled .site-logo {
  height: 50px;
}
```

**JavaScript for sticky header:**
```javascript
window.addEventListener('scroll', function() {
  const header = document.querySelector('.site-header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
```

---

## Common Use Cases

### 1. Header Navigation
```html
<header class="site-header">
  <div class="header-container">
    <a href="/" class="logo-link">
      <img src="/images/nook-haven-logo-optimized.png" 
           alt="Nook and Haven" 
           class="site-logo">
    </a>
    <nav class="main-nav">
      <a href="/stays">Stays</a>
      <a href="/homes">Homes</a>
      <a href="/retreats">Retreats</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  </div>
</header>
```

```css
.header-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.site-logo {
  height: 60px;
  width: auto;
}

.main-nav {
  display: flex;
  gap: 2rem;
}

.main-nav a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.main-nav a:hover {
  color: #000;
}
```

### 2. Homepage Hero
```html
<section class="hero">
  <img src="/images/nook-haven-logo-optimized.png" 
       alt="Nook and Haven" 
       class="hero-logo">
  <h1>Find Your Next Special Place</h1>
  <p class="hero-subtitle">
    Whether you're searching for a home to call your own, 
    a retreat to reset your spirit, or a stay that sparks 
    something new—your perfect space is here.
  </p>
</section>
```

```css
.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: #fafafa;
}

.hero-logo {
  max-width: 350px;
  width: 100%;
  height: auto;
  margin-bottom: 2rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}
```

### 3. Footer Logo
```html
<footer class="site-footer">
  <div class="footer-content">
    <img src="/images/nook-haven-logo-optimized.png" 
         alt="Nook and Haven" 
         class="footer-logo">
    <p>&copy; 2026 Nook and Haven. All rights reserved.</p>
  </div>
</footer>
```

```css
.site-footer {
  background: #f5f5f5;
  padding: 3rem 2rem;
  text-align: center;
}

.footer-logo {
  height: 50px;
  width: auto;
  margin-bottom: 1rem;
  opacity: 0.8;
}
```

---

## Recommended Sizes for Different Uses

| Use Case | Recommended Height | Notes |
|----------|-------------------|-------|
| Desktop Header | 60-80px | Balance between visibility and space |
| Mobile Header | 40-50px | Smaller for limited screen space |
| Hero Section | 300-500px width | Let width drive size, maintain aspect ratio |
| Footer | 40-60px | Slightly smaller, more subtle |
| Favicon | 32×32px, 180×180px | Will need separate square crop |
| Social Media | 1200×630px | For Open Graph, will need different treatment |

---

## SVG Version (Optional Future Enhancement)

For even better scalability and smaller file size, consider converting to SVG:

```html
<img src="/images/nook-haven-logo.svg" 
     alt="Nook and Haven" 
     class="site-logo">
```

Benefits of SVG:
- Infinitely scalable without quality loss
- Typically smaller file size
- Can animate or change colors with CSS
- Better for high-DPI displays

---

## Accessibility Best Practices

Always include descriptive alt text:
```html
<!-- Good -->
<img src="logo.png" alt="Nook and Haven">

<!-- Better for homepage -->
<img src="logo.png" alt="Nook and Haven - Find your next special place">

<!-- In navigation, logo is already linked -->
<a href="/" aria-label="Nook and Haven home page">
  <img src="logo.png" alt="Nook and Haven">
</a>
```

---

## Performance Optimization

### Lazy Loading (for logos below the fold)
```html
<img src="logo.png" 
     alt="Nook and Haven" 
     loading="lazy">
```

### Preloading (for critical above-the-fold logo)
```html
<link rel="preload" 
      href="/images/nook-haven-logo-optimized.png" 
      as="image">
```

---

## Dark Mode Support (Optional)

If your site supports dark mode, you might want to adjust the logo:

```css
.site-logo {
  height: 60px;
  width: auto;
}

/* Option 1: Invert colors for dark mode */
@media (prefers-color-scheme: dark) {
  .site-logo {
    filter: invert(1);
  }
}

/* Option 2: Use a different logo file */
@media (prefers-color-scheme: dark) {
  .site-logo {
    content: url('/images/nook-haven-logo-white.png');
  }
}
```

---

## Quick Start Template

Here's a complete, ready-to-use header:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nook and Haven</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }
    
    .site-header {
      background: white;
      padding: 1rem 2rem;
      box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    }
    
    .header-container {
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .logo-link {
      display: inline-block;
      line-height: 0;
    }
    
    .site-logo {
      height: 60px;
      width: auto;
      display: block;
    }
    
    .main-nav {
      display: flex;
      gap: 2rem;
      align-items: center;
    }
    
    .main-nav a {
      color: #333;
      text-decoration: none;
      font-weight: 500;
      font-size: 1rem;
      transition: color 0.2s;
    }
    
    .main-nav a:hover {
      color: #000;
    }
    
    @media (max-width: 768px) {
      .site-logo {
        height: 45px;
      }
      
      .main-nav {
        gap: 1rem;
      }
      
      .main-nav a {
        font-size: 0.9rem;
      }
    }
  </style>
</head>
<body>
  <header class="site-header">
    <div class="header-container">
      <a href="/" class="logo-link">
        <img src="/images/nook-haven-logo-optimized.png" 
             alt="Nook and Haven" 
             class="site-logo">
      </a>
      <nav class="main-nav">
        <a href="/stays">Stays</a>
        <a href="/homes">Homes</a>
        <a href="/retreats">Retreats</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  </header>
  
  <!-- Your page content here -->
  
</body>
</html>
```

This template is production-ready and mobile-responsive!
