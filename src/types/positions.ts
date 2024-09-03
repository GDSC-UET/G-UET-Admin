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
