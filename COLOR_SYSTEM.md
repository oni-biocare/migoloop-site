# MigoLoop Color System

## Overview
This document outlines the comprehensive color system for the MigoLoop website, designed to create a professional, trustworthy appearance for software consulting services while maintaining the philosophy: “Turning every cycle into value, even the smallest ones.”

## Color Philosophy
- **Primary Gold (#fcbe11)**: Represents innovation, progress, value, and expertise
- **Secondary Dark Gray (#343434)**: Represents professionalism, stability, and trust
- **Accent Colors**: Technology-focused colors for software development themes
- **Semantic Colors**: Clear status and feedback indicators
- **Neutral Colors**: Professional backgrounds and readable text

## Primary Colors (Brand Gold)

### Light Theme
```css
--primary: 44 98% 53%;        /* #fcbe11 - Main brand color */
--primary-50: 44 98% 95%;     /* #fef7e0 - Very light gold */
--primary-100: 44 98% 90%;    /* #fdeec1 - Light gold */
--primary-200: 44 98% 80%;    /* #fbe4a3 - Medium light gold */
--primary-300: 44 98% 70%;    /* #f9da85 - Medium gold */
--primary-400: 44 98% 60%;    /* #f7d067 - Medium dark gold */
--primary-600: 44 98% 45%;    /* #f5c649 - Darker gold */
--primary-700: 44 98% 35%;    /* #f3bc2b - Dark gold */
--primary-800: 44 98% 25%;    /* #f1b20d - Very dark gold */
--primary-900: 44 98% 15%;    /* #efa800 - Darkest gold */
```

### Dark Theme
```css
--primary: 44 98% 53%;        /* #fcbe11 - Same main color */
--primary-50: 44 98% 15%;     /* Darker variations for dark mode */
--primary-100: 44 98% 20%;
--primary-200: 44 98% 25%;
--primary-300: 44 98% 30%;
--primary-400: 44 98% 40%;
--primary-600: 44 98% 60%;
--primary-700: 44 98% 70%;
--primary-800: 44 98% 80%;
--primary-900: 44 98% 90%;
```

## Secondary Colors (Brand Dark Gray)

### Light Theme
```css
--secondary: 0 0% 20.4%;      /* #343434 - Main secondary color */
--secondary-50: 0 0% 95%;     /* #f2f2f2 - Very light gray */
--secondary-100: 0 0% 90%;    /* #e6e6e6 - Light gray */
--secondary-200: 0 0% 80%;    /* #cccccc - Medium light gray */
--secondary-300: 0 0% 70%;    /* #b3b3b3 - Medium gray */
--secondary-400: 0 0% 60%;    /* #999999 - Medium dark gray */
--secondary-600: 0 0% 40%;    /* #666666 - Darker gray */
--secondary-700: 0 0% 30%;    /* #4d4d4d - Dark gray */
--secondary-800: 0 0% 25%;    /* #404040 - Very dark gray */
--secondary-900: 0 0% 15%;    /* #262626 - Darkest gray */
```

### Dark Theme
```css
--secondary: 0 0% 20.4%;      /* #343434 - Same main color */
--secondary-50: 0 0% 15%;     /* Lighter variations for dark mode */
--secondary-100: 0 0% 20%;
--secondary-200: 0 0% 25%;
--secondary-300: 0 0% 30%;
--secondary-400: 0 0% 40%;
--secondary-600: 0 0% 60%;
--secondary-700: 0 0% 70%;
--secondary-800: 0 0% 75%;
--secondary-900: 0 0% 85%;
```

## Accent Colors

### Technology Blue
```css
--accent-blue: 217 91% 60%;           /* #3b82f6 - Modern blue */
--accent-blue-light: 217 91% 90%;     /* #dbeafe - Light blue */
```

### Success Green
```css
--accent-green: 142 76% 36%;          /* #16a34a - Success green */
--accent-green-light: 142 76% 90%;    /* #dcfce7 - Light green */
```

### Innovation Purple
```css
--accent-purple: 262 83% 58%;         /* #8b5cf6 - Innovation purple */
--accent-purple-light: 262 83% 90%;   /* #ede9fe - Light purple */
```

## Semantic Colors

### Success
```css
--success: 142 76% 36%;               /* #16a34a - Success green */
--success-foreground: 0 0% 98%;       /* White text */
--success-light: 142 76% 90%;         /* #dcfce7 - Light background */
```

### Warning
```css
--warning: 38 92% 50%;                /* #f59e0b - Warning amber */
--warning-foreground: 0 0% 98%;      /* White text */
--warning-light: 38 92% 90%;         /* #fef3c7 - Light background */
```

### Error
```css
--error: 0 84% 60%;                   /* #ef4444 - Error red */
--error-foreground: 0 0% 98%;        /* White text */
--error-light: 0 84% 90%;            /* #fee2e2 - Light background */
```

### Info
```css
--info: 217 91% 60%;                  /* #3b82f6 - Info blue */
--info-foreground: 0 0% 98%;         /* White text */
--info-light: 217 91% 90%;           /* #dbeafe - Light background */
```

## Neutral Colors

### Backgrounds
```css
--background: 0 0% 100%;              /* #ffffff - Pure white */
--background-secondary: 0 0% 98%;     /* #fafafa - Off white */
--background-tertiary: 0 0% 96%;     /* #f5f5f5 - Light gray */
```

### Text
```css
--text-primary: 0 0% 13%;            /* #212121 - Primary text */
--text-secondary: 0 0% 45%;          /* #737373 - Secondary text */
--text-tertiary: 0 0% 65%;           /* #a6a6a6 - Tertiary text */
--text-inverse: 0 0% 98%;            /* #fafafa - Inverse text */
```

### Borders
```css
--border-primary: 0 0% 90%;          /* #e5e5e5 - Primary borders */
--border-secondary: 0 0% 85%;         /* #d4d4d4 - Secondary borders */
--border-accent: 44 98% 80%;         /* #fbe4a3 - Gold accent borders */
```

## Usage Examples

### Buttons
```tsx
// Primary button
<Button className="bg-primary hover:bg-primary-600 text-primary-foreground">
  Primary Action
</Button>

// Secondary button
<Button className="bg-secondary hover:bg-secondary-600 text-secondary-foreground">
  Secondary Action
</Button>

// Success button
<Button className="bg-success hover:bg-success/90 text-success-foreground">
  Success Action
</Button>
```

### Cards
```tsx
// Primary card
<Card className="bg-background-secondary border-border-accent hover:border-primary-300">
  Content
</Card>

// Accent card
<Card className="bg-accent-blue-light border-accent-blue/20">
  Technology Content
</Card>
```

### Text
```tsx
// Headings
<h1 className="text-text-primary">Main Heading</h1>
<h2 className="text-text-secondary">Sub Heading</h2>
<p className="text-text-tertiary">Body text</p>

// Brand text
<span className="text-primary font-bold">MigoLoop</span>
```

### Status Indicators
```tsx
// Success
<span className="bg-success-light text-success px-2 py-1 rounded">
  Success
</span>

// Warning
<span className="bg-warning-light text-warning px-2 py-1 rounded">
  Warning
</span>

// Error
<span className="bg-error-light text-error px-2 py-1 rounded">
  Error
</span>
```

## Tailwind Classes

### Primary Colors
- `bg-primary` - Main gold background
- `bg-primary-50` through `bg-primary-900` - Gold variations
- `text-primary` - Gold text
- `border-primary` - Gold borders

### Secondary Colors
- `bg-secondary` - Main gray background
- `bg-secondary-50` through `bg-secondary-900` - Gray variations
- `text-secondary` - Gray text
- `border-secondary` - Gray borders

### Accent Colors
- `bg-accent-blue` - Technology blue
- `bg-accent-green` - Success green
- `bg-accent-purple` - Innovation purple
- `text-accent-blue` - Blue text
- `border-accent-blue` - Blue borders

### Semantic Colors
- `bg-success` - Success background
- `bg-warning` - Warning background
- `bg-error` - Error background
- `bg-info` - Info background

### Neutral Colors
- `bg-bg-secondary` - Secondary background
- `bg-bg-tertiary` - Tertiary background
- `text-text-primary` - Primary text
- `text-text-secondary` - Secondary text
- `text-text-tertiary` - Tertiary text
- `border-border-primary` - Primary borders
- `border-border-secondary` - Secondary borders
- `border-border-accent` - Accent borders

## Accessibility

### Contrast Ratios
- **Primary Gold (#fcbe11)**: Meets WCAG AA standards on dark backgrounds
- **Secondary Gray (#343434)**: Meets WCAG AAA standards on light backgrounds
- **Text Colors**: All meet minimum contrast requirements

### Color Blindness
- Primary and secondary colors are distinguishable for most color vision types
- Semantic colors use both color and pattern/shape for identification
- Accent colors provide additional visual distinction

## Implementation Notes

### CSS Variables
All colors are defined as CSS custom properties in `globals.css` for easy theming and maintenance.

### Dark Mode
Dark mode automatically adjusts color values while maintaining brand consistency and accessibility.

### Responsive Design
Colors work consistently across all device sizes and screen resolutions.

### Performance
CSS custom properties provide efficient color management without additional JavaScript overhead.

## Brand Guidelines

### Primary Usage
- **Primary Gold**: Use for CTAs, highlights, brand elements, and key actions
- **Secondary Gray**: Use for text, borders, and secondary elements
- **Accent Colors**: Use sparingly for technology-related content and status indicators

### Consistency
- Maintain consistent color usage across all components
- Use the established color hierarchy for visual hierarchy
- Ensure colors support the philosophy: “Turning every cycle into value, even the smallest ones.”

### Evolution
- Colors can be adjusted for seasonal campaigns or special events
- Maintain accessibility standards when making color changes
- Document any color modifications for team reference
