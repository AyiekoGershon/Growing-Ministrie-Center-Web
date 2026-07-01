export interface Sermon {
  id: string
  title: string
  speaker: string
  date: string
  description: string
  videoUrl: string
  thumbnail: string
}

export const SERMONS: Sermon[] = [
  {
    id: 's1',
    title: 'The Power of Resurrection',
    speaker: 'Pastor John',
    date: '2026-06-28',
    description: 'Experience the transformative power of Christ\'s resurrection in your daily life.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://res.cloudinary.com/dri60cqs8/image/upload/v1780822774/IMG_0739_pbmk63.jpg',
  },
  {
    id: 's2',
    title: 'Walking in Divine Purpose',
    speaker: 'Evangelist Sarah',
    date: '2026-06-21',
    description: 'Discover God\'s unique calling and purpose for your life.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://res.cloudinary.com/dri60cqs8/image/upload/v1780822774/IMG_0746_cuxqr1.jpg',
  },
  {
    id: 's3',
    title: 'Faith That Moves Mountains',
    speaker: 'Pastor John',
    date: '2026-06-14',
    description: 'Learn how to cultivate unshakable faith that overcomes every obstacle.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://res.cloudinary.com/dri60cqs8/image/upload/v1780822774/IMG_0739_pbmk63.jpg',
  },
  {
    id: 's4',
    title: 'The Heart of Worship',
    speaker: 'Worship Team',
    date: '2026-06-07',
    description: 'A special message on what it means to worship in spirit and truth.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://res.cloudinary.com/dri60cqs8/image/upload/v1780822774/IMG_0739_pbmk63.jpg',
  },
]
