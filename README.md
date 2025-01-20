# Juego del Amigo Secreto

Este es un juego clásico en el que los participantes se asignan un "amigo secreto", a quien deben regalar un presente sin que la persona sepa quién le ha tocado. El juego se realiza de manera digital y sigue estos pasos:

## Funcionalidad del juego

### 1. Agregar amigos:
- El jugador debe ingresar los nombres de sus amigos en el campo de texto.
- Cada nombre ingresado se añade a una lista de amigos y se muestra en la pantalla.
- Si se intenta agregar el mismo nombre más de una vez, el sistema mostrará un mensaje de error indicando que ese nombre ya ha sido añadido.

### 2. Sortear el amigo secreto:
- Cuando haya al menos dos personas en la lista de amigos, el jugador puede hacer clic en el botón "Sortear amigo".
- El sistema asignará aleatoriamente un amigo secreto para un miembro de la lista de amigos.
- Se asegura que una persona no se pueda asignar a sí misma como su propio amigo secreto.
- El nombre del amigo secreto será mostrado en la pantalla.
- Después de cada sorteo, el amigo sorteado se elimina de la lista para evitar que se repita en el siguiente sorteo.

### 3. Mensajes de resultado:
- Si el jugador intenta sortear con menos de dos personas en la lista, el sistema mostrará un mensaje indicando que no hay suficientes amigos para realizar el sorteo.
- Si el jugador intenta agregar un nombre vacío o un nombre duplicado, el sistema mostrará un mensaje para indicarlo.

## Interacción con el juego

- **Entrada de datos**: El usuario introduce los nombres de sus amigos en un campo de texto y hace clic en un botón para añadir cada nombre.
- **Botón de sorteo**: Al hacer clic en "Sortear amigo", el sistema asigna un amigo secreto y lo muestra en la pantalla. Este proceso se repite cada vez que se presiona el botón, pero solo se muestra un par de "amigo secreto" a la vez.

## Reglas
- El juego se juega en una lista de amigos proporcionada por el jugador. Cada vez que se hace un sorteo, se muestra un solo amigo secreto de manera aleatoria.
- Una persona no puede ser su propio amigo secreto, por lo que el sistema siempre se asegura de que el sorteo sea válido.

## Ejemplo de flujo del juego:

1. El jugador agrega los siguientes amigos: "Ana", "Juan", "Pedro", "Maria".
2. Cuando hace clic en "Sortear amigo", el sistema asigna un amigo secreto al azar.
3. Después de hacer el sorteo, el jugador ve el mensaje anterior y puede hacer clic en "Sortear amigo" nuevamente para ver otro amigo secreto.

## Tecnologías utilizadas
- **HTML**: Para la estructura básica de la interfaz de usuario.
- **CSS**: Para los estilos visuales y la disposición de los elementos.
- **JavaScript**: Para la lógica del juego, manejo de eventos y la asignación aleatoria de amigos secretos.

## Requisitos
- Un navegador web que soporte JavaScript.
- Al menos dos jugadores para que el juego pueda sortear amigos secretos correctamente.
