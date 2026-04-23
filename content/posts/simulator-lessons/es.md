---
title: "Tres cosas que me enseñó el simulador"
excerpt: "Notas de seis meses simulando drones submarinos con ROS2, C++ y Stonefish."
---

Me uní a Vortex NTNU en septiembre esperando escribir mucho C++. Lo hice. Pero las lecciones que me han quedado no son las que iba buscando.

## 1. La realidad tiene más ruido que la hoja de datos

La primera vez que comparé una cámara estéreo simulada con una real, la diferencia era casi cómica. En el simulador, los fotogramas izquierdo y derecho estaban alineados píxel a píxel. En el mundo real, la sincronización se desplaza, las lentes están sucias y la iluminación cambia entre dos fotogramas que se supone que son "el mismo".

Un simulador no miente, pero sí abstrae con mucho cuidado. En cuanto lo olvidas, terminas con una *pipeline* que solo funciona dentro de Stonefish.

## 2. Los *logs* son una *feature*

El bug que se comió una semana de mi vida estaba en un driver de sónar. Cuando la salida parecía inestable, mi primer instinto fue leer código. Lo que me salvó, al final, fue añadir unas cuantas líneas aburridas:

```cpp
RCLCPP_INFO(this->get_logger(),
            "frame=%lu dt=%.3f ms dropped=%lu",
            frame_id, dt_ms, dropped);
```

Tres números, impresos en cada fotograma. De repente el patrón era obvio: perdíamos fotogramas cada vez que un tópico pesado volvía a publicar. Ninguna relectura del código habría igualado dos minutos mirando esos números.

## 3. El equipo es parte del *stack*

Un simulador es pegamento entre personas tanto como entre librerías. A la gente de percepción le importan los nombres de los tópicos y los tiempos. A la gente de control le importa la latencia. El equipo mecánico quiere que el CAD cuadre. Cada "pequeño refactor" que toca la interfaz tiene un coste social.

La lección: cada vez que cambio una interfaz, escribo un mensaje de un párrafo en el canal del equipo explicando **qué** cambia, **por qué** y qué se rompe. Me ha ahorrado más tiempo de depuración que cualquier herramienta.

---

Nada de esto es revolucionario. Probablemente todo está en un libro que aún no he leído. Pero lo he tenido que aprender haciendo, así que lo apunto aquí — un poco para ti, sobre todo para mí.
