import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { PRACTICAL_ASSIGNMENTS, Exercise, PracticalAssignment } from '../../data/mock-data';

@Component({
  selector: 'app-exercise-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './exercise-page.component.html',
  styleUrls: ['./exercise-page.component.css']
})
export class ExercisePageComponent {
  private readonly route = inject(ActivatedRoute);

  private readonly params = toSignal(
    this.route.paramMap.pipe(map(p => ({ tpId: p.get('tpId') ?? '', exerciseId: p.get('exerciseId') ?? '' })))
  );

  readonly assignment = computed<PracticalAssignment | undefined>(() =>
    PRACTICAL_ASSIGNMENTS.find(tp => tp.id === this.params()?.tpId)
  );

  readonly exercise = computed<Exercise | undefined>(() =>
    this.assignment()?.exercises.find(e => e.id === this.params()?.exerciseId)
  );
}
