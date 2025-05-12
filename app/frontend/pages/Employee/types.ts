export interface EmployeeType {
  id: number
  name: string
  role: string
  status: string
}

export type EmployeeFormType = Omit<EmployeeType, 'id'>
