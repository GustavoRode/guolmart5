# API REST con Node.js y Firebase

## Description

API REST para gestión de productos desarrollada con Node.js y Express.

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:

```shell
npm install
```

3. Configurar variables de entorno:

````
# Copiar el archivo de ejemplo y completar los datos requeridos
cp .env-example .env
````

Luego editar el archivo `.env` con los valores correspondientes para tu entorno.

4. Ejecutar en modo desarrollo:

````
npm run dev
````

## Documentacion de la API

### Registrar usuario

- **POST** `/auth/register`
- **Descripción:** Registra nuevo usuario, devuelve id y email.
- **Body (JSON):**

```json
{
    "email": "user@email.com",
    "password": "strongPass123"
}
````

 - **Ejemplo de respuesta**

 ```json
 {
    "id": "7xODZu2jsuFXUu6cpuRd",
    "email": "user@email.com"
}
````

### Login de usuario
- **POST** `/auth/login`
- **Descripción:** Autentica usuario registrado y devuelve token
- **Body (JSON):**

```json
{
    "email": "user@email.com",
    "password": "strongPass123"
}
````

 - **Ejemplo de respuesta**

 ```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijd4T0RadTJqc3VGWFV1NmNwdVJkIiwiZW1haWwiOiJ1c2VyQGVtYWlsLmNvbSIsImlhdCI6MTc4Mjk1ODIxMCwiZXhwIjoxNzgyOTYxODEwfQ.JQUjGAWoVOheK163DctD4Z0ewnALosTVfb9huvXcTM4"
}
````



### Obtener lista de productos

- **GET** `/products`
- **Descripción:** Devuelve la lista de todos los productos.
- **Respuesta ejemplo:**

````json
[
    {
        "id": "cw9zddWGyAbaJBxdai5P",
        "name": "Pan de molde sin gluten",
        "price": 8000,
        "stock": 14,
        "categories": [
            "Pan",
            "Panificados"
        ]
    },
    {
        "id": "oXzZPJ8TuJANVjS0TMgf",
        "name": "Brownies",
        "price": 4500,
        "stock": 30,
        "categories": [
            "Dulces",
            "Pastelería"
        ]
    }
]
````

### Crear producto

- **POST** `/products`
- **Descripción:** Crea producto.
- **Requiere token** Bearer token
- **Body (JSON):**

````json
{
    "name": "Pan de molde sin gluten",
    "price": 8000,
    "stock": 14,
    "categories": [
        "Pan",
        "Panificados"
    ]
}
````

- **Respuesta ejemplo:**
````json
{
    "id": "cw9zddWGyAbaJBxdai5P",
    "name": "Pan de molde sin gluten",
    "price": 8000,
    "stock": 14,
    "categories": [
        "Pan",
        "Panificados"
    ]
}
````


### Obtener producto por ID

- **GET** `/products/:id`
- **Descripción:** Devuelve un producto por su ID.
- **Parámetros:**
  - `id` (path, requerido): ID del producto.
- **Ejemplo de uso:** `/products/oXzZPJ8TuJANVjS0TMgf`
- **Respuesta ejemplo:**

````json
{
    "id": "oXzZPJ8TuJANVjS0TMgf",
    "name": "Brownies",
    "price": 4500,
    "categories": [
        "Dulces",
        "Pastelería"
    ],
    "stock": 30
}
````


### Crear producto

 - **POST** `/products`
 - **Descripción:** Crea un nuevo producto.
 - **Body (JSON):**

```json{
    "categories": [
        "Categoria 3",
        "Categoria 4"
    ],
    "price": 770,
    "name": "Producto 8"
}
```
- **Respuesta ejemplo:**

```json
{
    "id": "YWMPdH24Si2t7GCciYDy",
    "name": "Producto 8",
    "price": 770,
    "categories": [
        "Categoria 3",
        "Categoria 4"
    ]
}
```

### Eliminar un producto

- **DELETE** `/products/:id`
- **Descripción:** Elimina un producto por su ID-
- **Parámetros:**
  - `id` (path, requerido): ID del producto a elmininar
- **Respuesta:** 204 No content



