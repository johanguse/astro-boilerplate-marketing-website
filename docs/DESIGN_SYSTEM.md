# Design System Documentation

## Overview

This design system is built on shadcn/ui components with Tailwind CSS v4, inspired by Stripe's modern, vibrant aesthetic. It provides a comprehensive set of reusable components and design tokens for building professional SaaS interfaces.

**Version:** 1.0  
**Last Updated:** January 31, 2026  
**Framework:** Astro 5.17.1 + React 18  
**Styling:** Tailwind CSS v4.1.18  
**Component Library:** shadcn/ui (New York style)

---

## Design Principles

### 1. Vibrant & Modern
- Bold, saturated colors inspired by Stripe
- High contrast for accessibility
- Playful yet professional tone

### 2. Soft & Approachable
- Rounded corners (0.75rem default radius)
- Soft shadows instead of hard borders
- Gentle animations and transitions

### 3. Consistent & Scalable
- Systematic spacing scale
- Predictable component patterns
- Reusable design tokens

### 4. Accessible by Default
- WCAG 2.1 AA compliant color contrasts
- Keyboard navigation support
- Screen reader friendly markup

---

## Color System

### Primary Colors

#### Primary (Purple)
```css
--color-primary: hsl(257, 73%, 55%);
--color-primary-foreground: hsl(0, 0%, 100%);
```
**Usage:** Primary actions, links, brand emphasis  
**Example:** CTA buttons, active states, links

#### Accent (Teal)
```css
--color-accent: hsl(174, 78%, 45%);
--color-accent-foreground: hsl(0, 0%, 100%);
```
**Usage:** Secondary actions, highlights, success indicators  
**Example:** Secondary buttons, badges, feature highlights

#### Secondary (Warm Orange)
```css
--color-secondary: hsl(25, 95%, 53%);
--color-secondary-foreground: hsl(0, 0%, 100%);
```
**Usage:** Tertiary actions, warm accents  
**Example:** Warning states, promotional badges

### Semantic Colors

#### Success (Green)
```css
--color-success: hsl(142, 71%, 45%);
--color-success-foreground: hsl(0, 0%, 100%);
```
**Usage:** Success messages, positive feedback  
**Example:** Success toasts, checkmarks, completed states

#### Warning (Yellow)
```css
--color-warning: hsl(45, 93%, 47%);
--color-warning-foreground: hsl(0, 0%, 0%);
```
**Usage:** Warning messages, cautionary states  
**Example:** Warning alerts, pending actions

#### Destructive (Red)
```css
--color-destructive: hsl(0, 72%, 51%);
--color-destructive-foreground: hsl(0, 0%, 100%);
```
**Usage:** Error messages, delete actions  
**Example:** Error toasts, delete buttons, critical warnings

### Neutral Colors

#### Background & Foreground
```css
--color-background: hsl(0, 0%, 100%);
--color-foreground: hsl(224, 10%, 10%);
```

#### Card & Muted
```css
--color-card: hsl(0, 0%, 100%);
--color-card-foreground: hsl(224, 10%, 10%);
--color-muted: hsl(220, 13%, 95%);
--color-muted-foreground: hsl(220, 9%, 46%);
```

#### Border & Input
```css
--color-border: hsl(220, 13%, 91%);
--color-input: hsl(220, 13%, 91%);
--color-ring: hsl(257, 73%, 55%);
```

### Dark Mode Colors

All colors have dark mode variants. Example:
```css
.dark {
  --color-background: hsl(224, 71%, 4%);
  --color-foreground: hsl(213, 31%, 91%);
  --color-primary: hsl(257, 73%, 60%);
  /* ... */
}
```

---

## Typography

### Font Family
```css
font-family: Inter, system-ui, -apple-system, sans-serif;
```

### Scale

