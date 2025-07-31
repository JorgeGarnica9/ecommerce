# Proyecto Final Desarrollo de aplicaciones - Comisión 74035
## E-commerce / Jorge Garnica

Este proyecto es una aplicación mobile de un e-commerce desarrollada como parte del curso de Desarrollo de aplicaciones de Coderhouse. La aplicación permite a los usuarios navegar, filtrar productos, ver detalles específicos de cada artículo, agregar productos al carrito y generar una orden de pedido. La aplicación cuenta con servicios funcionales de registro y login de usuarios, siendo este último una condición necesaria para acceder al contenido. Permite también la persistencia de datos utilizando Firebase y SqLite.

## Características

- **Navegación de productos:** Los usuarios pueden explorar todos los productos a la venta que se encuentran filtrados por categoría. La sección de productos cuenta con un buscador de productos en particular completamente funcional.
- **Vista de detalle:** Cada producto cuenta con la opción de acceder a una vista detallada del mismo, donde el usuario puede elegir la cantidad deseada y añadir el producto al carrito.
- **Carrito de compras:** Los usuarios pueden ver los productos agregados al carrito, eliminar productos individualmente o generar la orden de compra.
- **Checkout:** En el checkout, los usuarios deberán ingresar su información personal (nombre, correo electrónico y teléfono) para generar una orden de compra.
- **Confirmación de pedido:** Al completar el checkout, se genera una orden y se muestra una alerta de confirmación.
- **Persistencia de datos:** Los productos y las órdenes de compra se almacenan en Firestore, una base de datos en la nube proporcionada por Firebase.

## Tecnologías utilizadas

- **[React](https://es.react.dev/):** Biblioteca principal utilizada para construir la interfaz de usuario.
- **React Router DOM:** Para la navegación entre rutas de la aplicación.
- **[Toastify](https://www.npmjs.com/package/react-toastify):** Para mostrar notificaciones cuando los productos se agregan al carrito.
- **[SweetAlert](https://sweetalert2.github.io/):** Para mostrar una confirmación de la orden de pedido generada.
- **[Firebase/Firestore](https://firebase.google.com/?hl=es-419):** Para la gestión de la base de datos donde se guardan los productos y las órdenes de compra.
- **[MUI Material](https://mui.com/material-ui/):** De aquí se obtiene el loader que se muestra mientras se cargan los datos.

## Versiones de las dependencias
    
    "@emotion/react": "^11.13.3",
    "@emotion/styled": "^11.13.0",
    "@mui/material": "^6.1.5",
    "firebase": "^10.14.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.53.1",
    "react-router-dom": "^6.26.2",
    "react-toastify": "^10.0.6",
    "sweetalert": "^2.1.2"

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/JorgeGarnica9/entrega-final-reactjs.git

2. Navega al directorio del proyecto:
   ```bash   
   cd entrega-final

3. Instala las dependencias:
   ```bash
   npm install

4. Configura Firebase:
- Crea un proyecto en Firebase y habilita Firestore.
- Agrega tu configuración de Firebase en un archivo .env en la raíz del proyecto:
    ```bash
    REACT_APP_FIREBASE_API_KEY=tu-api-key
    REACT_APP_FIREBASE_AUTH_DOMAIN=tu-auth-domain
    REACT_APP_FIREBASE_PROJECT_ID=tu-project-id
    REACT_APP_FIREBASE_STORAGE_BUCKET=tu-storage-bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=tu-sender-id
    REACT_APP_FIREBASE_APP_ID=tu-app-id

 5. Inicia la aplicación:
    ```bash
    npm start

## Uso
- **Navegar productos:** Accede a la página principal para ver y filtrar productos por categorías.
- **Ver detalles del producto:** Haz clic en el botón 'ver más' en cualquier producto para acceder a su vista de detalle.
- **Agregar al carrito:** Elige la cantidad deseada y agrégala al carrito de compras.
- **Ver carrito:** Haz clic en el ícono del carrito (CartWidget) para ver los productos agregados, eliminarlos o proceder al checkout.
- **Checkout:** Completa el formulario de datos personales y genera la orden de pedido.

## Contribución
Este proyecto es parte de un curso y no está abierto a contribuciones externas. Sin embargo, cualquier sugerencia o comentario es bienvenido.
