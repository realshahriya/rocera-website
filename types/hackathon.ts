export interface HackathonTechStack {
  name: string
  icon?: string
}

export interface HackathonAward {
  place: string
  category: string
  prize?: string
}

export interface Hackathon {
  id: string
  name: string
  date: string
  location: string
  description: string
  result: string
  awards: HackathonAward[]
  techStack: HackathonTechStack[]
  gallery: string[]
  teamSize: number
  url?: string
}
