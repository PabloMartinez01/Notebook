# Markdown Notebook
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Kotlin](https://img.shields.io/badge/Kotlin-0095D5?style=for-the-badge&logo=kotlin&logoColor=white)](https://kotlinlang.org/)
[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)](https://daringfireball.net/projects/markdown/)

## 📝 Introducción

**Markdown Notebook** es una aplicación web diseñada para tomar notas en formato Markdown de manera rápida, sencilla y moderna.

Está compuesta por un backend en **Spring Boot con Kotlin** y un frontend en **Angular**, integrando un editor de texto en tiempo real con soporte completo para Markdown.

El objetivo principal es ofrecer una experiencia ligera y enfocada para la creación y visualización de notas, tanto para uso personal como profesional.

## 🚀 Características

- 🖋️ **Editor Markdown en tiempo real:** edita y visualiza tus notas al instante, con renderizado en vivo.
- 📚 **Gestión de notas:** crea, edita, elimina y organiza tus notas en una interfaz intuitiva.
- 💾 **Persistencia automática:** las notas se guardan automáticamente en **MongoDB**.
- 🌐 **UI moderna:** construida con **Tailwind CSS** para una experiencia rápida y agradable.

## 🛠️ Tecnologías utilizadas

- **Spring Boot + Kotlin:** desarrollo backend.
- **Angular + TypeScript:** frontend reactivo y modular.
- **MongoDB:** base de datos NoSQL para la persistencia de documentos.
- **Tailwind CSS:** estilos utilitarios para una interfaz limpia y responsive.
- **Markdown:** formato estándar para escribir notas con estilo.

## 📦 Estructura del proyecto

| Módulo       | Descripción                              |
|--------------|------------------------------------------|
| `notebook-backend`   | Backend con Spring Boot + Kotlin (API REST) |
| `notebook-frontend`   | Frontend Angular con editor Markdown        |


## ⚙️ Requisitos del proyecto
Para ejecutar correctamente la aplicación Markdown Notebook, asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:

### 🖥️ Backend (Spring Boot + Kotlin)

- **Java JDK** `21`
- **Kotlin** `1.9.25`
- **Apache Maven** `3.9+` (o compatible con Kotlin y Spring Boot)
- **MongoDB** `6.x` o superior (en ejecución local o en la nube)

### 🌐 Frontend (Angular)

- **Node.js** `>=18.x` recomendado
- **npm** `>=9.x`
- **Angular CLI** `^19.2.0`
- **TypeScript** `~5.4.x`
- **Tailwind CSS** `^4.1.7`
- **RxJS** `~7.8.0`
- **Zone.js** `~0.15.0`

### 📦 Dependencias destacadas

- `marked`, `highlight.js`, `prismjs`: renderizado y resaltado de código Markdown
- `ngx-markdown`, `ngx-monaco-editor-v2`: edición avanzada y vista previa en tiempo real
- `@ctrl/ngx-emoji-mart`: selector de emojis para enriquecer las notas
- `github-markdown-css`, `monaco-themes`: temas visuales para una apariencia consistente

---



