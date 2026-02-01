# CryptoVault - Premium UI Design System

## Overview
A modern, premium black & white theme for crypto wallet applications. Inspired by Apple's design language and Web3 aesthetics.

---

## 🎨 Design Tokens

### Core Colors
```css
--color-black: #000000;
--color-white: #ffffff;
```

### Gray Scale
```css
--gray-50:  #fafafa;
--gray-100: #f5f5f5;
--gray-200: #e5e5e5;
--gray-300: #d4d4d4;
--gray-400: #a3a3a3;
--gray-500: #737373;
--gray-600: #525252;
--gray-700: #404040;
--gray-800: #262626;
--gray-900: #171717;
--gray-950: #0a0a0a;
```

### Semantic Colors
```css
--bg-primary:   #000000;    /* Main background */
--bg-secondary: #0a0a0a;    /* Secondary surfaces */
--bg-tertiary:  #171717;    /* Elevated surfaces */
--bg-glass:     rgba(255, 255, 255, 0.03);

--text-primary:   #ffffff;
--text-secondary: #a3a3a3;
--text-muted:     #737373;

--border-primary: rgba(255, 255, 255, 0.1);
--border-hover:   rgba(255, 255, 255, 0.2);
```

### Status Colors
```css
--success: #22c55e;
--error:   #ef4444;
--warning: #f59e0b;
```

---

## 📐 Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| --space-1 | 0.25rem (4px) | Micro spacing |
| --space-2 | 0.5rem (8px) | Small gaps |
| --space-3 | 0.75rem (12px) | Input padding |
| --space-4 | 1rem (16px) | Card padding |
| --space-6 | 1.5rem (24px) | Section spacing |
| --space-8 | 2rem (32px) | Large gaps |
| --space-12 | 3rem (48px) | Major sections |

---

## 🔲 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| --radius-sm | 0.375rem | Small elements |
| --radius-md | 0.5rem | Inputs |
| --radius-lg | 0.75rem | Buttons |
| --radius-xl | 1rem | Cards |
| --radius-2xl | 1.5rem | Modals |
| --radius-full | 9999px | Avatars, pills |

---

## 🎭 Typography

### Font Family
```css
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono: 'SF Mono', 'Fira Code', 'Consolas', monospace;
```

### Font Sizes
| Token | Size | Usage |
|-------|------|-------|
| --text-xs | 0.75rem | Labels, captions |
| --text-sm | 0.875rem | Secondary text |
| --text-base | 1rem | Body text |
| --text-lg | 1.125rem | Emphasis |
| --text-xl | 1.25rem | Card titles |
| --text-2xl | 1.5rem | Section headers |
| --text-3xl | 1.875rem | Page headers |
| --text-4xl | 2.25rem | Hero titles |
| --text-5xl | 3rem | Balance displays |

---

## ✨ Animations

### Keyframe Animations

```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide Up */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Rotating Glow Border */
@keyframes rotate-glow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Skeleton Shimmer */
@keyframes skeleton-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Pulse Glow */
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 5px rgba(255,255,255,0.1); }
  50% { box-shadow: 0 0 20px rgba(255,255,255,0.2); }
}
```

### Animation Classes
```css
.animate-fade-in    /* Simple fade in */
.animate-slide-up   /* Slide up with fade */
.animate-scale-in   /* Scale in with fade */
.animate-pulse-glow /* Pulsing glow effect */
```

### Staggered Animations
```html
<div class="stagger-animation">
  <div>Item 1</div>  <!-- 0ms delay -->
  <div>Item 2</div>  <!-- 50ms delay -->
  <div>Item 3</div>  <!-- 100ms delay -->
</div>
```

---

## 🧩 Components

### Glass Card
```html
<div class="glass-card">
  <p>Content with glassmorphism effect</p>
</div>
```

### Floating Panel
```html
<div class="floating-panel p-6">
  <h2>Premium Card</h2>
  <p>With gradient background and blur</p>
</div>
```

