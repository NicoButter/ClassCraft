import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercise-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="card container">
      <h2>Exercise (placeholder)</h2>
      <p>This area will host interactive exercises.</p>
    </section>
  `,
  styles: [`.card { max-width:760px; margin:1rem auto; }`]
})
export class ExercisePageComponent {}
