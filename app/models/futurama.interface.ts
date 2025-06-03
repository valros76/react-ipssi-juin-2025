export interface FuturamaCharactersI {
  createdAt: string,
  gender: string,
  id: number,
  image: string,
  name: string
  species: string,
  status: string
}

export interface FuturamaCharactersResponseI{
  items: FuturamaCharactersI[]
}