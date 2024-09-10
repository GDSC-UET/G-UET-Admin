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

export type MemberDetail = {
  id: number
  name: string
  avatar: string
  email: string
  school: string
  position: string
  team: string
  joinedAt: Date
  gen: number
  aboutThisMember: string
  facebook: string
  github: string
  linkedin: string
  awards: {
    id: number
    label: string
  }[]
  activities: {
    id: number
    start: string
    end: string
    project: string
  }[]
}

export type MemberActivities = {
  name: string
  position: string
  activities: {
    start: Date
    end: Date
    project: string
  }[]
}

export type NewActivitiesState = {
  start: Date
  end: Date
  project: string
}
