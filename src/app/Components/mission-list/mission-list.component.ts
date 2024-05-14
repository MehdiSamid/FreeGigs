import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MissionService } from '../../services/mission.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mission-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './mission-list.component.html',
  styleUrl: './mission-list.component.css'
})
export class MissionListComponent {
  missions : any[] = [];
#MissionService = inject(MissionService)
ngOnInit(): void {
  this.getMissions();
}

getMissions(): void {
  this.#MissionService.getMissions().subscribe((data: any[]) => {
    this.missions = data;
  });
}
deleteMission(id: number): void {
  this.#MissionService.deleteMission(id).subscribe(() => {
    this.missions = this.missions.filter(mission => mission.id !== id);
  });
  
}

//   editMission(id:Number){
// this.#MissionService.updateMission(id).subscribe(()=>{
    
// });
  // }
}
