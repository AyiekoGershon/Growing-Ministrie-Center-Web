export interface Ministry {
  id: string
  name: string
  subtitle: string
  description: string
  vision: string
  verse: string
  ref: string
  activities: string[]
  image: string
  videoUrl?: string
  color?: string
}

export interface Branch {
  name: string
  images: string[]
}

export interface ServiceSchedule {
  day: string
  name: string
  time: string
}

export interface ImageCredit {
  file: string
  author: string
  license: string
  source: string
}
