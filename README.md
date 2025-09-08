
# Skandia Front-End

Aplicación Angular para la gestión de productos financieros y objetivos, con carrusel de productos y diseño responsivo usando Angular Material.

## Requisitos
- Node.js >= Ultima versión
- Angular CLI >= Ultima versión

## Instalación

Se debe tener instalado el Node.js de anterioridad y el Angular CLI, ya con ellos instalados haremos un 
npm install para descargar todos los modulos del proyecto
```bash
npm install
```

## Ejecución en desarrollo

```bash
ng serve -o
```

La aplicación estará disponible en `http://localhost:4200`.

## Pruebas unitarias

```bash
npm test
```

## Estructura del proyecto

- `src/app/pages/` — Vistas principales (home, carousel, etc.)
- `src/app/services/` — Servicios para consumo de APIs
- `src/app/layout/` — Header y Footer
- `src/app/shared-material/` — Módulo de Angular Material compartido

## Manejo de errores
- Los servicios usan manejo de errores y muestran mensajes amigables en la UI.
- Las pruebas unitarias cubren casos de éxito y error.

## Buenas prácticas
- Código limpio, legible y documentado.
- Uso de SASS y Angular Material para una UI moderna.
- Estructura modular y escalable.

## Contacto
Para dudas o soporte, contacta a [juanka970129@gmail.com].
