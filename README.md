# WebLab — Tu primera web, paso a paso

**v0.1 · 1.º DAM · Lenguajes de Marcas y Sistemas de Gestión de Información (LMSGI)**

WebLab es un minicurso multipágina sobre cómo crear una web con **HTML, CSS y JavaScript vainilla**. El propio sitio sirve como ejemplo que el alumnado puede leer, modificar y versionar con Git. Esta primera versión es deliberadamente pequeña: seis páginas, una hoja de estilos compartida, un script común y recursos locales.

No necesita frameworks, paquetes, compilación, cuenta de usuario ni conexión a Internet para leer las lecciones. Los enlaces a documentación externa sí necesitan conexión. No incluye servidor, envío de formularios ni almacenamiento de datos.

![Las tres capas de una web: HTML, CSS y JavaScript](img/web-stack.svg)

## Objetivos de aprendizaje

- Crear documentos HTML con estructura semántica y jerarquía de títulos.
- Enlazar páginas y recursos mediante rutas relativas.
- Aplicar una hoja CSS común, entender el modelo de caja y practicar Flexbox y Grid.
- Adaptar el diseño a diferentes tamaños y usar el teclado para navegar.
- Seleccionar elementos del DOM y responder a eventos con JavaScript.
- Distinguir Git de GitHub y trabajar con commits, ramas, merges y pull requests.
- Documentar un proyecto usando Markdown y un README.

Es material introductorio, pensado para acompañar la explicación y las prácticas del docente. No pretende cubrir todo el currículo ni sustituir una referencia técnica completa.

## Tecnologías

| Tecnología | Uso |
| --- | --- |
| HTML | Contenido, estructura semántica, navegación y actividades |
| CSS | Colores, tipografía, modelo de caja, Flexbox, Grid y media queries |
| JavaScript vainilla | Eventos, cambios en el DOM y variables CSS |
| SVG | Dos diagramas didácticos locales y un favicon |
| Markdown | Documentación del repositorio |
| Git / GitHub | Versionado y colaboración propuestos para el aula |

La web usa fuentes del sistema. No contiene CDN, bibliotecas externas, analítica ni solicitudes a servicios externos durante la navegación local.

## Estructura

```text
weblab/
├── index.html
├── html.html
├── css.html
├── javascript.html
├── git-github.html
├── proyecto.html
├── README.md
├── LICENSE
├── .gitignore
├── css/
│   └── estilos.css
├── js/
│   └── app.js
└── img/
    ├── favicon.svg
    ├── web-stack.svg
    └── box-model.svg
```

Todos los HTML están al mismo nivel. Por ejemplo, `href="css.html"` enlaza otra página y `src="img/web-stack.svg"` carga una imagen. Si añades subcarpetas, revisa las rutas relativas. Usa nombres en minúsculas, sin espacios y coherentes: los servidores pueden distinguir mayúsculas y minúsculas.

## Páginas y funcionalidades

| Página | Contenido y práctica |
| --- | --- |
| [Inicio](index.html) | Presentación, capas de una web y recorrido por las lecciones |
| [HTML](html.html) | Documento base, semántica, enlaces, imágenes, listas y formularios; añadir objetivos |
| [CSS](css.html) | Selectores, modelo de caja y diseño responsive; ajustar el padding con un control |
| [JavaScript](javascript.html) | Variables, DOM, eventos y depuración; botón de saludo y actividad de restablecimiento |
| [Git / GitHub](git-github.html) | Diferencias, staging, commits, remoto, comandos, ramas, merge, conflictos y pull requests |
| [Proyecto final](proyecto.html) | Reto, plan de trabajo, lista interactiva de revisión y criterios de entrega |

Las lecciones tienen índice interno, ejemplos de código y una actividad con pista desplegable. El menú se repite explícitamente en cada HTML para que sea fácil entenderlo y funcione sin JavaScript. Si se añade una página, hay que actualizar el menú de las seis páginas.

## Cómo ejecutarlo

### Opción sencilla

1. Descarga y descomprime el ZIP, o clona el repositorio.
2. Abre la carpeta `weblab` en tu editor.
3. Abre `index.html` en un navegador moderno.
4. Edita un archivo, guarda y recarga para ver el resultado.

Todas las páginas e interacciones funcionan con `file://`; no utilizan módulos ni `fetch`. Git solo es necesario para practicar el versionado, no para abrir la web.

### Servidor local opcional

