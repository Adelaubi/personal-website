interface skillContentType {
  name: string
  value: number
  color: 'primary' | 'secondary'
}

export interface skillType {
  title: string | null
  content: Array<skillContentType>
}

export interface languageSkillType {
  title: string
  content: Array<Array<skillContentType>>
}
