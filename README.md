# Neuronica
# Hacer deploy con comando "ng deploy"

Versiones:
Agular CLI: 16.2.11
Node: 18.13.0
Npm: 8.19.3
Angular: 16.2.12

Dependencias:
@angular-devkit/architect       0.1602.11
@angular-devkit/build-angular   16.2.11
@angular-devkit/core            16.2.11
@angular-devkit/schematics      16.2.11
@angular/cdk                    16.2.13
@angular/cli                    16.2.11
@angular/fire                   16.0.0
@angular/material               16.2.13
@angular/ssr                    17.1.0
@nguniversal/builders           16.2.0
@nguniversal/express-engine     16.2.0
@schematics/angular             16.2.11
rxjs                            7.8.1
typescript                      4.9.5
zone.js                         0.14.3

Para descargar la aplicacion Web se deben seguir los siguientes pasos:

* Windows 
1) Descargar un gestor de descarga de paquetes por linea de comamdos, se recomienda usar chocolatey, y su instalacion es de la siguiente manera:

1.1) Abrir un PowerSheel como administrador.
1.2) Escribir --> Set-ExecutionPolicy AllSigned ---> Esto para cambiar las politicas de ejecucion.
1.3) En caso de que pida una confirmacion escriba Y y oprimir Enter.
1.4) Luego instale chocolatey --> iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))
1.5) Si pide una confirmacion escribir A y oprimir Enter.
1.6) Configurar variables de entorno --> [Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\ProgramData\chocolatey\bin", "User")
1.7) Cerrar y abrir una nueva terminal CMD.
1.8) Verificar configuracion e intalacion con --> choco -v

2) Instalacion de node js

2.1) Abrir una teminal PowerSheel como administrador.
2.2) Instalar la version requerida por el proyecto --> choco install nodejs --version 18.13.0
2.3) Si pide una confirmacion escribir Y y oprimir Enter.
2.4) Configurar las variables de entorno --> [Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\Program Files\nodejs", "User")
2.5) Cerrar y abrir una nueva terminal CMD.
2.6) Verificar la instalacion con --> node -v
2.7) Verificar instalacion de npm con --> npm -v


3) Intalacion de Angular

3.1) Abrir una terminal PowerSheel como administrador.
3.2) Descargar angular CLI con --> npm install -g @angular/cli@16.2.11
3.3) Configurar variables de entorno (Coloca tu nombre de usuario) --> [Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\Users\Tu Usuario\AppData\Roaming\npm", "User")
3.4) Cerrar y abrir una nueva terminal CMD.
3.5) Verifica la instalacion con --> ng version

4)  Clonar repositorio

---) Recuerde tener descargado git en su computador  
4.1) Abrir una terminal CMD o git bash.
4.2) Ubicarse en el lugar de su preferencia, por ejemplo en Documentos --> cd Documents
4.3) Crear carpeta --> mkdir Pagina
4.4) Abrir la carpeta --> cd Pagina
4.5) Clonar repositorio --> git clone "https://github.com/Neuronica/pagina_neuronica.git"
4.6) Abrir la carpeta del proyecto --> cd pagina_neuronica
4.7) Forzar la instalacion de los paquetes de package.json --> npm install --force
---) Pueden aparecer varias advertencias.
4.8) Desplegar loclmente el proyecto --> ng serve
4.9) Abrir la url http://localhost:4200/

* Linux 

1) Instalación gestor de paquetes node.

1.1) Abrir Terminal.
1.2) Ejecutar descarga --> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

2) Intalación de node y npm

2.1) Cerrar y abrir una nueva terminal.
2.2) Ejecutar descarga --> nvm install 18.13.0
2.3) Revisar version node --> node -v
2.4) Revisar version de npm --> npm -v 

3) Instalación de anguar CLI

3.1) Abrir una terminal.
3.2) Ejecutar descarga --> npm install -g @angular/cli@16.2.11
3.3) Revisar version --> ng version
3.4) Si pide confirmación escribir Y y oprimir enter.
3.5) Si pide segunda confimación escribir N y oprimir enter.

4) Clonado de repositorio.

4.1) Abrir una terminal.
4.2) Abrir carpeta documentos --> cd Documents
4.3) Crear carpeta para clonación --> mkdir Proyecto
4.4) Entrar a carpeta --> cd Proyecto/
4.5) Clonar --> git clone "https://github.com/Neuronica/pagina_neuronica.git"

5) Descarga de paquetes del proyecto

5.1) Abrir carpeta de proyecto --> cd pagina_neuronica/
5.2) Forzar instalación --> npm install --force
5.3) Veificar funcionameinto --> ng serve
5.4) Abrir el localhost en el bucador --> localhost:4200
