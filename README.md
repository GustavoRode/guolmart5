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

- **GET** `/api/products`
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

- **POST** `/api/products`
- **Descripción:** Crea producto.
- **Requiere token:** Bearer token
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


### Eliminar un producto

- **DELETE** `/products/:id`
- **Descripción:** Elimina un producto por su ID.
- **Requiere token:** Bearer token
- **Parámetros:**
  - `id` (path, requerido): ID del producto.
- **Ejemplo de uso:** `/products/oXzZPJ8TuJANVjS0TMgf`
- **Respuesta ejemplo:** 204 No content


### Modificar un producto

- **PUT** `/products/:id`
- **Descripción:** Modifica un producto por su ID.
- **Requiere token:** Bearer token
- **Parámetros:**
  - `id` (path, requerido): ID del producto.
- **Ejemplo de uso:** `/products/oXzZPJ8TuJANVjS0TMgf`

- **Body (JSON):**
````json
{
    "name": "Brownies",
    "price": 4500,
    "categories": [
        "Dulces",
        "Pastelería"
    ],
    "stock": 99
}
````

- **Respuesta ejemplo no exitoso:** 404 Not Found
```
{
    "error": "Producto no encontrado para modificar"
}
```

- **Respuesta ejemplo no exitoso:** 401 Unauthorized
```
{
    "message": "Token inválido"
}
```

- **Respuesta ejemplo exitoso:** 201 OK
```
{
    "id": "mDRASDcDyIYtnuKUXLWU",
    "name": "Brownies",
    "price": 4500,
    "stock": 99,
    "categories": [
        "Dulces",
        "Pastelería"
    ]
}