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

export type NewProjectRoleState = {
  name: string
}

export type ProjectRoles = {
  id: number
  name: string
}

export type ProjectRolesFormState = {
  roles: ProjectRoles[]
}

export type ProjectRolesForm = {
  form?: ProjectRolesFormState
  action: FormAction
  title: string
  submitButtonLabel: string
}

export type ProjectDetail = {
  id: number
  name: string
  version: string
  description: string
  github: string
  product: string
  contributors: {
    id: number
    name: string
    position: string
    gen: number
    roles: string[]
  }[]
}
