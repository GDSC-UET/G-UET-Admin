import type { FormAction } from './form-pages'

export type PositionFormState = {
  name?: string
  team?: string
  responsibilities?: string
}

export type PositionForm = {
  form?: PositionFormState
  action: FormAction
  title: string
  submitButtonLabel: string
}

export type PositionDetail = {
  id: number
  name: string
  team: string
  responsibilities: string
  members: {
    id: number
    name: string
    position: string
    gen: number
    school: string
  }[]
}
