# Tailwind CSS Accessibility Guidelines

## Focus Management

```html
<!-- Custom focus styles that meet WCAG AA -->
<button class="focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
  Accessible Button
</button>

<!-- Skip links for keyboard navigation -->
<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4">
  Skip to main content
</a>
```

### Focus Visible vs Focus

```html
<!-- Only show focus ring on keyboard navigation -->
<button class="focus-visible:ring-2 focus-visible:ring-blue-500">
  Keyboard-only focus indicator
</button>
```

---

## Screen Reader Support

```html
<!-- Semantic buttons with ARIA labels -->
<button aria-label="Close dialog" class="p-2">
  <svg class="w-5 h-5" fill="none" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>

<!-- Descriptive links -->
<a href="/docs" aria-describedby="docs-description">
  Documentation
</a>
<p id="docs-description" class="sr-only">
  Learn how to use our API and integration guides
</p>

<!-- Live regions for dynamic content -->
<div aria-live="polite" class="sr-only">
  <p>3 new notifications</p>
</div>
```

### Screen Reader Only Content

```html
<span class="sr-only">Opens in new window</span>
```

---

## Color Contrast

```html
<!-- Ensure sufficient contrast ratios -->
<div class="bg-gray-900 text-white">
  High contrast text (WCAG AAA)
</div>

<div class="bg-blue-500 text-blue-100">
  Good contrast on colored backgrounds
</div>

<!-- Use contrast utilities for testing -->
<div class="bg-red-500 text-white contrast-more:bg-red-600 contrast-more:text-red-100">
  Adjusts for high contrast mode
</div>
```

### Contrast Guidelines

- **Normal text**: Minimum 4.5:1 contrast ratio
- **Large text**: Minimum 3:1 contrast ratio
- **UI components**: Minimum 3:1 contrast ratio

---

## Motion Preferences

```html
<!-- Respect prefers-reduced-motion -->
<div class="transform transition-transform motion-reduce:transition-none">
  Doesn't animate when user prefers reduced motion
</div>

<!-- Conditional animations -->
<div class="animate-pulse motion-safe:hover:animate-spin">
  Only animates when motion is preferred
</div>
```

### Reduced Motion Media Query

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

---

## ARIA Patterns with Tailwind

### Toggle Button

```html
<button
  type="button"
  role="switch"
  aria-checked="false"
  class="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 aria-checked:bg-blue-600"
>
  <span class="sr-only">Enable notifications</span>
  <span class="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1 aria-checked:translate-x-6"></span>
</button>
```

### Alert Dialog

```html
<div
  role="alertdialog"
  aria-labelledby="alert-title"
  aria-describedby="alert-description"
  class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
>
  <div class="max-w-md w-full bg-white rounded-lg shadow-xl p-6">
    <h2 id="alert-title" class="text-lg font-bold mb-2">
      Are you sure?
    </h2>
    <p id="alert-description" class="text-gray-600 mb-4">
      This action cannot be undone.
    </p>
    <div class="flex justify-end gap-2">
      <button class="px-4 py-2 text-gray-600">Cancel</button>
      <button class="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
    </div>
  </div>
</div>
```

---

## Accessibility Checklist

- [ ] All interactive elements have visible focus indicators
- [ ] Color contrast meets WCAG standards
- [ ] Images have alt text
- [ ] Form inputs have associated labels
- [ ] ARIA labels used for icon-only buttons
- [ ] Animations respect reduced motion preference
- [ ] Skip links provided for keyboard navigation
- [ ] Landmarks (header, main, nav, footer) used appropriately
