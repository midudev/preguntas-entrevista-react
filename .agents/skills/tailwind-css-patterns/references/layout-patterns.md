# Tailwind CSS Layout Patterns

## Layout Utilities

### Flexbox Layouts

Basic flex container:

```html
<div class="flex items-center justify-between">
  <div>Left</div>
  <div>Center</div>
  <div>Right</div>
</div>
```

Responsive flex direction:

```html
<div class="flex flex-col md:flex-row gap-4">
  <div class="flex-1">Item 1</div>
  <div class="flex-1">Item 2</div>
  <div class="flex-1">Item 3</div>
</div>
```

Common flex patterns:

```html
<!-- Center content -->
<div class="flex items-center justify-center min-h-screen">
  <div>Centered Content</div>
</div>

<!-- Space between items -->
<div class="flex justify-between items-center">
  <span>Left</span>
  <span>Right</span>
</div>

<!-- Vertical stack with gap -->
<div class="flex flex-col gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Grid Layouts

Basic grid:

```html
<div class="grid grid-cols-3 gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```

Responsive grid:

```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  <!-- 1 column mobile, 2 tablet, 4 desktop -->
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```

Auto-fit columns:

```html
<div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
  <!-- Automatically fit columns based on container width -->
</div>
```

### Container & Max Width

Centered container with max width:

```html
<div class="container mx-auto px-4 max-w-7xl">
  <!-- Centered content with padding -->
</div>
```

Responsive max width:

```html
<div class="w-full max-w-md mx-auto">
  <!-- Max 448px width, centered -->
</div>
```

---

## Spacing

### Padding & Margin

Uniform spacing:

```html
<div class="p-4">Padding all sides</div>
<div class="m-4">Margin all sides</div>
```

Individual sides:

```html
<div class="pt-4 pr-8 pb-4 pl-8">
  <!-- Top 1rem, Right 2rem, Bottom 1rem, Left 2rem -->
</div>
```

Axis-based spacing:

```html
<div class="px-4 py-8">
  <!-- Horizontal padding 1rem, Vertical padding 2rem -->
</div>
```

Responsive spacing:

```html
<div class="p-4 md:p-8 lg:p-12">
  <!-- Increases padding at larger breakpoints -->
</div>
```

Space between children:

```html
<div class="space-y-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

---

## Typography

### Font Size & Weight

```html
<h1 class="text-4xl font-bold">Large Heading</h1>
<h2 class="text-2xl font-semibold">Subheading</h2>
<p class="text-base font-normal">Body text</p>
<small class="text-sm text-gray-600">Small text</small>
```

Responsive typography:

```html
<h1 class="text-2xl md:text-4xl lg:text-6xl font-bold">
  Responsive Heading
</h1>
```

### Line Height & Letter Spacing

```html
<p class="leading-relaxed tracking-wide">
  Text with relaxed line height and wide letter spacing
</p>
```

### Text Alignment

```html
<p class="text-left md:text-center">
  Left aligned on mobile, centered on tablet+
</p>
```

---

## Colors

### Background Colors

```html
<div class="bg-blue-500">Blue background</div>
<div class="bg-gray-100">Light gray background</div>
<div class="bg-gradient-to-r from-blue-500 to-purple-600">
  Gradient background
</div>
```

### Text Colors

```html
<p class="text-gray-900">Dark text</p>
<p class="text-blue-600">Blue text</p>
<p class="text-red-500">Error text</p>
```

### Opacity

```html
<div class="bg-blue-500 bg-opacity-50">
  Semi-transparent blue
</div>
```

---

## Responsive Breakpoints Reference

| Prefix | Min Width | CSS Equivalent |
|--------|-----------|----------------|
| `sm:` | 640px | `@media (min-width: 640px)` |
| `md:` | 768px | `@media (min-width: 768px)` |
| `lg:` | 1024px | `@media (min-width: 1024px)` |
| `xl:` | 1280px | `@media (min-width: 1280px)` |
| `2xl:` | 1536px | `@media (min-width: 1536px)` |
