// client-route-check.js (run on every page)
const validRoutes = [
  '/page_404/404.html',
  '/cosplays/cosplays.html',
  '/cosplay_info/cosplay_info.html',
  // add all routes your site supports
];

const pathname = window.location.pathname;

// normalize trailing slash if you want
const normalize = p => p.replace(/\/+$/, '') || '/';

if (!validRoutes.map(normalize).includes(normalize(pathname))) {
  // replace so user can't go back to the invalid URL (optional)
  window.location.replace('/404.html');
}
