# Deno REST API

A simple REST API developed with [Deno](https://deno.land/), TypeScript and Oak 🦕

## Running the app

`deno run --allow-net server.ts`

It is recommended to use [denon](https://github.com/denosaurs/denon) to watch the files for changes and hot reloading of the server. After installing denon run:

`denon run --allow-net server.ts`


## Routes

* **GET /api/v1/songs** ⟶ Returns all songs
* **GET /api/v1/songs/:id** ⟶ Returns a song by id
* **POST /api/v1/songs** ⟶ Adds a new song
* **PUT /api/v1/songs/:id** ⟶ Updates an existing song by id
* **DELETE /api/v1/songs/:id** ⟶ Deletes an existing song by id

## Future improvements
* Use a database (MongoDB)
* Implement token authentication
* Connect with frontend framework (React or Vue)