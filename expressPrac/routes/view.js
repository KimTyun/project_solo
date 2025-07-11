import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
   res.send('성공 router2')
})

export default router
