# AI Instructions for Pofology Project

## Project Overview
Pofology is a personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. The project follows modern web development practices and uses a component-based architecture.

## Tech Stack
- **Framework**: Next.js 15.0.0+
- **Language**: TypeScript 5.2.2+
- **Styling**: Tailwind CSS 3.3.5+
- **State Management**: React Hooks (no external state management library)
- **Package Manager**: npm/yarn

## Project Structure
```
pofology/
├── public/               # Static assets
│   ├── images/          # Image assets
│   │   └── badges/      # Certification badges
│   ├── fonts/          # Custom fonts (Rubik)
│   └── favicon.ico     # Site favicon
├── src/
│   ├── components/     # React components
│   │   ├── form/      # Form-related components
│   │   ├── partials/  # Partial components
│   │   └── shared/    # Shared/common components
│   ├── config/        # Configuration files
│   ├── data/          # Static data files
│   ├── hooks/         # Custom React hooks
│   ├── layouts/       # Layout components
│   ├── lib/           # Utility functions
│   ├── pages/         # Next.js pages
│   ├── styles/        # Global styles
│   └── types/         # TypeScript type definitions
```

## Key Features and Implementations

### 1. Styling System
- Uses Tailwind CSS with custom configuration
- Custom color palette defined in `tailwind.config.js`
- Dark mode support using class strategy
- Custom typography plugin configuration
- Responsive design with custom breakpoint for 'xs' screen

### 2. Font Configuration
- Uses Rubik font family as primary font
- Font files are self-hosted in `/public/fonts/`
- Font weights included: 300, 500, 600, 700, 800, 900 (with italic variants)

### 3. Component Architecture
- Functional components with TypeScript
- Uses modern React features (hooks, context if needed)
- Component categorization:
  - **form/**: Form-related components like Button
  - **shared/**: Reusable components like ProgressBar
  - **partials/**: Section-specific components

### 4. Dependencies
Key dependencies and their purposes:
- **@headlessui/react**: UI components
- **react-icons**: Icon library
- **react-slick**: Carousel/slider functionality
- **typed.js**: Typing animation effects
- **classnames**: Dynamic class name handling
- **axios**: HTTP client for API calls

## Development Guidelines

### 1. TypeScript
- Strict mode is enabled
- Use TypeScript for all new files
- Follow the existing type definitions in `/src/types`

### 2. Styling
- Follow Tailwind CSS class naming conventions
- Use the custom color palette defined in `tailwind.config.js`
- Utilize the custom breakpoints for responsive design
- Dark mode classes should be prefixed with 'dark:'

### 3. Component Creation
- Place new components in appropriate directories under `/src/components`
- Follow existing component patterns
- Use TypeScript interfaces for props
- Implement responsive designs using Tailwind's responsive classes

### 4. Asset Management
- Place new images in `/public/images/`
- Optimize images before adding them to the project
- Use Next.js Image component for optimal image loading

### 5. Performance Considerations
- Use Next.js built-in optimizations
- Implement lazy loading where appropriate
- Follow React best practices for performance
- Use memo and useMemo for expensive computations

## Common Tasks

### Adding New Sections
1. Create component in `/src/components/partials`
2. Add necessary types in `/src/types`
3. Import and add to relevant page in `/src/pages`
4. Style using Tailwind CSS classes

### Modifying Styles
1. Check `tailwind.config.js` for existing custom styles
2. Add new custom styles in the theme.extend section
3. Use Tailwind's utility classes in components

### Adding New Pages
1. Create new file in `/src/pages`
2. Use appropriate layout component from `/src/layouts`
3. Import necessary components
4. Implement SEO meta tags if needed

### Running node commands
1. Ensure commands are running from directory `pofology`

## Troubleshooting

### Common Issues
1. **Type Errors**: 
   - Check type definitions in `/src/types`
   - Ensure proper TypeScript configuration
   
2. **Styling Issues**:
   - Verify Tailwind classes are correct
   - Check `tailwind.config.js` for custom styles
   - Confirm proper responsive design implementation

3. **Build Errors**:
   - Run `npm run lint` to check for linting issues
   - Verify all dependencies are installed
   - Check for TypeScript errors with `tsc --noEmit`

## Best Practices
1. Follow TypeScript strict mode guidelines
2. Use proper component composition
3. Implement responsive design from the start
4. Keep components modular and reusable
5. Use semantic HTML elements
6. Optimize images and assets
7. Follow established project patterns

## Future Considerations
1. Implement more interactive features
2. Add more animation effects