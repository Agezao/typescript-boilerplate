>_disclaimer: this is still work-in-progress_


# Typescript-app boilerplate
Simple boilerplate twitter-copy-app build in typescript using graphql (apollo), react, express and mongodb. Deployed via docker (compose).

## Demo 🚀
Live demo `work-in-progress`
Api docs: `work-in-progress`

_(or run locally, instructions below)_

## Why?
Serve as starting point for similar apps or just code-reference for similar implementations.

## How to run
### 📲 Dependencies
- `docker` and `docker-compose`
- `node` and `npm`
- `git`

### Starting the app
- clone the repo `git clone https://github.com/Agezao/typescript-boilerplate.git`
- run `npm start` at root of this project
- It will automatically run `docker-compose` wich will build, migrate DDL, seed DML and deploy two images, one for `mysql-database` and one with `express api + react app` for the "twitter-copy-app"
- After `docker-compose` do his job, the app will be live at `http://localhost:8080`

# 
_thanks, you're awesome_
