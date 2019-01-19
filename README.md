# File-server
This application can help to get/delete file remote from web

## About
This software can help share files. Persons can give access to date with http protocal. Administrator of server select a folder what are sharing and free port. After that persons can give access for get and delete file from this folder.

## API
GET /all - return all files from sharing folder. <br>
GET /get/:id - get file. Id it's relative path to file. <br>
GET /delete/:id - delete file. Id it's relative path to file. <br>
*if you get difficult path you must use %2f<br>
Example: <br>
folder/file.txt => folder%2ffile.txt

## Instalation
1. Install Node.js from https://nodejs.org (i have used version 11.4.0)<br>
2. Go to terminal/cmd <br>
3. Clone git repository <br>
```
git clone https://github.com/kudryaA/File-server
```
4. Go to project
```
cd File-server
```
5. Delete git from project
```
rm -rf .git
rm -f .gitignore
```
6. Install npm dependencies
```
npm install
```
7. Configurate server(port, path to sharing directory)
```
node install
```
8. Start server
```
npm start
```
## Good luch
Anton Kudryavtsev kam123ua@gmail.com
