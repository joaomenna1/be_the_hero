<h1 align="center">
    <img src="https://res.cloudinary.com/stefanosaffran/image/upload/v1576226426/kxmdozm0odu7e0twlhx3.svg" />
    <br>
    Banco de talentos app
</h1>

<h4 align="center">
  Aplicação permite cadastrar e listar um novo talento para empresa transire
</h4>

<p align="center">
<img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/StefanoSaffran/gympoint?color=EE4D64">
<img alt="Made by Stefano" src="https://img.shields.io/badge/made%20by-StefanoSaffran-%20?color=EE4D64">
<img alt="Project top programing language" src="https://img.shields.io/github/languages/top/StefanoSaffran/gympoint?color=ee4d64">
<img alt="GitHub license" src="https://img.shields.io/github/license/StefanoSaffran/gympoint?color=ee4d64">
</p> 

## :rocket: Built with

This project was developed with the following technologies:

-  [Node.js](https://nodejs.org/)
-  [ESLint](https://eslint.org/)
-  [Prettier](https://prettier.io/)
-  [VS Code](https://code.visualstudio.com/)
-  And many more... Look at the package.json file to see all the dependencies of the app. - [backend](https://github.com/StefanoSaffran/gympoint/blob/master/backend/package.json) [frontend](https://github.com/StefanoSaffran/gympoint/blob/master/frontend/package.json) [mobile](https://github.com/joaomenna1)

## :information_source: How to run the application locally
### Requirements
To run the app, you will need [Git](https://git-scm.com), [Node.js](https://nodejs.org/) v12.13.1 or higher, [Yarn](https://yarnpkg.com/), [PostgreSQL](https://www.postgresql.org/) and [Redis](https://redis.io/) installed on your computer. I strongly recommend using [Docker](https://www.docker.com/) to run the databases.
<br>
If you install docker, follow this steps to install and run the docker images.

```bash
# install Redis image
docker run --name imageName -p 6379:6379 -d -t redis:alpine

# install Postgres image (if you don't specify an username it will be postgres by default)
docker run --name imagename -e POSTGRES_PASSWORD=yourPassword -p 5432:5432 -d postgres

# start Redis
docker start imageName

# start Postgres
docker start imageName

```
Now clone the repository and install the dependencies.
```bash
# to clone the repository
git clone linkdoprojeto

# go into the backend folder
cd bancodetalentos/backend

#install the backend dependencies
yarn

```
In order to connect to the database, you will need to enter the access informations into a .env file, based on a .env.example file that is provided in the backend folder, change the variables according to your environment.
```bash
# run migrations
yarn sequelize db:migrate

# run seeds
yarn sequelize db:seed:all

# run api
yarn dev & yarn queue


## :page_facing_up: License

This project is under the MIT license. See the [LICENSE](https://github.com/joaomenna1) for more information

## :mailbox_with_mail: Get in touch!

[LinkedIn](https://www.linkedin.com/in/)