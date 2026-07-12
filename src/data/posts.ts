export interface Post {
  slug: string;
  tag: string;
  title: string;
  description: string;
  date: string;
}

export const posts: Post[] = [
  {
    slug: 'best-free-pdf-merger-online-no-limits',
    tag: 'PDF Tools',
    title: 'Best Free PDF Merger Online 2026 — No Limits, No Sign-up',
    description: 'Compare the top free PDF merger tools. Merge unlimited PDFs in your browser with no watermarks or account required.',
    date: 'July 2026',
  },
  {
    slug: 'compress-images-online-free-no-signup',
    tag: 'Image Tools',
    title: 'Best Free Image Compressor Online 2026 — No Sign-up, No Watermark',
    description: 'Reduce JPG, PNG and WebP file sizes for free. Compare the top online image compressors and see why client-side compression wins on privacy.',
    date: 'July 2026',
  },
  {
    slug: 'best-free-qr-code-generator-with-logo',
    tag: 'QR Code',
    title: 'Best Free QR Code Generator with Logo in 2026 — Top 5 Compared',
    description: 'ZippyWidgets vs QRCode Monkey, TQRCG, Hovercode and Jotform. Find the best no-sign-up, no-watermark QR code maker with logo upload for your business.',
    date: 'July 2026',
  },
  {
    slug: 'what-is-a-good-internet-speed',
    tag: 'Speed Test',
    title: 'What Is a Good Internet Speed? Mbps Guide for Streaming, Gaming & WFH',
    description: 'Download speed, upload speed, ping, jitter — what the numbers actually mean and how much Mbps you really need for 4K streaming, gaming, Zoom and Starlink.',
    date: 'July 2026',
  },
  {
    slug: 'how-to-make-qr-code-for-wifi',
    tag: 'QR Code',
    title: 'How to Make a Free WiFi QR Code — No Password Typing Required',
    description: 'Guests scan and connect automatically on iPhone & Android. Step-by-step guide for homes, cafés, Airbnbs and offices. Free, no app, no sign-up.',
    date: 'July 2026',
  },
  {
    slug: 'unicode-fonts-for-instagram-bio',
    tag: 'Font Generator',
    title: 'Fancy Fonts for Your Instagram Bio — Copy & Paste Bold, Cursive & Aesthetic Styles',
    description: 'Instagram doesn\'t let you choose fonts — but Unicode does. Copy bold, cursive, aesthetic and glitch text and paste into Instagram, TikTok, Discord & more.',
    date: 'July 2026',
  },
  {
    slug: 'random-name-picker-how-it-works',
    tag: 'Picker Wheel',
    title: 'How to Pick a Random Name or Winner — Wheel Spinner, Fair Draw & Classroom Picker',
    description: 'Random name picker, giveaway winner selector, classroom spinner — how a wheel works, why it\'s fairer than a manual draw, and tips for teachers, streamers and event hosts.',
    date: 'July 2026',
  },
  {
    slug: 'ai-world-cup-2026',
    tag: 'Technology & AI',
    title: 'How AI Is Changing the 2026 FIFA World Cup Forever',
    description: 'IMU ball sensors, Hawk-Eye 4D skeletal tracking, Football AI Pro, and the Miami Command Center — a full technical breakdown of the largest AI deployment in sports history.',
    date: 'July 2026',
  },
];

export function postUrl(slug: string) {
  return `/blog/${slug}/`;
}
