import type { FormAction } from './form-pages'

export type AwardTag = {
  label: string
}

export type AwardFormState = {
  name?: string
  type?: string
  description?: string
}

export type AwardForm = {
  form?: AwardFormState
  action: FormAction
  title: string
  submitButtonLabel: string
}

export type AwardDetail = {
  id: number
  name: string
  type: string
  description: string
  owners: {
    id: number
    name: string
  }[]
}

export type AwardPresentForm = {
  id: number
  members: number[]
}
