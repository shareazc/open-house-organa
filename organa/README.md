# Organa

![leia-organa](https://cdn3.movieweb.com/i/article/O0m8u4sbGThx14jjeuuDUsegz6cXhJ/798:50/Star-Wars-8-Princess-Leia-Carrie-Fisher-Scenes.jpg)

En Laboratoria estamos buscando una manera eficiente de enterarnos quienes asistieron al área de trabajo cada día. Hasta ahora se ha llevado una asistencia manual pero sabemos que toma tiempo valioso.

La idea de este proyecto es solucionar el registro de asistencia con una aplicación web.

La solución que proponemos consiste en usar una webcam para leer [códigos QR](https://es.wikipedia.org/wiki/C%C3%B3digo_QR) que indetifiquen a cada estudiante que va llegando y se almacene en una base de datos por día.

Como primera iteración consideramos que pueda guardar la asistencia y pueda mostrar en una interface cuántas estudiantes asistieron ese día y cuantas inasistencias hubieron.

El listado de estudiantes puede ser indicado desde un JSON o haciendo un fetch a `https://laboratoria-la.firebaseapp.com/cohorts/gdl-2019-01-bc-core-gdl-002/users`.


## ¿Por qué el nombre Organa?

Leia Organa es la general de la resistencia en el universo de Star Wars, nos gusta pensar que está muy pendiente de los intergrantes de su equipo!
