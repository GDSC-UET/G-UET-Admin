import type { FormAction } from './form-pages'

export type JobTag = {
  label: string
}

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

export type JobDetail = {
  id: number
  position: {
    id: number
    name: string
  }
  tag: string
  isOpen: boolean
  description: string
  applicants: {
    id: number
    name: string
    linkCV: string
    appliedAt: Date
  }[]
}
