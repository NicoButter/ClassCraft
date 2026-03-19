import { Component, computed, inject, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { PRACTICAL_ASSIGNMENTS, Exercise, PracticalAssignment } from '../../data/mock-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercise-page',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './exercise-page.component.html',
  styleUrls: ['./exercise-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  resetAnswers(): void {
    // clear radio selections
    const radios = document.querySelectorAll<HTMLInputElement>('.choice-item input[type="radio"]');
    radios.forEach(r => (r.checked = false));
  }

  submitAnswers(): void {
    const answers: { [key: string]: string | null } = {};
    const ex = this.exercise();
    if (!ex || !ex.questions) return console.warn('No exercise/questions found');
    ex.questions.forEach(q => {
      const selector = `input[name="${q.id}"]:checked`;
      const input = document.querySelector<HTMLInputElement>(selector);
      answers[q.id] = input ? input.value : null;
    });
    console.log('Respuestas enviadas (MCQ):', answers);
    // TODO: integrate with backend
  }

  ngAfterViewInit(): void {
    // highlight code blocks once component is rendered
    setTimeout(() => {
      const hljs = (window as any).hljs;
      try {
        hljs && typeof hljs.highlightAll === 'function' && hljs.highlightAll();
      } catch (e) {
        // no-op if highlight.js is not loaded yet
        // console.warn('Highlight.js not available', e);
      }
    }, 50);
  }
}
