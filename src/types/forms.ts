import type { FormAction } from './form-pages'

export type JobFormState = {
  position?: string
  description?: string
  isOpen?: boolean
  tag?: string
}

export type JobForm = {
  form?: JobFormState
  action: FormAction
  title: string
  submitButtonLabel: string
}
