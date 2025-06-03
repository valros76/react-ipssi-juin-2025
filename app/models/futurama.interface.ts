export interface FuturamaCharactersI {
  createdAt: string,
  gender: string,
  id: number,
  image: string,
  name: string
  species: string,
  status: string
}

export interface FuturamaCharactersResponseI {
  items: FuturamaCharactersI[]
}

export interface FuturamaEpisodesI {
  id: number,
  name: string,
  number: number,
  productionCode: string,
  airDate: string,
  duration: number,
  createdAt: string,
  season: {
    id: number
  },
  broadcastCode: string
}

export interface FuturamaEpisodesResponseI {
  items: FuturamaEpisodesI[]
}

export interface FuturamaSeasonEpisodeI {
  id: number,
  name: string,
  number: number,
  productionCode: string
}

export interface FuturamaSeasonI {
  id: number,
  episodes: FuturamaSeasonEpisodeI[]
}