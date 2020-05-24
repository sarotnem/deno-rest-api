import { Router } from "https://deno.land/x/oak/mod.ts"
import { index, show, store, update, destroy } from './controllers/song.ts'

const router = new Router()

router
    .get('/api/v1/songs', index)
    .get('/api/v1/songs/:id', show)
    .post('/api/v1/songs', store)
    .put('/api/v1/songs/:id', update)
    .delete('/api/v1/songs/:id', destroy)

export default router