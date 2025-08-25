    // Set current year and last updated date
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('updated').textContent = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Theme Toggle Logic
    const themeButton = document.getElementById('theme-toggle');
    const PREFERENCE_KEY = 'theme-preference';

    const applyTheme = (theme) => {
      localStorage.setItem(PREFERENCE_KEY, theme);
      document.documentElement.setAttribute('data-theme', theme);
      // Change button icon based on the new theme
      themeButton.textContent = theme === 'light' ? '🌙' : '☀️';
    };

    // Determine and apply the initial theme on page load
    const savedPreference = localStorage.getItem(PREFERENCE_KEY);
    const systemPreference = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    const initialTheme = savedPreference || systemPreference;
    applyTheme(initialTheme);

    // Add click event listener to the toggle button
    themeButton.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
    });