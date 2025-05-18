# 🧩 Aplicación Web Modular con Web Components

Este proyecto es una aplicación web desarrollada exclusivamente con **JavaScript nativo** y utilizando **Web Components (Custom Elements)**. Tiene como objetivo permitir el registro, visualización, edición y eliminación de productos, almacenando los datos en memoria mediante un array de objetos JavaScript.

## 🎯 Objetivo General

Crear una aplicación modular que:

- Permita la gestión de productos (Registrar, Ver, Editar, Eliminar).
- Use un menú de navegación dinámico.
- Encapsule el estilo y lógica en componentes usando Shadow DOM.
- Use eventos personalizados para la comunicación entre componentes.

---

## 🛠️ Estructura de Componentes

### 1. `<menu-navegacion>`
- Menú horizontal con enlaces:
  - **Inicio**
  - **Gestión Productos**
  - **Acerca de**
- Permite navegar entre las secciones mediante eventos personalizados.
- "Acerca de" muestra los integrantes del equipo.

### 2. `<registro-producto>`
- Formulario con los siguientes campos:
  - Nombre (texto)
  - Precio (número)
  - Cantidad (número)
  - Descripción (texto)
- Valida que los campos no estén vacíos y que los valores numéricos sean válidos.
- Al hacer clic en **Registrar**, el producto se guarda en un **array global**.

### 3. `<lista-productos>`
- Muestra todos los productos registrados en una tabla o lista.
- Cada producto tiene botones:
  - **Editar**
  - **Eliminar**

### 4. `<editar-producto>`
- Recibe como atributo el ID del producto a editar.
- Muestra un formulario precargado con los datos del producto seleccionado.
- Permite actualizar los valores del producto en el array global.

### 5. `<footer-app>`
- Texto fijo: `© 2025 Todos los derechos reservados.`
- Contiene enlaces a dos redes sociales (ej: GitHub y LinkedIn).
- Estilo encapsulado con CSS.

---

## 🔧 Requisitos Técnicos

- ✅ Todos los componentes usan **Shadow DOM** para encapsular estructura y estilo.
- ✅ Cada componente implementa el método `render()` para generar el HTML dinámico.
- ✅ Uso del ciclo de vida `connectedCallback()` para inicializar la vista.
- ✅ Estado gestionado mediante un **array global** de productos en memoria.
- ✅ Todos los métodos internos se implementan usando **arrow functions**.
- ✅ Comunicación entre componentes mediante **eventos personalizados**.
- ✅ No se utiliza ninguna librería externa (solo JavaScript puro).
- ✅ Estilo encapsulado por componente usando CSS.

---

## 🧑‍💻 Equipo de Desarrollo

- **Cesar Arico**
- **Alan Herrera**
- **Josue Zambrano**

📘 **NRC**: 21602 - PROGRAM INTEGRATIVA DE COMPONE  
🏫 **Universidad de las Fuerzas Armadas ESPE**

---

## 📁 Estructura del Proyecto

# 🧩 Aplicación Web Modular con Web Components

Este proyecto es una aplicación web desarrollada exclusivamente con **JavaScript nativo** y utilizando **Web Components (Custom Elements)**. Tiene como objetivo permitir el registro, visualización, edición y eliminación de productos, almacenando los datos en memoria mediante un array de objetos JavaScript.

## 🎯 Objetivo General

Crear una aplicación modular que:

- Permita la gestión de productos (Registrar, Ver, Editar, Eliminar).
- Use un menú de navegación dinámico.
- Encapsule el estilo y lógica en componentes usando Shadow DOM.
- Use eventos personalizados para la comunicación entre componentes.

---

## 🛠️ Estructura de Componentes

### 1. `<menu-navegacion>`
- Menú horizontal con enlaces:
  - **Inicio**
  - **Gestión Productos**
  - **Acerca de**
- Permite navegar entre las secciones mediante eventos personalizados.
- "Acerca de" muestra los integrantes del equipo.

### 2. `<registro-producto>`
- Formulario con los siguientes campos:
  - Nombre (texto)
  - Precio (número)
  - Cantidad (número)
  - Descripción (texto)
- Valida que los campos no estén vacíos y que los valores numéricos sean válidos.
- Al hacer clic en **Registrar**, el producto se guarda en un **array global**.

### 3. `<lista-productos>`
- Muestra todos los productos registrados en una tabla o lista.
- Cada producto tiene botones:
  - **Editar**
  - **Eliminar**

### 4. `<editar-producto>`
- Recibe como atributo el ID del producto a editar.
- Muestra un formulario precargado con los datos del producto seleccionado.
- Permite actualizar los valores del producto en el array global.

### 5. `<footer-app>`
- Texto fijo: `© 2025 Todos los derechos reservados.`
- Contiene enlaces a dos redes sociales (ej: GitHub y LinkedIn).
- Estilo encapsulado con CSS.

---

## 🔧 Requisitos Técnicos

- ✅ Todos los componentes usan **Shadow DOM** para encapsular estructura y estilo.
- ✅ Cada componente implementa el método `render()` para generar el HTML dinámico.
- ✅ Uso del ciclo de vida `connectedCallback()` para inicializar la vista.
- ✅ Estado gestionado mediante un **array global** de productos en memoria.
- ✅ Todos los métodos internos se implementan usando **arrow functions**.
- ✅ Comunicación entre componentes mediante **eventos personalizados**.
- ✅ No se utiliza ninguna librería externa (solo JavaScript puro).
- ✅ Estilo encapsulado por componente usando CSS.

---

## 🧑‍💻 Equipo de Desarrollo

- **Cesar Arico**
- **Alan Herrera**
- **Josue Zambrano**

📘 **NRC**: 21602 - PROGRAM INTEGRATIVA DE COMPONE  
🏫 **Universidad de las Fuerzas Armadas ESPE**

---

## 📁 Estructura del Proyecto