| Element | Class | Size | Weight | Line Height |
|---------|-------|------|--------|-------------|
| H1 | `text-6xl` | 3.75rem (60px) | 700 (Bold) | 1.2 |
| H2 | `text-5xl` | 3rem (48px) | 700 (Bold) | 1.2 |
| H3 | `text-4xl` | 2.25rem (36px) | 600 (Semibold) | 1.3 |
| H4 | `text-2xl` | 1.5rem (24px) | 600 (Semibold) | 1.4 |
| H5 | `text-xl` | 1.25rem (20px) | 600 (Semibold) | 1.5 |
| Body Large | `text-lg` | 1.125rem (18px) | 400 (Regular) | 1.7 |
| Body | `text-base` | 1rem (16px) | 400 (Regular) | 1.6 |
| Small | `text-sm` | 0.875rem (14px) | 400 (Regular) | 1.5 |
| XSmall | `text-xs` | 0.75rem (12px) | 400 (Regular) | 1.4 |

### Usage Examples

```astro
<!-- Hero Title -->
<h1 class="text-6xl font-bold tracking-tight">
  Your Hero Title
</h1>

<!-- Section Heading -->
<h2 class="text-4xl font-semibold mb-4">
  Section Heading
</h2>

<!-- Body Text -->
<p class="text-lg leading-relaxed text-muted-foreground">
  Comfortable reading experience with relaxed line height.
</p>

<!-- Caption -->
<p class="text-sm text-muted-foreground">
  Small caption or metadata text
</p>
```

---

## Spacing Scale

Uses Tailwind's default spacing scale (4px base unit):

| Class | Value | Example Usage |
|-------|-------|---------------|
| `p-2` | 0.5rem (8px) | Tight padding |
| `p-4` | 1rem (16px) | Default padding |
| `p-6` | 1.5rem (24px) | Comfortable padding |
| `p-8` | 2rem (32px) | Spacious padding |
| `gap-4` | 1rem (16px) | Grid/flex gap |
| `gap-8` | 2rem (32px) | Section spacing |
| `py-20` | 5rem (80px) | Section vertical padding |
| `py-32` | 8rem (128px) | Large section padding |

---

## Shadows

### Soft Shadows (Stripe-inspired)

```css
/* Subtle elevation */
.shadow-soft {
  box-shadow: 
    0 1px 3px 0 rgb(0 0 0 / 0.07),
    0 1px 2px -1px rgb(0 0 0 / 0.07);
}

/* Medium elevation */
.shadow-soft-lg {
  box-shadow: 
    0 10px 15px -3px rgb(0 0 0 / 0.07),
    0 4px 6px -4px rgb(0 0 0 / 0.07);
}

/* High elevation */
.shadow-soft-xl {
  box-shadow: 
    0 20px 25px -5px rgb(0 0 0 / 0.07),
    0 8px 10px -6px rgb(0 0 0 / 0.07);
}
```

**Usage:**
- `shadow-soft`: Cards, form inputs
- `shadow-soft-lg`: Modals, dropdowns
- `shadow-soft-xl`: Popovers, tooltips

---

## Border Radius

```css
--radius: 0.75rem; /* 12px */
```

**Common Classes:**
- `rounded-lg`: 0.5rem (8px) - Small elements
- `rounded-xl`: 0.75rem (12px) - Default for cards
- `rounded-2xl`: 1rem (16px) - Large cards, sections
- `rounded-full`: 9999px - Pills, avatars

---

## Animations

### CSS Keyframes

```css
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### Animation Classes

```css
.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}

.animate-slide-up {
  animation: slide-up 0.6s ease-out;
}

.animate-scale-in {
  animation: scale-in 0.4s ease-out;
}
```

### Transition Utilities

```css
.transition-all {
  transition: all 0.3s ease;
}

.duration-300 {
  transition-duration: 300ms;
}

.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## Component Library

### Installed Components

1. **Button** - Primary actions with variants
2. **Card** - Content containers with header/footer
3. **Input** - Text inputs with validation
4. **Label** - Form labels
5. **Textarea** - Multi-line text input
6. **Select** - Dropdown selections
7. **Separator** - Horizontal/vertical dividers
8. **Badge** - Small labels and tags
9. **Avatar** - User profile images
10. **Tabs** - Tabbed navigation (React wrapper: FeatureTabs)
11. **Accordion** - Collapsible sections (React wrapper: AccordionDemo)
12. **Dialog** - Modal dialogs
13. **Sheet** - Side panels (used in mobile menu)
14. **Dropdown Menu** - Contextual menus

