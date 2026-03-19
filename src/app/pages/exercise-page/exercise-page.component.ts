import { Component, computed, inject, ChangeDetectionStrategy, AfterViewInit, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { PRACTICAL_ASSIGNMENTS, Exercise, PracticalAssignment, Question } from '../../data/mock-data';

@Component({
  selector: 'app-exercise-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './exercise-page.component.html',
  styleUrls: ['./exercise-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExercisePageComponent implements AfterViewInit {
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

  /** Carousel state */
  readonly currentIndex = signal(0);

  /** Key-value map: questionId → selectedChoiceId */
  private readonly answers = signal<Record<string, string | null>>({});

  currentQuestion(questions: Question[]): Question {
    return questions[this.currentIndex()];
  }

  selectedAnswer(questionId: string): string | null {
    return this.answers()[questionId] ?? null;
  }

  hasAnswers(): boolean {
    return Object.values(this.answers()).some(v => v !== null);
  }

  /** A, B, C, D labels for choices */
  choiceKey(index: number): string {
    return String.fromCharCode(65 + index);
  }

  onAnswer(questionId: string, choiceId: string): void {
    this.answers.update(prev => ({ ...prev, [questionId]: choiceId }));
  }

  next(): void {
    const ex = this.exercise();
    if (!ex?.questions) return;
    this.currentIndex.update(i => Math.min(i + 1, ex.questions!.length - 1));
  }

  prev(): void {
    this.currentIndex.update(i => Math.max(i - 1, 0));
  }

  goTo(index: number): void {
    this.currentIndex.set(index);
  }

  resetAnswers(): void {
    this.answers.set({});
    this.currentIndex.set(0);
  }

  submitAnswers(): void {
    const ex = this.exercise();
    if (!ex?.questions) return;
    const result = ex.questions.reduce<Record<string, string | null>>((acc, q) => {
      acc[q.id] = this.answers()[q.id] ?? null;
      return acc;
    }, {});
    console.log('Respuestas enviadas (MCQ):', result);
    // TODO: integrate with backend
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const hljs = (window as any).hljs;
      try {
        hljs?.highlightAll?.();
      } catch { /* no-op */ }
    }, 50);
  }
}
