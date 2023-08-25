# DEV
1. Clonar el proyecto 
2. Ejecutar  ```npm install```
3. Levantar backend ```npm run backend```
4. Ejecutar la app ```npm start```


# instalar json server en modo desarrollador 
npm install --save-dev json-server

en package.json adicionar se crea el script 
"backend": "json-server --watch data/db.json",

lanzamos el comando 
npm run backend

# Configuar environments 
1. creamos la carpeta enviroments
2. creamos los archivos de environments.ts y environments.prod.ts
3. configuramos en el archivo angular.json en el parametro configurations.production agragamos 
``` 
"fileReplacements": [
    {
      "replace": "src/enviroments/enviroments.ts",
      "with": "src/enviroments/enviroments.prod.ts"
    }
  ],
```
