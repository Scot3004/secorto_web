# Scot3004

Página personal de presentación de Sergio C. Orozco Torres

## Motivación

Practicar el desarrollo front-end para fortalecer habilidades y tener una plantilla base en caso que requiera iniciar otro desarrollo similar

## Objetivos

### Objetivo General

Desarrollar un sitio web informativo que demuestre los conocimientos y habilidades en desarrollo web de Sergio Orozco Torres

### Objetivos específicos

- Página de presentación como desarrollador
- Desarrollar blog de las cosas aprendidas

## Scripts Incluidos

### Instalación

```bash
yarn install
```

### Ejecutar server para desarrollo

```bash
yarn develop
```

### Actualizar browser list

```bash
npx browserslist@latest --update-db
```

**Abre tu editor de código y empieza a programar!**

El sitio web ahora está corriendo en la ruta `http://localhost:8000`!

Nota: Puedes usar graphiql ingresando a`http://localhost:8000/___graphql`.
Si quieres aprender a usarlo, revisa este [tutorial de gatsby](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)

## 🧐 Como está organizado este proyecto?

Esta es una vista rapida del primer nivel de directorio que veras en este proyecto
    ├── content
    ├── src
    ├── node_modules
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1. **`/content`**: En este directorio están almacenados los contenidos de mi página web

2. **`/src`**: En este directorio está el código fuente del proyecto, entre ellas las paginas (src/pages) y todos los componentes usados de forma auxiliar

3. **`/node_modules`**: Este directorio contiene todos los modulos de los que tu proyecto depende (paquetes npm) y son automaticamente instalados.

4. **`.gitignore`**: Este archivo especifica los archivos y directorios que no se deben cargar en git

5. **`.prettierrc`**: Este es el archivo de configuración de prettier [Prettier](https://prettier.io/).

6. **`gatsby-browser.js`**: Este archivo especifica como gatsby se comportara en el navegador, puedes leer el articulo [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) para mas detalles al respecto.

7. **`gatsby-config.js`**: Este es el archivo de configuración donde se almacenan los datos sobre el sitio (meta-datos), adicionalmente la configuración de plugins, para mas información lee la [Documentación de este archivo](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

8. **`gatsby-node.js`**: En este archivo se agregan las personalizaciones del proceso de construcción del sitio, puedes leer la documentación sobre [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) para mas detalles al respecto.

9. **`gatsby-ssr.js`**: En este archivo se espera encontrar las configuraciones de [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/).

10. **`LICENSE`**: Aca encuentras los terminos de licencia del código que estás viendo

11. **`package.json`**: Es un manifiesto para los proyectos hechos con Node.js, que incluye cosas como los meta-datos (como el nombre del proyecto, autor, etc) con este archivo es que node sabe que paquetes instalar.

12. **`yarn.lock`** Este es un archivo auto-generado por yarn que incluye las versiones exactas de los paquetes npm. **(Este archivo no deberias modificarlo manualmente).**

13. **`README.md`**: Este, el archivo que estás leyendo pose información relevante sobre como se configura, como se corre y demas, todo proyecto git deberia tener uno bien documentado

## Enlaces útiles

Este blog ha sido posible gracias a una serie de herramientas y utilitarios que han facilitado la labor de su desarrollo

### Tecnologias

- [Yarn](https://yarnpkg.com/)
- [NPM](https://www.npmjs.com/)
- [GIT](https://git-scm.com)
- [Gatsby](https://www.gatsbyjs.org/)

### Servidores

- [Github](https://github.com)
- [Netlify](https://www.netlify.com/)

### Linters

- [ESLint](http://eslint.org/)

## Copyright y licencia

Copyright 2021 Scot3004. Este codigo es lanzado bajo licencia [MIT](LICENSE)
