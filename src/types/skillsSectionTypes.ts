interface skillContentType {
  name: string
  value: number
  color: 'primary' | 'secondary'
}

export interface skillType {
  title: string | null
  content: Array<skillContentType >
}
