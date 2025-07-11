import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import morgan from 'morgan'
import multer from 'multer'
import upload from './routes/upload.js'
import view from './routes/view.js'
import path from 'path'

const index = express()
const uploads = multer({
   storage: multer.diskStorage({
      destination(req, file, done) {
         done(null, 'uploads/')
      },
      filename(req, file, done) {
         done(null, `${Date.now}_${path.basename}`)
      },
   }),

   limits: { fieldSize: 7 * 1024 * 1024 },
})
index.set('port', process.env.PORT || 3000)

index.use(
   morgan('dev'),
   express.json(),
   express.urlencoded({ extended: true }),
   cookieParser('비밀키'),
   session({
      name: '연습파일',
      secret: '세션시크릿키',
      resave: false,
      saveUninitialized: false,
      cookie: {
         maxAge: 1000 * 60 * 60,
      },
   }),
)

index.use('/upload', upload)
index.use('/view', view)

index.get('/', (req, res) => {
   res.send('정상')
})

index.listen(index.get('port'), (err) => {
   console.log(`서버 접속됨. http://localhost:${index.get('port')}`)
})
