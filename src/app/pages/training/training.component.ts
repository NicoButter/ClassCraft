import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="card container training-page">
      <h1>Entrenar</h1>
      <p>Sección dedicada a trabajos prácticos y ejercicios interactivos para reforzar tus conocimientos en POO.</p>
      <div class="content">
        <p style="color: #64748b; margin: 2rem 0;">Aquí se configurarán los trabajos prácticos disponibles.</p>
      </div>
      <div class="actions">
        <a routerLink="/" class="back-button">Volver al inicio</a>
      </div>
    </section>
  `,
  styles: [`
    .training-page { max-width:760px; margin:1rem auto; }
    .training-page h1 { margin-top:0; }
    .back-button { 
      display:inline-block; 
      padding:0.6rem 1.2rem; 
      background:#64748b; 
      color:#fff; 
      border-radius:6px; 
      text-decoration:none; 
      font-weight:500;
      transition:all 0.3s ease;
    }
    .back-button:hover { background:#475569; }
  `]
})
export class TrainingComponent {}
