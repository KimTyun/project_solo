import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
   res.send('성공 router1')
})

export default router
