import type { FormAction } from './form-pages'

export type MemberFormState = {
  name?: string
  avatar?: string
  email?: string
  school?: string
  position?: string
  joinedAt?: Date
  gen?: number
  aboutThisMember?: string
  facebook?: string
  github?: string
  linkedin?: string
}

export type MemberForm = {
  form?: MemberFormState
  action: FormAction
  title: string
  submitButtonLabel: string
}
