<h1 align="center">
  <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
    <br>
    Be the hero
</h1>

<h4 align="center">
  Aplicação descreva a aplicaçao aqui
</h4>

<p align="center">
<img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/joaomenna1/be_the_hero?color=EE4D64">
<img alt="Made by jamelão" src="https://img.shields.io/badge/made%20by-joaomenna1-%20?color=EE4D64">
<img alt="Project top programing language" src="https://img.shields.io/github/languages/top/joaomenna1/be_the_hero?color=ee4d64">
<img alt="GitHub license" src="https://img.shields.io/github/license/joaomenna1/be_the_hero?color=ee4d64">
</p> 

## :rocket: Built with

This project was developed with the following technologies:

-  [Node.js](https://nodejs.org/)
-  [Knex](http://knexjs.org/)
-  [VS Code](https://code.visualstudio.com/)
-  And many more... Look at the package.json file to see all the dependencies of the app. - [backend](https://github.com/joaomenna1/be_the_hero/blob/master/backend/package.json) [frontend](https://github.com/joaomenna1/be_the_hero/blob/master/frontend/package.json) [mobile](https://github.com/joaomenna1)

## :information_source: How to run the application locally
### Requirements
To run the app, you will need [Git](https://git-scm.com), [Node.js](https://nodejs.org/) v12.13.1 or higher, [Yarn](https://yarnpkg.com/) or [Npm](https://www.npmjs.com/), and [Sqlite](https://sqlitebrowser.org/).
<br>

Now clone the repository and install the dependencies.
```bash
# to clone the repository
git clone https://github.com/joaomenna1/be_the_hero.git

# go into the backend folder
cd be_the_hero/backend

#install the backend dependencies
yarn or npm install

```
In order to connect to the database, you will need to enter the access informations into a .env file, based on a .env.example file that is provided in the backend folder, change the variables according to your environment.
```bash
# run migrations
yarn knex migrate:latest & npx knex migrate:latest


# run api
yarn dev & npm run dev

```

## :page_facing_up: License

This project is under the MIT license. See the [LICENSE](https://github.com/joaomenna1) for more information

## :mailbox_with_mail: Get in touch!

[LinkedIn](www.linkedin.com/in/nogueira-menna-barreto)