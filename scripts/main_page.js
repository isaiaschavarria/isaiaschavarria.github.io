  // Año y fecha de build
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('updated').textContent = new Date().toLocaleDateString('es-CR', { year: 'numeric', month: 'long', day: '2-digit' });

    // Theme toggle (respeta prefers-color-scheme)
    const btn = document.getElementById('theme');
    const THEME_KEY = 'pref-theme';
    const applyTheme = (t) => {
      if (!t) return document.documentElement.removeAttribute('data-theme');
      document.documentElement.setAttribute('data-theme', t);
      if (t === 'light') {
        document.querySelector(':root').style.setProperty('--bg', '#f7f9fc');
        document.querySelector(':root').style.setProperty('--bg-soft', '#ffffff');
        document.querySelector(':root').style.setProperty('--text', '#0f1720');
        document.querySelector(':root').style.setProperty('--muted', '#475569');
        document.querySelector(':root').style.setProperty('--accent', '#0066ff');
        document.querySelector(':root').style.setProperty('--accent-2', '#16a34a');
        document.querySelector(':root').style.setProperty('--card', '#ffffff');
        document.querySelector(':root').style.setProperty('--border', '#e5e7eb');
        document.querySelector(':root').style.setProperty('--shadow', '0 8px 24px rgba(2,6,23,.07)');
      } else {
        document.querySelector(':root').style.setProperty('--bg', '#0b0d10');
        document.querySelector(':root').style.setProperty('--bg-soft', '#111418');
        document.querySelector(':root').style.setProperty('--text', '#e8edf2');
        document.querySelector(':root').style.setProperty('--muted', '#aab6c5');
        document.querySelector(':root').style.setProperty('--accent', '#61dafb');
        document.querySelector(':root').style.setProperty('--accent-2', '#8be38b');
        document.querySelector(':root').style.setProperty('--card', '#14181e');
        document.querySelector(':root').style.setProperty('--border', '#232a33');
        document.querySelector(':root').style.setProperty('--shadow', '0 10px 30px rgba(0,0,0,.35)');
      }
    };
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) applyTheme(saved);
    btn.addEventListener('click', () => {
      const current = localStorage.getItem(THEME_KEY) || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
      const next = current === 'light' ? 'dark' : 'light';
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    });