Si tienes Python instalado, abre una terminal **dentro de `weblab`**:

```sh
python -m http.server 8000
```

Visita [http://localhost:8000](http://localhost:8000). Para detenerlo, pulsa `Ctrl+C` en la terminal. También puedes usar una extensión de servidor local de tu editor. No es necesario instalar dependencias del proyecto.

## Accesibilidad y adaptación

- Idioma español declarado, metadatos y un título distinto por página.
- Regiones semánticas y enlace «Saltar al contenido».
- Menú con `aria-current="page"` para identificar la página activa.
- Foco visible, controles con etiquetas y botones nativos accesibles por teclado.
- Textos alternativos y dimensiones declaradas en las imágenes.
- Cambios de mensaje anunciados con `aria-live="polite"`.
- Navegación adaptable, tarjetas que pasan a una columna y código con desplazamiento propio.
- Respeto a la preferencia de movimiento reducido y estilos básicos para impresión.

Estas son medidas básicas; no constituyen una auditoría completa de accesibilidad. Comprueba el proyecto con teclado, zoom al 200 % y, cuando sea posible, un lector de pantalla.

## Uso didáctico sugerido

1. **Explorar:** recorrer el sitio y localizar en el código la estructura y las rutas.
2. **Modificar HTML:** añadir una sección de objetivos, comprobarla y guardar un commit.
3. **Aplicar CSS:** estilizar esa sección y comparar escritorio y móvil.
4. **Añadir un evento:** completar el botón de restablecimiento propuesto en JavaScript.
5. **Colaborar:** crear una rama por mejora, publicarla y revisar un pull request en parejas.
6. **Entregar:** adaptar el proyecto a un tema propio y justificar un commit del historial.

Trabaja con cambios pequeños y mensajes concretos: `Añade objetivos de aprendizaje` o `Ajusta tarjetas en móvil`. Antes de confirmar, comprueba la web y revisa `git diff --staged`.

Los controles de la lista final son una ayuda de revisión: cuentan los elementos marcados, **no verifican automáticamente** la calidad del proyecto. Su estado no se persiste y se reinicia al recargar. Las pistas usan `<details>` y funcionan sin JavaScript.

## Preparar Git y subir a GitHub

El ZIP entrega los archivos, **sin carpeta `.git`, commits ni tags precreados**. Así cada clase puede crear su historial real. El código de esta entrega ya contiene la base completa solicitada para v0.1; los siguientes commits deben registrar mejoras reales, sin simular un historial anterior.

### 1. Identidad y primer commit

Instala Git. Si aún no tienes configurada tu identidad, usa tus datos (puedes usar el correo privado que ofrece GitHub):

```sh
git config --global user.name "Tu nombre"
git config --global user.email "tu-correo@example.com"
```

Dentro de la carpeta `weblab`, que será la raíz del repositorio:

```sh
git init -b main
git status
git add .
git diff --staged
git commit -m "Crea WebLab v0.1: base del minicurso"
git tag -a v0.1 -m "Primera versión didáctica"
```

`.gitignore` excluye temporales, configuraciones locales, ZIP, dependencias y archivos `.env`. Revisa siempre lo que se va a añadir. No incluyas credenciales o datos personales del alumnado.

### 2. Crear el remoto y publicar

Crea en GitHub un repositorio **vacío**, sin generar README, `.gitignore` o licencia. Ya están en esta carpeta. Sustituye `TU-USUARIO` y el nombre del repositorio en esta URL de ejemplo:

```sh
git remote add origin https://github.com/TU-USUARIO/weblab.git
git remote -v
git push -u origin main
git push origin v0.1
```

Autentícate con un gestor de credenciales compatible o un token según la configuración de tu cuenta. La contraseña de la cuenta no se usa para operaciones Git por HTTPS. Si ya tienes un remoto o un historial distinto, revisa `git remote -v` y `git log --oneline` antes de seguir; no fuerces un push para reemplazar trabajo existente.

Si partes de un repositorio ya publicado, usa `git clone URL` y entra en la carpeta descargada. No necesitas volver a iniciarlo ni añadir `origin`.

### 3. Una mejora en una rama

```sh
git switch -c mejora/objetivos
# Añade la sección propuesta y comprueba la web.
git status
git add html.html
git diff --staged
git commit -m "Añade objetivos de aprendizaje en HTML"
git push -u origin mejora/objetivos
```

En GitHub, abre un pull request con base `main` y comparación `mejora/objetivos`. Describe el cambio y cómo lo comprobaste. Tras la revisión y el merge en GitHub:

```sh
git switch main
git pull --ff-only
```

`--ff-only` evita crear merges inesperados al actualizar. Si las ramas divergen, revisa el historial antes de decidir cómo integrarlas.

Para practicar un merge **local** en lugar de un pull request, sitúate en `main` y ejecuta `git merge mejora/objetivos`. Si hay conflictos, revisa `git status`, edita el contenido final, elimina los marcadores, prueba el sitio y finaliza con `git add archivo.html` y `git commit`. Para cancelar un merge en curso, `git merge --abort`. Haz el ejercicio de conflictos en una copia de práctica.

### 4. Publicar la web con GitHub Pages (opcional)

Una vez subidos los archivos en la raíz del repositorio:

1. Entra en **Settings → Pages**.
2. Selecciona **Deploy from a branch** como fuente.
3. Elige la rama `main` y la carpeta `/(root)`; guarda.
4. Espera a que finalice la publicación y abre la URL que muestra GitHub.

Para un repositorio de proyecto suele tener la forma `https://TU-USUARIO.github.io/weblab/`. Las rutas relativas de WebLab permiten servirlo bajo ese subdirectorio. La disponibilidad de Pages depende de la configuración y del plan de tu cuenta; consulta la documentación oficial enlazada abajo. No necesitas un proceso de compilación.

## Plan de evolución

| Versión propuesta | Mejora real | Aprendizaje con Git |
| --- | --- | --- |
| **v0.1** | Base multipágina, lecciones breves, estilos comunes e interacciones pequeñas | Primer commit, remoto y tag |
| **v0.2** | Ampliar las actividades HTML y añadir una página de recursos | Commits por contenido y revisión de diferencias |
| **v0.3** | Mejorar el diseño responsive y probar teclado y zoom | Rama `mejora/responsive` y pull request |
| **v0.4** | Añadir un pequeño cuestionario con explicación de respuestas | Rama de funcionalidad y revisión del JavaScript |
| **v0.5** | Ampliar las prácticas colaborativas y los créditos | Issues, merge y conflicto controlado |
| **v1.0** | Revisar todo el curso y preparar una entrega estable | Tag anotado y release con notas |

Son propuestas, no funcionalidades ya implementadas. Tras cada versión comprobada, etiqueta el commit que corresponda: por ejemplo, `git tag -a v0.2 -m "Amplía actividades HTML"` y `git push origin v0.2`. Un tag es una referencia a un commit; una release de GitHub puede añadir notas y archivos de entrega a ese tag.

## Revisión antes de cada entrega

- Abre las seis páginas y verifica el menú, enlaces internos y enlaces anterior/siguiente.
- Revisa que se carguen CSS, JS y las tres imágenes locales.
- Prueba escritorio y móvil; usa zoom al 200 % y navega con Tab y Enter.
- Mueve el control CSS, pulsa «Saludar» y marca la lista del proyecto.
- Comprueba la consola y los fragmentos de código tras cada modificación.
- Desactiva JavaScript: el curso, los enlaces y las pistas deben seguir funcionando.
- Comprueba que el README y la versión del pie reflejen la nueva entrega.

La entrega inicial se revisa en local para rutas relativas, fragmentos, recursos y sintaxis JavaScript. El despliegue en tu cuenta GitHub se comprueba después de publicar.

## Fuentes y ampliación

- [Documentación de Git](https://git-scm.com/docs): referencia de comandos.
- [Manual de Git](https://git-scm.com/docs/user-manual): ramas, integración y conflictos.
- [Pull requests en GitHub](https://docs.github.com/en/pull-requests): colaboración y revisión.
- [Configurar la publicación de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
- [MDN: aprender desarrollo web](https://developer.mozilla.org/es/docs/Learn_web_development): ampliación sobre HTML, CSS y JavaScript.

## Autoría, créditos y licencia

Proyecto base preparado con asistencia de IA para uso docente en LMSGI. Los diagramas SVG y el favicon se han creado para este proyecto; no se incluyen fotografías o fuentes de terceros. El docente y el alumnado pueden añadir sus nombres a los créditos al adaptar el material, según sus preferencias de publicación.

El código, los textos originales y los SVG de esta entrega se distribuyen bajo [licencia MIT](LICENSE). Las páginas externas conservan sus propias condiciones de uso. Si incorporas nuevos recursos, documenta su autoría, origen y licencia.
