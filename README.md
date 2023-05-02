[![CI for LOMAP ES5A](https://github.com/Arquisoft/lomap_es5a/actions/workflows/lomap_es5a.yml/badge.svg)](https://github.com/Arquisoft/lomap_es5a/actions/workflows/lomap_es5a.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Arquisoft_lomap_es5a&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Arquisoft_lomap_es5a)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Arquisoft_lomap_es5a&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Arquisoft_lomap_es5a)

# LOMAP ES5A - Tu aplicación de mapas
Repositorio dedicado al despliegue de la aplicación (Entorno de producción). El repositorio original es: [https://github.com/Arquisoft/lomap_es5a](https://github.com/Arquisoft/lomap_es5a), donde encontrará toda la información, documentación y guías acerca de la aplicación.

![BANNER REPO](https://user-images.githubusercontent.com/56480356/235353759-1037cbdc-ed98-4ad4-8849-d6e666597109.png)

## Incidencias
Si encuentra un error en la aplicación, puede documentarlo como una nueva issue, dentro de la sección de issues de este repositorio. Para ello, identifique el error con un título descriptivo y una descripción, si es posible, que contenga de una captura donde se muestre el error, así como los pasos para reproducirlo.

<hr>

### Agregar / eliminar amigos
A la hora de agregar amistades sera necesario acceder al perfil del usuario que esta en sesion o acceder a "guardados". A continuacion mostraremos los pasos a seguir tanto para añadir y eliminar amistades:
<br/>
![image](https://user-images.githubusercontent.com/91533653/235512839-dfe07a6d-6d9e-44d0-93f0-53d587e0e350.png)

<br/>

Una vez accedamos a la vista del perfil del usuario deberemos hacer Click en el boton de refrescar amistades para que se carguen. Esta decision se toma para evitar el excesivo uso de llamadas a los provedores.
Para añadir seguiremos los siguientes pasos:
- Escribir el nombre de tu amigo de la siguiente manera: ```<nombre_de_usuario>.<provider>``` para poner un ejemplo mas concreto: ```pepe.inrupt.net``` 
- Hacer click en el boton para añadir el amigo. Si surge algun tipo de error un mensaje será mostrado al usuario dependiendo del error surgido.
- A aprtir de este momento el amigo ya estara en el POD del usuario. Pero recordemos que para no sobrecargar el servidor hemos añadido un boton para poder recargar tus amistades.

<br/>

Para eliminar amigos debemos seguir estos pasos:
- Hacer click sobre "la carta" del amigo y escoger eliminar.
- Este proceso ya actualiza la lista se tus amistades y no hará falta actualizar la lista como se hacia anteriormente en "añadir".


## Colaboradores
Este proyecto es posible gracias a los siguientes desarrolladores:

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 10px; padding: 20px 0;">
   <a href="https://github.com/franciscocoya" target="_blank">
      <img src="https://user-images.githubusercontent.com/56480356/231735724-81d30a4a-87d4-4e09-a549-9027a529a7f5.png" style="border-radius: 100px;" width="96px" height="96px"/>
   </a>
   <a href="https://github.com/miguelglez8" target="_blank">
      <img src="https://user-images.githubusercontent.com/56480356/231735744-9f8faf71-b843-42b5-b36f-bd7792406070.png" style="border-radius: 100px; filter: grayscale(100);" width="96px" height="96px"/>
   </a>
   <a href="https://github.com/UO277414" target="_blank">
      <img src="https://user-images.githubusercontent.com/56480356/231735775-76ef4b6c-72e3-42c5-92b6-d56d566e7deb.png" style="border-radius: 100px; filter: grayscale(100);" width="96px" height="96px"/>
   </a>
   <a href="https://github.com/RichardPix12" target="_blank">
      <img src="https://user-images.githubusercontent.com/56480356/231735801-1d65a1da-723d-4771-96fb-0d65f431d8db.png" style="border-radius: 100px; filter: grayscale(100);" width="96px" height="96px"/>
   </a>
   <a href="https://github.com/UO271572" target="_blank">
      <img src="https://user-images.githubusercontent.com/56480356/231734815-6411d057-8fd7-41ff-8419-b75a1bd741ad.png" style="border-radius: 100px" width="96px" height="96px"/>
   </a>
</div>


