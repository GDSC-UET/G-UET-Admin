export type ApplicantDetail = {
  id: number
  name: string
  status: string
  email: string
  phoneNumber: string
  school: string
  position: {
    name: string
    team: string
  }
  appliedAt: Date
  linkCV: string
  notes?: string
}
