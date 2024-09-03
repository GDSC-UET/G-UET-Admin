import type { FormAction } from './form-pages'

export type ProjectFormState = {
  name?: string
  version?: string
  github?: string
  product?: string
  description?: string
}

export type ProjectForm = {
  form?: ProjectFormState
  action: FormAction
  title: string
  submitButtonLabel: string
}
