export interface Exercise {
  id: string;
  title: string;
  description: string;
}

export interface PracticalAssignment {
  id: string;
  title: string;
  description: string;
  exercises: Exercise[];
}

export const PRACTICAL_ASSIGNMENTS: PracticalAssignment[] = [
  {
    id: 'tp1',
    title: 'TP1 - Clases y Objetos',
    description: 'Introducción a la definición de clases, atributos y creación de objetos.',
    exercises: [
      {
        id: 'e1',
        title: 'Ejercicio 1 - Definir una clase',
        description: 'Definí una clase "Persona" con los atributos nombre, apellido y edad. Incluí un método presentarse() que devuelva un String con los datos de la persona.'
      },
      {
        id: 'e2',
        title: 'Ejercicio 2 - Instanciar objetos',
        description: 'Creá tres instancias de la clase "Persona" con distintos valores. Invocá el método presentarse() de cada una y mostrá el resultado.'
      },
      {
        id: 'e3',
        title: 'Ejercicio 3 - Clase Vehículo',
        description: 'Definí una clase "Vehículo" con atributos marca, modelo y año. Agregá un método obtenerInfo() que devuelva los datos del vehículo formateados.'
      }
    ]
  },
  {
    id: 'tp2',
    title: 'TP2 - Herencia',
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
