# 🚀 Color System Quick Start Guide

## Immediate Usage

### 1. Primary Colors (Gold)
```tsx
// Main brand color
<Button className="bg-primary text-primary-foreground">
  Get Started
</Button>

// Hover states
<Button className="bg-primary hover:bg-primary-600">
  Primary Action
</Button>

// Light backgrounds
<div className="bg-primary-50 border-primary-200">
  Light gold background
</div>
```

### 2. Secondary Colors (Gray)
```tsx
// Secondary buttons
<Button className="bg-secondary text-secondary-foreground">
  Learn More
</Button>

// Text variations
<h1 className="text-text-primary">Main Heading</h1>
<p className="text-text-secondary">Subtitle text</p>
<span className="text-text-tertiary">Muted text</span>
```

### 3. Accent Colors
```tsx
// Technology blue
<div className="bg-accent-blue text-white">
  Tech content
</div>

// Success green
<span className="bg-success-light text-success">
  Success message
</span>

// Innovation purple
<div className="bg-accent-purple-light border-accent-purple/20">
  Creative content
</div>
```

### 4. Semantic Colors
```tsx
// Status indicators
<span className="bg-success-light text-success px-2 py-1 rounded">
  ✅ Success
</span>

<span className="bg-warning-light text-warning px-2 py-1 rounded">
  ⚠️ Warning
</span>

<span className="bg-error-light text-error px-2 py-1 rounded">
  ❌ Error
</span>
```

### 5. Backgrounds & Borders
```tsx
// Cards
<Card className="bg-bg-secondary border-border-accent">
  Content
</Card>

// Hover effects
<div className="bg-background hover:bg-bg-secondary border-border-primary hover:border-primary-300">
  Interactive element
</div>
```

## Common Patterns

### Button Hierarchy
```tsx
// Primary action
<Button className="bg-primary hover:bg-primary-600 text-primary-foreground">
  Main Action
</Button>

// Secondary action
<Button className="bg-secondary hover:bg-secondary-600 text-secondary-foreground">
  Secondary Action
</Button>

// Success action
<Button className="bg-success hover:bg-success/90 text-success-foreground">
  Confirm
</Button>
```

### Card Variations
```tsx
// Standard card
<Card className="bg-background border-border-primary">
  Standard content
</Card>

// Highlighted card
<Card className="bg-primary-50 border-primary-200">
  Important content
</Card>

// Accent card
<Card className="bg-accent-blue-light border-accent-blue/20">
  Tech content
</Card>
```

### Text Hierarchy
```tsx
// Main heading
<h1 className="text-text-primary text-4xl font-bold">
  Page Title
</h1>

// Section heading
<h2 className="text-text-primary text-2xl font-semibold">
  Section Title
</h2>

// Body text
<p className="text-text-secondary text-base">
  Regular paragraph text
</p>

// Muted text
<span className="text-text-tertiary text-sm">
  Additional information
</span>
```

## Dark Mode Support

All colors automatically work in both light and dark modes. The system automatically adjusts:

- Background colors become darker
- Text colors become lighter
- Accent colors maintain visibility
- Primary gold remains consistent

## Accessibility

### Contrast Ratios
- **Primary Gold**: Meets WCAG AA standards
- **Secondary Gray**: Meets WCAG AAA standards
- **Text Colors**: All meet minimum requirements

### Color Blindness
- Primary and secondary colors are distinguishable
- Semantic colors use both color and pattern
- Accent colors provide additional distinction

## Migration from Old Colors

### Before (Old System)
```tsx
<div className="bg-muted text-muted-foreground">
  Old styling
</div>
```

### After (New System)
```tsx
<div className="bg-bg-secondary text-text-secondary">
  New styling
</div>
```

## Quick Reference

### Primary Colors
- `bg-primary` - Main gold (#fcbe11)
- `bg-primary-50` to `bg-primary-900` - Gold variations
- `text-primary` - Gold text
- `border-primary` - Gold borders

### Secondary Colors
- `bg-secondary` - Main gray (#343434)
- `bg-secondary-50` to `bg-secondary-900` - Gray variations
- `text-secondary` - Gray text
- `border-secondary` - Gray borders

### Accent Colors
- `bg-accent-blue` - Technology blue
- `bg-accent-green` - Success green
- `bg-accent-purple` - Innovation purple

### Semantic Colors
- `bg-success` - Success states
- `bg-warning` - Warning states
- `bg-error` - Error states
- `bg-info` - Information states

### Neutral Colors
- `bg-bg-secondary` - Secondary background
- `bg-bg-tertiary` - Tertiary background
- `text-text-primary` - Primary text
- `text-text-secondary` - Secondary text
- `text-text-tertiary` - Tertiary text

## Need Help?

1. **View the full color system**: Navigate to `/colors` in your browser
2. **Check the documentation**: See `COLOR_SYSTEM.md` for complete details
3. **Use the preview component**: Import `ColorPreview` to see all colors
4. **Test in browser**: Use browser dev tools to experiment with colors

## Pro Tips

- Use `hover:` prefix for interactive states
- Combine with opacity modifiers (e.g., `bg-primary/20`)
- Use `border-` prefix for border colors
- Leverage the progressive color scale (50-900) for depth
- Always test in both light and dark modes

Happy designing! 🎨✨
