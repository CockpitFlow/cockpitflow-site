// Shared nav + footer for all CockpitFlow site pages
// Include with: <script src="components.js" defer></script>

function initComponents() {
  const path = window.location.pathname.split('/').pop() || 'index.html';

  const links = [
    { href: 'index.html', label: 'Home' },
    { href: 'checklist.html', label: 'Checklist' },
    { href: 'cockpit.html', label: 'Cockpit' },
    { href: 'hardware.html', label: 'Hardware' },
    { href: 'editor.html', label: 'Editor' },
    { href: 'download.html', label: 'Download' },
  ];

  // Mark active + editor sub-pages
  const editorPages = ['editor.html', 'checklist-editor.html'];

  const navLinks = links.map(l => {
    const isActive = l.href === path || (l.href === 'editor.html' && editorPages.includes(path));
    return `<a href="${l.href}"${isActive ? ' class="active"' : ''}>${l.label}</a>`;
  }).join('');

  const navHTML = `
    <a href="index.html" class="nav-brand"><span class="nav-name">COCKPITFLOW</span></a>
    <div class="nav-links">${navLinks}</div>
    <a href="https://github.com/CockpitFlow/cockpitflow/releases" class="nav-cta">Download</a>
  `;

  const footerHTML = `
    <p>CockpitFlow — Open source flight simulator cockpit companion. <a href="https://github.com/CockpitFlow/cockpitflow">GitHub</a></p>
    <p style="margin-top:8px;opacity:.5">Not affiliated with any aircraft manufacturer. For simulation use only.</p>
  `;

  // Inject
  const nav = document.querySelector('nav');
  if (nav) nav.innerHTML = navHTML;

  const footer = document.querySelector('footer');
  if (footer) footer.innerHTML = footerHTML;
}

initComponents();
