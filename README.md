# 🚀 Angular 19 + Angular Three + Anime.js - Starter Guide

Este proyecto está configurado para crear una SPA moderna e inmersiva usando:

- Angular 19 Standalone Components
- Angular Three (renderizado 3D declarativo)
- Three.js (motor 3D)
- ngxtension (reactividad moderna)
- Anime.js (animaciones suaves)

---

## 📅 Requisitos Previos

- Node.js v18 o superior
- Angular CLI v19

---

## ✨ Instalación Rápida

```bash
# Instalar Angular CLI 19
npm install -g @angular/cli@19

# Crear nuevo proyecto
ng new my-angular-three-app --routing --style=scss --standalone

cd my-angular-three-app

# Instalar dependencias principales
npm install three@0.172.0 angular-three ngxtension animejs
```

---

## 🔧 Configuración Inicial del Proyecto

### 1. Canvas 3D básico

Importar el Canvas desde `angular-three/dom`:

```ts
import { NgtCanvas } from "angular-three/dom";
```

Usarlo en el template:

```html
<ngt-canvas [scene]="{ background: backgroundColor }">
  <!-- objetos 3D irán aquí -->
</ngt-canvas>
```

### 2. Definir el color de fondo del Canvas

En el componente `.ts`:

```ts
import { Color } from "three";

export class HomeComponent {
  backgroundColor = new Color("#121212");
}
```

✅ Recuerda: **background debe ser una instancia de `THREE.Color`**, no un string.

---

## 🔥 Consideraciones importantes

### Hidratación

- Si no estás usando Server-Side Rendering (SSR) en tu proyecto Angular, **no debes activar la hidratación** (`provideClientHydration`).
- Mantén una SPA normal para evitar errores de `hydration info missing`.

### Versiones correctas de Three.js

- Angular Three **v3.7.2** es compatible con **Three.js hasta la versión 0.172.x**.
- **No uses Three.js 0.173.0 o superiores**, ya que romperá compatibilidad.

### Errores comunes y soluciones

| Error encontrado                                | Solución                                                               |
| ----------------------------------------------- | ---------------------------------------------------------------------- |
| `No se encuentra el módulo "angular-three/dom"` | Asegúrate de instalar `angular-three`, no `angular-three-plugin`.      |
| `ERESOLVE unable to resolve dependency tree`    | Instala la versión correcta de Three.js (`npm install three@0.172.0`). |
| `Unexpected state: no hydration info available` | No usar hidratación si no tienes SSR.                                  |

✅ Siempre confirma versiones compatibles antes de instalar.

---

## 🔒 Puntos Críticos y Buenas Prácticas

| Tema                      | Qué hacer                                                      | Qué evitar                                   |
| ------------------------- | -------------------------------------------------------------- | -------------------------------------------- |
| Versiones                 | Asegúrate de usar Angular 19 + Three.js 0.172.0                | No usar Three 0.173.0 (conflicto)            |
| ngxtension                | Instalar siempre con Angular Three                             | No olvidarlo, es obligatorio                 |
| Color de fondo del canvas | Usar `new Color('#xxxxxx')`                                    | No usar strings directos                     |
| Estructura de imports     | Importar de `angular-three/dom`                                | No inventar rutas inexistentes               |
| NPM Error `ERESOLVE`      | Corrige versiones o usa `--legacy-peer-deps` sólo para pruebas | No forzar instalaciones en proyectos finales |

---

## 🌈 Animaciones extra con Anime.js

Anime.js está instalado y listo para usar:

```ts
import anime from "animejs/lib/anime.es.js";

anime({
  targets: ".custom-title",
  translateY: [-50, 0],
  opacity: [0, 1],
  duration: 1500,
  easing: "easeOutExpo",
});
```

---

## 🔗 Enlaces útiles

- Documentación oficial Angular Three: [https://angularthree.org](https://angularthree.org)
- Documentación de instalación Angular Three: [https://angularthree.org/core/getting-started/installation/](https://angularthree.org/core/getting-started/installation/)
- Documentación oficial Anime.js: [https://animejs.dev](https://animejs.dev)
- Documentación oficial Three.js: [https://threejs.org/docs/](https://threejs.org/docs/)

---

## 🚀 Estado del proyecto

✅ Preparado para crear escenas 3D declarativas.

✅ Listo para animaciones de objetos y de interfaz.

✅ Compatible completamente con Angular 19 standalone components.

---

## 🌟 ¡Disfruta creando experiencias web inmersivas! 🌌
