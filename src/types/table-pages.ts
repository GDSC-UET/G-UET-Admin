export type TablePages = {
  title: string
  createButton: {
    label: string
    to: string
  }
  dataFields: {
    key: string
    label: string
    sortable: boolean
  }[]
  data: object[]
}
