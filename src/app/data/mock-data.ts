export interface Question {
  id: string;
  label: string;
  text: string;
  choices?: { id: string; text: string }[];
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  context?: string;
  questions?: Question[];
}

export interface PracticalAssignment {
  id: string;
  title: string;
  category: string;
  year: number;
  description: string;
  exercises: Exercise[];
}

export const PRACTICAL_ASSIGNMENTS: PracticalAssignment[] = [
  {
    id: 'tp1',
    title: 'TP1 - Herencia & Polimorfismo',
    category: 'POO: Herencia & Polimorfismo',
    year: 2025,
    description: 'Aplicación del mecanismo de herencia y polimorfismo en jerarquías de clases.',
    exercises: [
      {
        id: 'e1',
        title: 'Ejercicio 1 - Sistema de Vehículos',
        description: 'Analizá la jerarquía de clases que modelan diferentes tipos de vehículos. Responde las preguntas sobre qué mensajes y atributos son heredados y propios de cada clase.',
        context: `public class Vehiculo {
    private int velocidad;

    public void acelerar() { }
}

public class Auto extends Vehiculo {
    private int puertas;

    public void abrirPuertas() { }
}

public class Deportivo extends Auto {
    private int potencia;

    public void activarTurbo() { }
}`,
        questions: [
          {
            id: 'a',
            label: 'a)',
            text: '¿Qué mensajes se pueden enviar a un objeto de la clase Vehiculo?',
            choices: [
              { id: '1', text: 'Solo acelerar()' },
              { id: '2', text: 'acelerar() y abrirPuertas()' },
              { id: '3', text: 'acelerar() y activarTurbo()' },
              { id: '4', text: 'acelerar(), abrirPuertas() y activarTurbo()' }
            ]
          },
          {
            id: 'b',
            label: 'b)',
            text: '¿Qué mensajes se pueden enviar a un objeto de la clase Auto?',
            choices: [
              { id: '1', text: 'Solo acelerar()' },
              { id: '2', text: 'acelerar() y abrirPuertas()' },
              { id: '3', text: 'abrirPuertas() y activarTurbo()' },
              { id: '4', text: 'acelerar(), abrirPuertas() y activarTurbo()' }
            ]
          },
          {
            id: 'c',
            label: 'c)',
            text: '¿Qué mensajes se pueden enviar a un objeto de la clase Deportivo?',
            choices: [
              { id: '1', text: 'Solo acelerar()' },
              { id: '2', text: 'acelerar() y abrirPuertas()' },
              { id: '3', text: 'acelerar() y activarTurbo()' },
              { id: '4', text: 'acelerar(), abrirPuertas() y activarTurbo()' }
            ]
          },
          {
            id: 'd',
            label: 'd)',
            text: '¿Qué atributos describen a un objeto de la clase Vehiculo?',
            choices: [
              { id: '1', text: 'velocidad' },
              { id: '2', text: 'puertas' },
              { id: '3', text: 'potencia' },
              { id: '4', text: 'velocidad y puertas' }
            ]
          },
          {
            id: 'e',
            label: 'e)',
            text: '¿Qué atributos describen a un objeto de la clase Auto?',
            choices: [
              { id: '1', text: 'velocidad' },
              { id: '2', text: 'velocidad y puertas' },
              { id: '3', text: 'velocidad y potencia' },
              { id: '4', text: 'puertas y potencia' }
            ]
          },
          {
            id: 'f',
            label: 'f)',
            text: '¿Qué atributos describen a un objeto de la clase Deportivo?',
            choices: [
              { id: '1', text: 'velocidad' },
              { id: '2', text: 'puertas' },
              { id: '3', text: 'velocidad y puertas' },
              { id: '4', text: 'velocidad, puertas y potencia' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'tp2',
    title: 'TP2 - Herencia',
    category: 'POO: Herencia',
    year: 2025,
    description: 'Aplicación del mecanismo de herencia entre clases.',
    exercises: [
      {
        id: 'e1',
        title: 'Ejercicio 1 - Herencia simple',
        description: 'Creá una clase base "Animal" con atributos nombre y sonido. Luego creá las subclases "Perro" y "Gato" que hereden de Animal y sobreescriban el método hacerSonido().'
      },
      {
        id: 'e2',
        title: 'Ejercicio 2 - Jerarquía de figuras',
        description: 'Definí una clase abstracta "Figura" con el método calcularArea(). Implementá las subclases "Círculo", "Rectángulo" y "Triángulo" con sus respectivos cálculos.'
      }
    ]
  },
  {
    id: 'tp3',
    title: 'TP3 - Polimorfismo',
    category: 'POO: Polimorfismo',
    year: 2025,
    description: 'Comprensión y aplicación del polimorfismo en jerarquías de clases.',
    exercises: [
      {
        id: 'e1',
        title: 'Ejercicio 1 - Polimorfismo con empleados',
        description: 'Creá una clase "Empleado" con el método calcularSueldo(). Extendela con "EmpleadoFijo" y "EmpleadoTemporal" que calculen el sueldo de forma distinta. Procesá una lista mixta polimórficamente.'
      },
      {
        id: 'e2',
        title: 'Ejercicio 2 - Interfaz Dibujable',
        description: 'Definí una interfaz "Dibujable" con un método dibujar(). Implementala en varias clases y procesá una lista de objetos Dibujable invocando el método en cada uno.'
      }
    ]
  }
];
