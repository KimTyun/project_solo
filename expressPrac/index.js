import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cookieParser from 'cookie-parser'
import expressSession from 'express-session'
import morgan from 'morgan'
import multer from 'multer'

const index = express()

index.set('port', process.env.PORT || 3000)

index.get('/', (req, res) => {
   res.send('정상')
})

index.listen(index.get('port'), (err) => {
   console.log(`서버 접속됨. http://localhost:${index.get('port')}`)
})
