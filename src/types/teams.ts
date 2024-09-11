import type { FormAction } from './form-pages'

export type TeamBadge = {
  label: string
}

export type TeamFormState = {
  name?: string
  description?: string
}

export type TeamForm = {
  form?: TeamFormState
  action: FormAction
  title: string
  submitButtonLabel: string
}

export type TeamDetail = {
  id: number
  name: string
  description: string
  positions: {
    id: number
    position: string
    description: string
    members: number
  }[]
}