### Section Components (Custom)

Located in `/src/components/sections/`:

1. **HeroSection** - Hero with badge, title, subtitle, CTAs, trust indicators
2. **FeatureGrid** - Responsive 3-column feature grid
3. **StatsSection** - Animated statistics display
4. **CTASection** - Call-to-action with gradient variants
5. **PricingSection** - 4-tier pricing cards

### React Wrappers (for SSR)

Located in `/src/components/`:

1. **FeatureTabs.tsx** - Wraps Tabs for client-side hydration
2. **AvatarDemo.tsx** - Avatar showcase component
3. **AccordionDemo.tsx** - Accordion FAQ component

---

## Button Variants

### Variants

```tsx
<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
```

### Sizes

```tsx
<Button size="sm">Small</Button>
<Button>Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">⚡</Button>
```

### Custom Styling

```tsx
<Button className="rounded-2xl px-8">Custom</Button>
<Button className="rounded-full px-12">Pill</Button>
```

---

## Card Patterns

### Basic Card

```astro
<Card className="rounded-2xl border-2">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content goes here</p>
  </CardContent>
</Card>
```

### Interactive Card

```astro
<Card className="rounded-2xl border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-soft-lg">
  <CardHeader>
    <CardTitle>Interactive</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Hover for effects</p>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Action</Button>
  </CardFooter>
</Card>
```

### Highlighted Card

```astro
<Card className="rounded-2xl border-2 border-primary">
  <CardHeader>
    <Badge>Featured</Badge>
    <CardTitle>Highlighted</CardTitle>
  </CardHeader>
</Card>
```

---

## Form Patterns

### Basic Form Field

```astro
<div class="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input 
    type="email" 
    id="email" 
    placeholder="Enter your email"
    className="rounded-xl"
  />
  <p class="text-sm text-muted-foreground">
    Help text goes here
  </p>
</div>
```

### Textarea Field

```astro
<div class="space-y-2">
  <Label htmlFor="message">Message</Label>
  <Textarea 
    id="message" 
    placeholder="Type your message"
    className="rounded-xl min-h-32"
  />
</div>
```

---

## Layout Patterns

### Section Layout

```astro
<section class="py-20 md:py-32">
  <div class="container max-w-7xl">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold mb-4">Section Title</h2>
      <p class="text-xl text-muted-foreground">Subtitle</p>
    </div>
    
    <!-- Content -->
  </div>
</section>
```

### Alternating Background

```astro
<!-- White section -->
<section class="py-20 md:py-32">
  <!-- Content -->
</section>

<!-- Muted section -->
<section class="py-20 md:py-32 bg-muted/30">
  <!-- Content -->
</section>
```

### Grid Layouts

```astro
<!-- 3-column responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
  <!-- Cards -->
</div>

<!-- 2-column responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
  <!-- Content -->
</div>
```

---

## Gradient Utilities

### Mesh Gradient Background

```css
.bg-gradient-mesh {
  background: 
    radial-gradient(at 0% 0%, hsl(var(--color-primary) / 0.15) 0, transparent 50%),
    radial-gradient(at 50% 0%, hsl(var(--color-accent) / 0.15) 0, transparent 50%),
    radial-gradient(at 100% 0%, hsl(var(--color-secondary) / 0.15) 0, transparent 50%);
}
```

### Gradient Text

```astro
<h1 class="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
  Gradient Text
</h1>
```

---

## Responsive Design

### Breakpoints

| Breakpoint | Min Width | Typical Devices |
|------------|-----------|-----------------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

### Mobile-First Approach

```astro
<!-- Stack on mobile, row on desktop -->
<div class="flex flex-col md:flex-row gap-4">
  <!-- Content -->
</div>

<!-- 1 col mobile, 2 col tablet, 3 col desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <!-- Cards -->
</div>
```

