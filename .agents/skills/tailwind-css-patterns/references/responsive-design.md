# Tailwind CSS Responsive Design & Dark Mode

## Responsive Design Patterns

### Mobile-First Responsive Layout

```html
<div class="container mx-auto px-4">
  <!-- Hero Section -->
  <div class="flex flex-col md:flex-row items-center gap-8 py-12">
    <div class="flex-1">
      <h1 class="text-3xl md:text-5xl font-bold mb-4">
        Welcome to Our Site
      </h1>
      <p class="text-lg text-gray-600 mb-6">
        Build amazing things with Tailwind CSS
      </p>
      <button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        Get Started
      </button>
    </div>
    <div class="flex-1">
      <img src="hero.jpg" class="w-full rounded-lg shadow-lg" />
    </div>
  </div>
</div>
```

### Responsive Grid Gallery

```html
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
  <div class="aspect-square bg-gray-200 rounded-lg overflow-hidden">
    <img src="image1.jpg" class="w-full h-full object-cover hover:scale-105 transition" />
  </div>
  <div class="aspect-square bg-gray-200 rounded-lg overflow-hidden">
    <img src="image2.jpg" class="w-full h-full object-cover hover:scale-105 transition" />
  </div>
  <!-- More items... -->
</div>
```

### Responsive Card Component

```tsx
function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden
                    sm:flex sm:max-w-2xl">
      <img
        className="h-48 w-full object-cover sm:h-auto sm:w-48"
        src={product.image}
        alt={product.name}
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900">
          {product.name}
        </h3>
        <p className="mt-2 text-gray-600">
          {product.description}
        </p>
        <button className="mt-4 px-4 py-2 bg-indigo-600 text-white
                          rounded-lg hover:bg-indigo-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
```

---

## Dark Mode

### Basic Dark Mode Support

```html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  <h1 class="text-gray-900 dark:text-white">Title</h1>
  <p class="text-gray-600 dark:text-gray-400">Description</p>
</div>
```

Enable dark mode in tailwind.config.js:

```javascript
module.exports = {
  darkMode: 'class', // or 'media'
  // ...
}
```

### Dark Mode Toggle (React)

```tsx
function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
}
```

### Dark Mode Best Practices

1. **Use semantic color names**: Instead of `bg-white` use `bg-surface` custom color
2. **Test with real content**: Some colors look good in light but not in dark
3. **Respect system preference**: Use `darkMode: 'media'` for OS-level preference
4. **Smooth transitions**: Add transition utilities for theme changes

```css
/* Global transition for theme changes */
* {
  @apply transition-colors duration-200;
}
```

---

## Container Queries (v4.1+)

Component that responds to its container size, not viewport:

```html
<div class="@container">
  <div class="@lg:text-xl @2xl:text-2xl">
    Text size based on container, not viewport
  </div>
</div>
```

Usage in a card component:

```html
<div class="@container w-full">
  <div class="flex flex-col @[400px]:flex-row gap-4">
    <img class="w-full @[400px]:w-32 h-32 object-cover" src="image.jpg" />
    <div>
      <h3 class="text-base @[400px]:text-lg font-bold">Title</h3>
      <p class="text-sm @[400px]:text-base">Description</p>
    </div>
  </div>
</div>
```
