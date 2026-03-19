import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PRACTICAL_ASSIGNMENTS, PracticalAssignment } from '../../data/mock-data';

@Component({
  selector: 'app-training-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './training-page.component.html',
  styleUrls: ['./training-page.component.css']
})
export class TrainingPageComponent {
  readonly assignments: PracticalAssignment[] = PRACTICAL_ASSIGNMENTS;
}
