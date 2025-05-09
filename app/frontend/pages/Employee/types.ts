export interface EmployeeType {
  id: number
  name: string
  role: string
}

export type EmployeeFormType = Omit<EmployeeType, 'id'>
