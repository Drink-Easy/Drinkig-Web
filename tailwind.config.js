/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./App.tsx",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        card: "var(--color-card)",
        'card-foreground': "var(--color-card-foreground)",
        popover: "var(--color-popover)",
        'popover-foreground': "var(--color-popover-foreground)",
        primary: "var(--color-primary)",
        'primary-foreground': "var(--color-primary-foreground)",
        secondary: "var(--color-secondary)",
        'secondary-foreground': "var(--color-secondary-foreground)",
        muted: "var(--color-muted)",
        'muted-foreground': "var(--color-muted-foreground)",
        accent: "var(--color-accent)",
        'accent-foreground': "var(--color-accent-foreground)",
        destructive: "var(--color-destructive)",
        'destructive-foreground': "var(--color-destructive-foreground)",
        border: "var(--color-border)",
        input: "var(--color-input)",
        'input-background': "var(--color-input-background)",
        'switch-background': "var(--color-switch-background)",
        ring: "var(--color-ring)",
        // Sidebar palette
        sidebar: "var(--color-sidebar)",
        'sidebar-foreground': "var(--color-sidebar-foreground)",
        'sidebar-primary': "var(--color-sidebar-primary)",
        'sidebar-primary-foreground': "var(--color-sidebar-primary-foreground)",
        'sidebar-accent': "var(--color-sidebar-accent)",
        'sidebar-accent-foreground': "var(--color-sidebar-accent-foreground)",
        'sidebar-border': "var(--color-sidebar-border)",
        'sidebar-ring': "var(--color-sidebar-ring)",
      },
      borderRadius: {
        xs: "calc(var(--radius) - 6px)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
    },
  },
  plugins: [],
};


