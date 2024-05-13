export interface Mission {
  id: number; 
  title: string; 
  description: string; 
  startDate: Date; 
  endDate: Date; 
  status: string; 
  assignedTo: number; 
  createdBy: number; 
}