### Glow Border Card
```html
<div class="floating-panel glow-border p-6">
  <p>Animated rotating glow border</p>
</div>
```

### Buttons
```html
<!-- Primary (White) -->
<button class="btn btn-primary btn-ripple">
  Primary Action
</button>

<!-- Secondary (Outlined) -->
<button class="btn btn-secondary">
  Secondary Action
</button>

<!-- Ghost -->
<button class="btn btn-ghost">
  Ghost Button
</button>

<!-- Danger -->
<button class="btn btn-danger">
  Delete
</button>
```

### Inputs
```html
<div class="input-group">
  <label class="input-label">Amount</label>
  <input type="text" class="input" placeholder="0.0" />
</div>

<!-- Monospace input for addresses -->
<input type="text" class="input input-mono" />
```

### Alerts
```html
<div class="alert alert-success">Success message</div>
<div class="alert alert-error">Error message</div>
<div class="alert alert-warning">Warning message</div>
```

### Skeleton Loader
```html
<div class="skeleton skeleton-text"></div>
<div class="skeleton skeleton-avatar"></div>
<div class="skeleton skeleton-card"></div>
```

### Spinner
```html
<div class="spinner"></div>
<div class="spinner spinner-sm"></div>
<div class="spinner spinner-lg"></div>

<!-- Dots loader -->
<div class="dots-loader">
  <span></span>
  <span></span>
  <span></span>
</div>
```

### Divider
```html
<div class="divider">or</div>
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| sm | 640px | Mobile landscape |
| md | 768px | Tablets |
| lg | 1024px | Desktops |
| xl | 1280px | Large screens |

### Grid Classes
```html
<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

---

## 🏆 UI Best Practices for Crypto Dashboards

### 1. **Balance Display**
- Use large, bold typography for primary balances
- Include subtle skeleton loaders during fetch
- Add pulse animations on important values
- Show currency symbol with muted styling

### 2. **Address Handling**
- Always use monospace fonts for addresses
- Truncate with ellipsis for display
- Provide copy-to-clipboard with feedback
- Show success indicator after copying

### 3. **Transaction Flow**
- Disable submit button during processing
- Show loading spinner inside button
- Display clear success/error states
- Link to block explorer for verification

### 4. **Security Indicators**
- Use warning colors for sensitive data
- Highlight mnemonic phrases clearly
- Add visual separation for private info
- Include lock/unlock iconography

### 5. **Visual Hierarchy**
- Primary actions: white/filled buttons
- Secondary actions: outlined buttons
- Destructive actions: red theme
- Use consistent icon sizing (20-24px)

### 6. **Loading States**
- Skeleton loaders for content
- Spinners for actions
- Progress indicators for multi-step
- Disable inputs during processing

### 7. **Accessibility**
- Maintain high contrast ratios (WCAG AA)
- Include focus states on interactive elements
- Use semantic HTML elements
- Provide aria labels where needed

---

## 📂 File Structure

```
src/
├── styles/
│   └── theme.css      # Complete design system
├── components/
│   ├── Login.jsx      # Auth/onboarding
│   ├── WalletDashboard.jsx
│   └── AssetCard.jsx  # Token card component
├── index.css          # Theme import
└── App.jsx
```

---

## 🎯 Effects Reference

| Effect | Class | Description |
|--------|-------|-------------|
| Hover Lift | `.glass-card:hover` | Cards lift on hover |
| Button Ripple | `.btn-ripple` | Material-style ripple |
| Glow Border | `.glow-border` | Animated rotating glow |
| Static Glow | `.glow-static` | Constant glow shadow |
| Fade In | `.animate-fade-in` | Simple opacity transition |
| Slide Up | `.animate-slide-up` | Entry animation |
| Pulse Glow | `.animate-pulse-glow` | Attention-grabbing pulse |

---

Built with ❤️ for professional crypto applications.
