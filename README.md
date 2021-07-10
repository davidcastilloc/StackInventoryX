# StackInventory

para levantar los servicios es necesario hacer uso de docker-compose

orden

```
docker-compose pull
docker-compose build

```

luego ejecutamos el contenedor de strapi
para hacer la build del administrativo

```
docker-compose run strapi sh
```

luego dentro de la consola

```
yarn && yarn build
```

por ultimo la build para el frontend

```
docker-compose run frontend sh 
```

luego dentro de la consola

```
yarn && yarn build
```
