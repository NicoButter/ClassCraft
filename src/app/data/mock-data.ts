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
      },
      {
        id: 'e2',
        title: 'Ejercicio 2 - Jerarquía',
        description: 'Analizá la siguiente jerarquía de clases y respondé las preguntas sobre herencia, acceso y valores de atributos.',
        context: `class Vehiculo {
    protected int velocidad;

    public Vehiculo() {
        this.velocidad = 50;
    }

    public void mostrarVelocidad() {
        System.out.println("Velocidad base");
    }
}

class Auto extends Vehiculo {
    protected int ruedas;

    public Auto() {
        super();
        this.ruedas = 4;
    }

    @Override
    public void mostrarVelocidad() {
        System.out.println("Velocidad del auto");
    }

    private void metodoSecreto() {
        System.out.println("Método privado del auto");
    }
}

class Deportivo extends Auto {
    private int ruedas;

    public Deportivo() {
        super();
        this.ruedas = 6;
    }

    public void mostrarDeportivo() {
        System.out.println("Soy un deportivo");
    }
}`,
        questions: [
          {
            id: 'a',
            label: 'a)',
            text: '¿Qué ocurre cuando el método mostrarVelocidad() es invocado por una instancia de Vehiculo?',
            choices: [
              { id: '1', text: 'A. Se ejecuta el método de Auto' },
              { id: '2', text: 'B. Se ejecuta el método de Vehiculo' },
              { id: '3', text: 'C. Se ejecuta el método de Deportivo' },
              { id: '4', text: 'D. Error de compilación' }
            ]
          },
          {
            id: 'b',
            label: 'b)',
            text: '¿Qué ocurre cuando un objeto de Auto invoca al método mostrarVelocidad()?',
            choices: [
              { id: '1', text: 'A. Se ejecuta el método de Vehiculo' },
              { id: '2', text: 'B. Se ejecuta el método redefinido en Auto' },
              { id: '3', text: 'C. Se ejecuta el método de Deportivo' },
              { id: '4', text: 'D. Error de ejecución' }
            ]
          },
          {
            id: 'c',
            label: 'c)',
            text: '¿Qué ocurre cuando un objeto de Deportivo recibe el mensaje mostrarVelocidad()?',
            choices: [
              { id: '1', text: 'A. Se ejecuta el método de Vehiculo' },
              { id: '2', text: 'B. Se ejecuta el método de Auto' },
              { id: '3', text: 'C. Se ejecuta el método de Deportivo' },
              { id: '4', text: 'D. Error de compilación' }
            ]
          },
          {
            id: 'd',
            label: 'd)',
            text: '¿Qué sucede cuando un objeto de Deportivo o Vehiculo intenta invocar metodoSecreto() de Auto?',
            choices: [
              { id: '1', text: 'A. Se ejecuta normalmente' },
              { id: '2', text: 'B. Se ejecuta solo en Auto' },
              { id: '3', text: 'C. Error de compilación' },
              { id: '4', text: 'D. Error en tiempo de ejecución' }
            ]
          },
          {
            id: 'e',
            label: 'e)',
            text: '¿Qué valor tiene el atributo ruedas en un objeto de Auto?',
            choices: [
              { id: '1', text: 'A. 2' },
              { id: '2', text: 'B. 4' },
              { id: '3', text: 'C. 6' },
              { id: '4', text: 'D. No existe' }
            ]
          },
          {
            id: 'f',
            label: 'f)',
            text: '¿Qué valor tiene el atributo ruedas en un objeto de Deportivo?',
            choices: [
              { id: '1', text: 'A. 4' },
              { id: '2', text: 'B. 6' },
              { id: '3', text: 'C. 10' },
              { id: '4', text: 'D. Depende del constructor de Vehiculo' }
            ]
          },
          {
            id: 'g',
            label: 'g)',
            text: '¿Qué ocurre con el atributo ruedas en la clase Vehiculo?',
            choices: [
              { id: '1', text: 'A. Tiene valor 0 por defecto' },
              { id: '2', text: 'B. Tiene valor 4' },
              { id: '3', text: 'C. No existe en esa clase' },
              { id: '4', text: 'D. Se hereda desde Auto' }
            ]
          },
          {
            id: 'h',
            label: 'h)',
            text: '¿Qué valor tiene velocidad en un objeto de Deportivo?',
            choices: [
              { id: '1', text: 'A. 0' },
              { id: '2', text: 'B. 50' },
              { id: '3', text: 'C. 6' },
              { id: '4', text: 'D. Depende de Auto' }
            ]
          },
          {
            id: 'i',
            label: 'i)',
            text: '¿Qué valor tiene velocidad en un objeto de Auto?',
            choices: [
              { id: '1', text: 'A. 0' },
              { id: '2', text: 'B. 50' },
              { id: '3', text: 'C. 4' },
              { id: '4', text: 'D. 6' }
            ]
          },
          {
            id: 'j',
            label: 'j)',
            text: 'Dada la siguiente declaración:\nVehiculo v = new Deportivo();\nv.mostrarVelocidad();\n¿Qué ocurre?',
            choices: [
              { id: '1', text: 'A. Se ejecuta el método de Vehiculo' },
              { id: '2', text: 'B. Se ejecuta el método de Auto' },
              { id: '3', text: 'C. Se ejecuta el método de Deportivo' },
              { id: '4', text: 'D. Error de compilación' }
            ]
          }
        ]
      },
      {
        id: 'e3',
        title: 'Ejercicio 3 - Multiple Choice',
        description: 'Preguntas sobre inicialización y constructores en jerarquías de clases.',
        context: `// 3.1 - Clase base y derivada tienen constructores
class Base {
    private int i;

    public Base() {
        i = 100;
    }

    public int getI() {
        return i;
    }
}

class Hija extends Base {
    private int j;

    public Hija() {
        super();
        j = 120;
    }

    public int getJ() {
        return j;
    }
}

public class Prueba {
    public static void main(String[] args) {
        Hija x = new Hija();
        System.out.println("Atributo j de X: " + x.getJ());
        System.out.println("Atributo i de X: " + x.getI());
    }
}

// 3.2 - La clase derivada no tiene constructor (Java agrega uno por defecto)
class Base2 {
    private int i;

    public Base2() {
        i = 100;
    }

    public int getI() {
        return i;
    }
}

class Hija2 extends Base2 {
    private int j;

    // No hay constructor → Java agrega uno por defecto

    public int getJ() {
        return j;
    }
}

public class Prueba2 {
    public static void main(String[] args) {
        Hija2 x = new Hija2();
        System.out.println("Atributo j de X: " + x.getJ());
        System.out.println("Atributo i de X: " + x.getI());
    }
}

// 3.3 - La clase base no tiene constructor sin argumentos (ejemplo que provoca compilación)
class Base3 {
    private int i;

    public Base3(int n) {
        i = n;
    }

    public int getI() {
        return i;
    }
}

class Hija3 extends Base3 {
    private int j;

    public Hija3() {
        j = 120;
    }

    public int getJ() {
        return j;
    }
}

public class Prueba3 {
    public static void main(String[] args) {
        Hija3 x = new Hija3(); // 💥 rompe: no existe constructor por defecto en Base3
        System.out.println("Atributo j de X: " + x.getJ());
        System.out.println("Atributo i de X: " + x.getI());
    }
}

// 3.4 - Base tiene constructor con argumentos, Hija llama a super(110)
class Base4 {
    private int i;

    public Base4(int n) {
        i = n;
    }

    public int getI() {
        return i;
    }
}

class Hija4 extends Base4 {
    private int j;

    public Hija4() {
        super(110);
        j = 120;
    }

    public int getJ() {
        return j;
    }
}

public class Prueba4 {
    public static void main(String[] args) {
        Hija4 x = new Hija4();
        System.out.println("Atributo j de X: " + x.getJ());
        System.out.println("Atributo i de X: " + x.getI());
    }
}`,
        questions: [
          {
            id: '3.1',
            label: '3.1',
            text: '(Clase base y derivada tienen constructores)\n¿Qué salida produce el programa?',
            choices: [
              { id: '1', text: 'A. Atributo j de X: 0\nAtributo i de X: 0' },
              { id: '2', text: 'B. Atributo j de X: 120\nAtributo i de X: 100' },
              { id: '3', text: 'C. Atributo j de X: 120\nAtributo i de X: 0' },
              { id: '4', text: 'D. Error de compilación' }
            ]
          },
          {
            id: '3.2',
            label: '3.2',
            text: '(La clase derivada no tiene constructor)\n¿Qué salida produce el programa?',
            choices: [
              { id: '1', text: 'A. Atributo j de X: 0\nAtributo i de X: 100' },
              { id: '2', text: 'B. Atributo j de X: 120\nAtributo i de X: 100' },
              { id: '3', text: 'C. Atributo j de X: 0\nAtributo i de X: 0' },
              { id: '4', text: 'D. Error de compilación' }
            ]
          },
          {
            id: '3.3',
            label: '3.3',
            text: '(La clase base no tiene constructor sin argumentos)\n¿Qué ocurre al ejecutar el programa?',
            choices: [
              { id: '1', text: 'A. Se ejecuta correctamente con valores por defecto' },
              { id: '2', text: 'B. Se ejecuta y muestra i = 0' },
              { id: '3', text: 'C. Error de compilación' },
              { id: '4', text: 'D. Error en tiempo de ejecución' }
            ]
          },
          {
            id: '3.4',
            label: '3.4',
            text: '(Base tiene constructor con argumentos, Hija llama a super(110))\n¿Qué salida produce el programa?',
            choices: [
              { id: '1', text: 'A. Atributo j de X: 0\nAtributo i de X: 110' },
              { id: '2', text: 'B. Atributo j de X: 120\nAtributo i de X: 100' },
              { id: '3', text: 'C. Atributo j de X: 120\nAtributo i de X: 110' },
              { id: '4', text: 'D. Error de compilación' }
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
