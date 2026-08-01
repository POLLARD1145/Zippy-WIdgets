export interface Tool {
  href: string;
  icon: string;
  name: string;
  description: string;
  cta: string;
  tags: string;
}

export const tools: Tool[] = [
  {
    href: '/tool/weather/',
    icon: '🌤️',
    name: 'Weather Today & Forecast',
    description: 'Weather today, tomorrow and 7-day forecast for any city. Temperature, rain chance, wind, humidity & UV index — instant, no sign-up.',
    cta: 'Check Weather →',
    tags: 'weather today tomorrow forecast rain temperature wind humidity uv index city hourly weekly clima mausam cuaca',
  },
  {
    href: '/tool/pdf-merger/',
    icon: '📑',
    name: 'PDF Merger',
    description: 'Combine multiple PDF files into one document instantly. No file size limits, no watermarks, no sign-up.',
    cta: 'Merge PDFs →',
    tags: 'pdf merge combine join files splitter',
  },
  {
    href: '/tool/pdf-page-editor/',
    icon: '✂️',
    name: 'PDF Page Editor',
    description: 'Reorder, rotate, delete and extract pages from any PDF. Drag-and-drop thumbnails, no sign-up, all in your browser.',
    cta: 'Edit PDF Pages →',
    tags: 'pdf editor reorder rotate delete extract pages page organizer',
  },
  {
    href: '/tool/file-beam/',
    icon: '📡',
    name: 'File Beam — Wi-Fi Transfer',
    description: 'Send files between phones, tablets and computers on the same Wi-Fi. No cloud, no upload — direct browser-to-browser transfer.',
    cta: 'Send Files →',
    tags: 'file transfer wifi share send files between devices airdrop web rtc p2p local network',
  },
  {
    href: '/tool/image-compressor/',
    icon: '🖼️',
    name: 'Image Compressor',
    description: 'Reduce JPG, PNG and WebP file sizes for faster websites and smaller uploads. Preview before you download.',
    cta: 'Compress Image →',
    tags: 'compress image jpg png webp resize optimize',
  },
  {
    href: '/tool/jpg-to-pdf/',
    icon: '📄',
    name: 'JPG to PDF Converter',
    description: 'Convert JPG, PNG and WebP images to a single PDF file in your browser. Choose page size, orientation and margins.',
    cta: 'Convert to PDF →',
    tags: 'jpg to pdf convert image to pdf png to pdf webp to pdf pdf converter merge images to pdf',
  },
  {
    href: '/tool/picker-wheel/',
    icon: '🎡',
    name: 'Random Picker Wheel',
    description: 'Spin the wheel to randomly pick from your custom list of names, items, or options.',
    cta: 'Open Tool →',
    tags: 'random spinner wheel names picker',
  },
  {
    href: '/tool/font-generator/',
    icon: '✍️',
    name: 'Font Generator',
    description: 'Transform your text into stylish Unicode fonts for Instagram, TikTok, and Twitter bios.',
    cta: 'Open Tool →',
    tags: 'fancy text font style unicode copy paste',
  },
  {
    href: '/tool/word-counter/',
    icon: '📝',
    name: 'Word & Character Counter',
    description: 'Instantly count words, characters, sentences, and paragraphs as you type.',
    cta: 'Open Tool →',
    tags: 'word count character counter text',
  },
  {
    href: '/tool/qr-code-generator/',
    icon: '📷',
    name: 'QR Code Generator',
    description: 'Turn any URL or text into a downloadable QR code in seconds — no sign-up needed.',
    cta: 'Open Tool →',
    tags: 'qr code scanner url link',
  },
  {
    href: '/tool/age-calculator/',
    icon: '🎂',
    name: 'Age Calculator',
    description: 'Enter your date of birth and find your exact age in years, months, days, and hours.',
    cta: 'Open Tool →',
    tags: 'age birthday calculator date',
  },
  {
    href: '/tool/speed-test/',
    icon: '⚡',
    name: 'Internet Speed Test',
    description: 'Check your download speed, upload speed, ping and jitter. See ISP info and connection quality rating instantly.',
    cta: 'Open Tool →',
    tags: 'speed internet wifi ping download upload',
  },
  {
    href: '/tool/password-generator/',
    icon: '🔐',
    name: 'Password Generator',
    description: 'Create strong, random, secure passwords in one click. Customise length and character types. Nothing is stored.',
    cta: 'Generate Password →',
    tags: 'password generator strong random secure',
  },
  {
    href: '/tool/json-formatter/',
    icon: '{ }',
    name: 'JSON Formatter',
    description: 'Format, validate, minify and convert JSON to CSV or CSV to JSON. A clean editor for developers.',
    cta: 'Format JSON →',
    tags: 'json formatter validator csv convert minify',
  },
  {
    href: '/tool/favicon-generator/',
    icon: '🎨',
    name: 'Favicon Generator',
    description: 'Turn any logo or image into a favicon.ico file with 16×16, 32×32, 48×48 and Apple touch icon sizes.',
    cta: 'Make Favicon →',
    tags: 'favicon generator ico icon website logo',
  },
  {
    href: '/game/',
    icon: '🎮',
    name: 'Free Online Games',
    description: 'Daily browser games — no login, no download. AetherForge deckbuilder, Daily Word Scramble, and more. Same challenge worldwide every day.',
    cta: 'Play Free →',
    tags: 'games free online browser play',
  },
];
