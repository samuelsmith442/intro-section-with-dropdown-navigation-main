# Frontend Mentor - Intro Section with Dropdown Navigation

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

![Design preview for the Intro section with dropdown navigation coding challenge](../design/desktop-preview.jpg)

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Desktop View](../design/desktop-design.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My Process

### Built With

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styles
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- Mobile-first workflow
- Responsive design principles
- CSS Flexbox
- CSS Grid

### What I Learned

This project was a great opportunity to practice creating responsive dropdown navigation menus that work well on both desktop and mobile devices. I learned how to:

- Implement dropdown menus with smooth animations
- Create a responsive layout that adapts to different screen sizes
- Use React hooks like useState and useRef for managing component state
- Implement click-outside detection for closing dropdowns
- Create a mobile menu with a slide-in animation

Here's a code snippet of the dropdown implementation:

```tsx
const [featuresOpen, setFeaturesOpen] = useState(false);
const featuresRef = useRef<HTMLDivElement>(null);

// Close dropdown when clicking outside
useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (featuresRef.current && !featuresRef.current.contains(event.target as Node)) {
      setFeaturesOpen(false);
    }
  }
  
  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);
```

### Continued Development

In future projects, I'd like to focus on:

- Implementing more advanced animations for UI elements
- Improving accessibility features
- Adding more interactive elements
- Optimizing performance for larger applications

### Useful Resources

- [Next.js Documentation](https://nextjs.org/docs) - This helped me understand the Next.js framework and its features.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - This is an amazing resource for learning how to use Tailwind CSS effectively.
- [React Hooks Documentation](https://reactjs.org/docs/hooks-intro.html) - This helped me understand how to use React hooks for state management.

## Author

- Website - [Your Name](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

## Acknowledgments

I'd like to thank Frontend Mentor for providing this challenge and the community for their support and feedback.
