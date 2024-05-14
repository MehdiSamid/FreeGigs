export interface Mission {
  id: number; 
  title: string; 
  description: string; 
  startDate: Date; 
  endDate: Date; 
  status: 'planned' | 'ongoing' | 'completed' | 'cancelled';
  assignedTo: number; 
  createdBy: number; 
  priority: 'low' | 'medium' | 'high';
  location?: string; 
  budget?: number; 
  skillsRequired?: string[]; 
}
