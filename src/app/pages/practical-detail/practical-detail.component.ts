import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { PRACTICAL_ASSIGNMENTS, PracticalAssignment } from '../../data/mock-data';

@Component({
  selector: 'app-practical-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './practical-detail.component.html',
  styleUrls: ['./practical-detail.component.css']
})
export class PracticalDetailComponent {
  private readonly route = inject(ActivatedRoute);

  private readonly tpId = toSignal(
    this.route.paramMap.pipe(map(p => p.get('tpId') ?? ''))
  );

  readonly assignment = computed<PracticalAssignment | undefined>(() =>
    PRACTICAL_ASSIGNMENTS.find(tp => tp.id === this.tpId())
  );
}
