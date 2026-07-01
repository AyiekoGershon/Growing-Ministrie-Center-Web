export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  image: string
  category: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'GMC Hosts Successful Community Medical Camp',
    excerpt: 'Over 500 people received free medical checkups and treatment during our annual community health outreach.',
    content: 'Growing Missionaries Centre partnered with local health professionals to provide free medical services...',
    author: 'Admin',
    date: '2026-06-25',
    image: 'https://res.cloudinary.com/dri60cqs8/image/upload/v1780823380/education_support_wkku3f.jpg',
    category: 'Community',
  },
  {
    id: 'b2',
    title: 'Youth Conference 2026: A Life-Changing Encounter',
    excerpt: 'Hundreds of young people gathered for a weekend of worship, teaching, and fellowship.',
    content: 'The annual GMC Youth Conference brought together young believers from across the region...',
    author: 'Admin',
    date: '2026-06-18',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Drum_used_in_African_Independent_Church_worship_%288003246903%29.jpg',
    category: 'Youth',
  },
  {
    id: 'b3',
    title: 'New Branch Opens in Mabera',
    excerpt: 'We are excited to announce the opening of our newest branch church in Mabera.',
    content: 'Growing Missionaries Centre continues to expand its reach with a new branch in Mabera...',
    author: 'Admin',
    date: '2026-06-10',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Worship_section_in_a_church_05.jpg',
    category: 'Announcement',
  },
  {
    id: 'b4',
    title: 'Sayuni Harvesters Choir Releases New Album',
    excerpt: 'The choir\'s latest album "Mlima wa Mungu" is now available on YouTube and streaming platforms.',
    content: 'Sayuni Harvesters Choir has released their highly anticipated new album...',
    author: 'Admin',
    date: '2026-06-05',
    image: 'https://res.cloudinary.com/dri60cqs8/image/upload/v1780822773/IMG_0749_wwui28.jpg',
    category: 'Music',
  },
]
