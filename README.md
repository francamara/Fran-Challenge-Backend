# Welcome to my challenge!

## Description

This is a simple backend system that has a SQL type database made with [Sequelize v6](https://sequelize.org/master/) and [PostgreSQL](https://www.postgresql.org/) that handles one table which contains:

| id  |     value      | isComplete |
| --- | :------------: | ---------: |
| 1   | this is a task |       true |

and its capable of managing a REST API.

The documentation for the API routes can be found [here](https://documenter.getpostman.com/view/15167440/TzeXkSb5) (Change langage to _**JavaScript - Fetch**_)

Frotend can be found [here](https://github.com/)

## Dependencies

- express (v4.17.1)
- sequelize (v6.6.2)
- nodemon (v 2.0.7) (Only for dev environment)
- NodeJS (v14.16.0)

## How to start project

1. Install dependencies

```
npm i
```

2. Once its done, setup `.env` file with the desired port for the server to start

```
PORT = xxxx
```

3. Start sever

```
npm run start
```

If you want to start the server in dev mode, you

```
npm run dev
```
