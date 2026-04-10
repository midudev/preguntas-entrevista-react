# Tailwind CSS Animations & Transitions

## Basic Transitions

```html
<button class="bg-blue-500 hover:bg-blue-700 transition duration-300">
  Smooth transition
</button>
```

### Transition Properties

| Class | Description |
|-------|-------------|
| `transition` | All properties |
| `transition-colors` | Color properties only |
| `transition-opacity` | Opacity only |
| `transition-transform` | Transform only |
| `duration-150` | 150ms duration |
| `duration-300` | 300ms duration |
| `ease-in` | Ease in timing |
| `ease-out` | Ease out timing |
| `ease-in-out` | Ease in-out timing |

---

## Transform Effects

```html
<!-- Scale on hover -->
<div class="transform hover:scale-110 transition duration-300">
  Scale on hover
</div>

<!-- Rotate on hover -->
<img class="transform hover:rotate-6 transition duration-300" />

<!-- Multiple transforms -->
<div class="transform hover:scale-105 hover:-translate-y-1 transition">
  Scale up and move up
</div>
```

---

## Built-in Animations

```html
<div class="animate-spin">Spinning</div>
<div class="animate-pulse">Pulsing</div>
<div class="animate-bounce">Bouncing</div>
<div class="animate-ping">Pinging (radar effect)</div>
```

### Common Use Cases

```html
<!-- Loading spinner -->
<svg class="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
</svg>

<!-- Skeleton loading -->
<div class="animate-pulse space-y-4">
  <div class="h-4 bg-gray-200 rounded w-3/4"></div>
  <div class="h-4 bg-gray-200 rounded"></div>
  <div class="h-4 bg-gray-200 rounded w-5/6"></div>
</div>

<!-- Notification badge -->
<span class="absolute -top-1 -right-1 h-3 w-3 animate-ping rounded-full bg-red-400 opacity-75"></span>
<span class="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500"></span>
```

---

## Custom Animations (v4.1+)

```css
/* In your CSS with @theme */
@theme {
  --animate-fade-in: fadeIn 0.5s ease-in-out;
  --animate-slide-up: slideUp 0.3s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

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
```

Usage:

```html
<div class="animate-fade-in">Fades in on load</div>
<div class="animate-slide-up">Slides up on load</div>
```

---

## Motion Preferences

Respect user's motion preferences:

```html
<!-- Disable animations for users who prefer reduced motion -->
<div class="transform transition-transform motion-reduce:transition-none">
  Doesn't animate when user prefers reduced motion
</div>

<!-- Only animate when motion is preferred -->
<div class="animate-pulse motion-safe:hover:animate-spin">
  Only animates when motion is preferred
</div>
```

### Global Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
