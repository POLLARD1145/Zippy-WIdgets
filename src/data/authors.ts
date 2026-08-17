export interface Author {
  slug: string;
  name: string;
  jobTitle: string;
  bio: string;
  url: string;
  worksFor: { name: string; url: string };
}

export const authors: Author[] = [
  {
    slug: 'zippywidgets-team',
    name: 'ZippyWidgets Editorial Team',
    jobTitle: 'Editorial Team',
    bio: 'ZippyWidgets builds fast, privacy-first browser tools and games that run entirely on your device. Our editorial team writes practical, no-fluff guides to help you get more from everyday tech — without sacrificing your privacy.',
    url: 'https://zippywidgets.online/about/',
    worksFor: { name: 'ZippyWidgets', url: 'https://zippywidgets.online/' },
  },
];

export function getAuthor(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}
