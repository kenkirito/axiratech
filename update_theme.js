const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf8');

// Replace Root
css = css.replace(/:root \{[\s\S]*?--gradient-r: linear-gradient\(135deg, #EF4444, #F59E0B\);/, `:root {
  /* Elegant dark theme based on provided palette */
  --bg: #10232A;          /* Dark navy/teal */
  --bg-dark: #161616;     /* Contrast sections */
  --purple: #D3C3B9;      /* Light beige text/headings */
  --purple-light: #A79E9C;/* Warm grey text */
  --cyan: #B58863;        /* Action/Accent Warm Tan */
  --cyan-light: #D3C3B9;
  --amber: #B58863;
  --green: #3D4D55;
  --text: #D3C3B9;
  --text-muted: #A79E9C;
  --text-inverse: #10232A;
  --glass: rgba(16, 35, 42, 0.7);
  --glass-border: rgba(211, 195, 185, 0.15);
  --gradient: linear-gradient(135deg, #B58863, #3D4D55);
  --gradient-r: linear-gradient(135deg, #3D4D55, #B58863);`);

// Global rgba replaces
css = css.replace(/rgba\(245,158,11/g, 'rgba(181,136,99');
css = css.replace(/rgba\(239,68,68/g, 'rgba(61,77,85');

// Hardcoded colors replacements
css = css.replace(/background: #fff;/g, 'background: var(--bg-dark);');
css = css.replace(/color: #fff/g, 'color: var(--bg)');
css = css.replace(/background: #000;/g, 'background: var(--cyan);');
css = css.replace(/color: #000;/g, 'color: var(--cyan);');
css = css.replace(/background: rgba\(255,255,255,0\.6\);/g, 'background: rgba(16, 35, 42, 0.6);');
css = css.replace(/background: rgba\(255,255,255,0\.85\);/g, 'background: rgba(16, 35, 42, 0.85);');
css = css.replace(/background: #F8FAFC;/g, 'background: var(--bg-dark);');
css = css.replace(/border-bottom: 1px solid #F1F5F9;/g, 'border-bottom: 1px solid var(--glass-border);');

// Mockup gradients p1 to p4
css = css.replace(/\.p1 \{ background: linear-gradient\(135deg, #FFEDD5, #FFF7ED\); \}/, '.p1 { background: linear-gradient(135deg, #10232A, #161616); }');
css = css.replace(/\.p2 \{ background: linear-gradient\(135deg, #ECFDF5, #F0FDF4\); \}/, '.p2 { background: linear-gradient(135deg, #3D4D55, #10232A); }');
css = css.replace(/\.p3 \{ background: linear-gradient\(135deg, #FDF4FF, #FAF5FF\); \}/, '.p3 { background: linear-gradient(135deg, #161616, #3D4D55); }');
css = css.replace(/\.p4 \{ background: linear-gradient\(135deg, #FEF3C7, #FFFBEB\); \}/, '.p4 { background: linear-gradient(135deg, #10232A, #3D4D55); }');

fs.writeFileSync('src/app/globals.css', css);
console.log('Done!');
