export interface FilmI{
  id?: number,
  title: string,
  image: string,
  tags: string[],
  year: string,
  target: string,
  duration: string|number,
  grade: number,
  maxGrade: number
}