# Proyecto Final Desarrollo de aplicaciones - Comisión 74035
## E-commerce / Jorge Garnica

Este proyecto es una aplicación mobile de un e-commerce desarrollada como parte del curso de Desarrollo de aplicaciones de Coderhouse. La aplicación permite a los usuarios navegar, filtrar productos, ver detalles específicos de cada artículo, agregar productos al carrito y generar una orden de pedido. La aplicación cuenta con servicios funcionales de registro y login de usuarios, siendo este último una condición necesaria para acceder al contenido. Permite también la persistencia de datos utilizando Firebase y SqLite.

## Características

- **Navegación de productos:** Los usuarios pueden explorar todos los productos a la venta que se encuentran filtrados por categoría. La sección de productos cuenta con un buscador de productos en particular completamente funcional.
- **Vista de detalle:** Cada producto cuenta con la opción de acceder a una vista detallada del mismo, donde el usuario puede elegir la cantidad deseada y añadir el producto al carrito.
- **Carrito de compras:** Los usuarios pueden ver los productos agregados al carrito o eliminar productos individualmente.
- **Checkout:** En el checkout aún está en desarrollo, todavía no se pueden generar las órdenes de compra.
- **Persistencia de datos:** Los productos y las categorías se almacenan en Realtime Database, una base de datos en la nube proporcionada por Firebase. Los datos de usuarios se almacenan en una base de datos generada mediante SQLite.

## Tecnologías utilizadas

- **[React Native](https://reactnative.dev/):** Biblioteca principal utilizada para construir la interfaz de usuario.
- **React Navigation:** Para la navegación entre rutas de la aplicación.
- **[React Native Toast Message](https://www.npmjs.com/package/react-native-toast-message):** Para mostrar notificaciones en toda la aplicación.
- **[Firebase/Realtime Database](https://console.firebase.google.com/):** Para la gestión de la base de datos donde se guardan los productos y las órdenes de compra.
- **[React Native Vector Icons](https://oblador.github.io/react-native-vector-icons/):** De aquí se obtienen los iconos mostrados en la aplicación.

## Versiones de las dependencias
    
    "@react-navigation/bottom-tabs": "^7.4.2",
    "@react-navigation/native": "^7.1.14",
    "@react-navigation/native-stack": "^7.3.21",
    "@reduxjs/toolkit": "^2.8.2",
    "expo": "~53.0.17",
    "expo-font": "~13.3.2",
    "expo-image-picker": "~16.1.4",
    "expo-location": "~18.1.6",
    "expo-splash-screen": "~0.30.10",
    "expo-status-bar": "~2.2.3",
    "react": "19.0.0",
    "react-native": "0.79.5",
    "react-native-maps": "1.20.1",
    "react-native-safe-area-context": "5.4.0",
    "react-native-screens": "~4.11.1",
    "react-native-toast-message": "^2.3.3",
    "react-native-vector-icons": "^10.2.0",
    "react-redux": "^9.2.0",
    "expo-sqlite": "~15.2.14"

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/JorgeGarnica9/ecommerce.git

2. Navega al directorio del proyecto:
   ```bash   
   cd ecommerce

3. Instala las dependencias:
   ```bash
   npm install

4. Configura Firebase:
- Crea un proyecto en Firebase y habilita Realtime Database.
- Agrega tu configuración de Firebase en un archivo .env en la raíz del proyecto:
    ```bash
    EXPO_PUBLIC_BASE_RTDB_URL=tu-RTDB-URL
    EXPO_PUBLIC_AUTH_BASE_URL=tu-AUTH-BASE-URL
    EXPO_PUBLIC_API_KEY=tu-API-KEY
    EXPO_PUBLIC_GMAPS_API_KEY=tu-GMAPS-API-KEY

 5. Inicia la aplicación:
    ```bash
    npx expo start

## Uso
- **Navegar productos:** Accede a la página principal para ver y filtrar productos por categorías.
- **Ver detalles del producto:** Haz clic en el botón de cada producto para acceder a su vista de detalle.
- **Agregar al carrito:** Elige la cantidad deseada y agrégala al carrito de compras.
- **Ver carrito:** Haz clic en el ícono del carrito para ver los productos agregados, eliminarlos o proceder al checkout (esto último se encuentra aún en desarrollo).

## Contribución
Este proyecto es parte de un curso y no está abierto a contribuciones externas. Sin embargo, cualquier sugerencia o comentario es bienvenido.