---

## Accessibility Guidelines

### Color Contrast

- Text on background: Minimum 4.5:1 ratio (AA standard)
- Large text (18pt+): Minimum 3:1 ratio
- All color combinations tested for WCAG 2.1 AA compliance

### Keyboard Navigation

- All interactive elements focusable with Tab key
- Focus states clearly visible (ring utility)
- Logical tab order maintained

### Screen Readers

- Semantic HTML elements used throughout
- ARIA labels provided where needed
- Alt text for all images
- Skip to content links available

### Example: Focus States

```astro
<Button className="focus:ring-2 focus:ring-primary focus:ring-offset-2">
  Accessible Button
</Button>
```

---

## Usage Examples

### Complete Page Structure

```astro
---
import Header from "@/components/Header.astro";
import Footer from "@/components/Footer.astro";
import Layout from "@/layouts/Layout.astro";
import HeroSection from "@/components/sections/HeroSection.astro";
---

<Layout>
  <Header />
  <main id="main-content">
    <HeroSection
      badge="New Feature"
      title="Your Page Title"
      subtitle="Compelling subtitle text"
      primaryCta="Get Started"
      primaryCtaHref="/signup"
    />
    
    <!-- More sections -->
  </main>
  <Footer />
</Layout>
```

### Feature Card

```astro
<Card className="rounded-2xl border-2 hover:border-primary/50 transition-all">
  <CardHeader>
    <div class="text-4xl mb-4">🚀</div>
    <CardTitle>Feature Title</CardTitle>
    <CardDescription>
      Brief description of the feature
    </CardDescription>
  </CardHeader>
</Card>
```

---

## Best Practices

### Component Composition

1. **Start with semantics**: Use proper HTML elements
2. **Layer styling**: Base → Layout → Theme → Custom
3. **Reuse patterns**: Extract common patterns into components
4. **Stay consistent**: Use design tokens, not magic values

### Performance

1. **Lazy load**: Use `client:load` only when needed
2. **Optimize images**: WebP format, responsive sizes
3. **Minimize JS**: Prefer Astro components over React when possible
4. **Code split**: Use dynamic imports for large components

### Maintainability

1. **Document variants**: Comment unusual CSS patterns
2. **Name consistently**: Follow established naming conventions
3. **Test dark mode**: Verify all components in both themes
4. **Validate accessibility**: Run automated and manual tests

---

## Resources

### Internal

- [Design System Showcase](/design-system) - Live component examples
- [Component Source Code](/src/components) - Implementation reference
- [Pricing Page](/pricing) - Real-world usage example
- [Features Page](/features) - Interactive component demo

### External

- [shadcn/ui Documentation](https://ui.shadcn.com/) - Component library
- [Tailwind CSS v4 Docs](https://tailwindcss.com/) - Utility classes
- [Astro Documentation](https://docs.astro.build/) - Framework guide
- [Stripe Design System](https://stripe.com/docs/stripe-apps/design-guidelines) - Inspiration

---

## Version History

### v1.0 (January 31, 2026)
- Initial design system release
- 14 shadcn/ui components installed
- 5 custom section components created
- Stripe-inspired color palette implemented
- Comprehensive documentation completed
- Multilingual support (5 languages)
- Full dark mode support

---

## Contributing

When adding new components or patterns to this design system:

1. **Follow existing patterns**: Match current naming and structure
2. **Test thoroughly**: Verify in light/dark modes, all breakpoints
3. **Document thoroughly**: Update this file with examples
4. **Consider accessibility**: WCAG 2.1 AA minimum
5. **Update showcase**: Add to `/src/pages/design-system.astro`

---

## Support

For questions or issues related to this design system:

1. Check the [live showcase](/design-system) for examples
2. Review component source code in `/src/components`
3. Consult shadcn/ui and Tailwind documentation
4. Test changes in both light and dark modes

---

**Last Updated:** January 31, 2026  
**Maintained by:** Development Team  
**License:** MIT
