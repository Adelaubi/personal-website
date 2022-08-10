export interface taskItem {
  primary: string
  secondary: string
  icon: any
}

export interface experienceType {
  title: string
  titleLink: string
  content: string[]
  contentLink: string
  tasks: Array<taskItem>
}
