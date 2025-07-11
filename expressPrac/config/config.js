import dotenv from 'dotenv'
dotenv.config()

const config = {
   development: {
      username: 'root',
      password: '1234',
      database: 'devDatabase',
      host: '127.0.0.1',
      dialect: 'mysql',
   },
   product: {},
}

export default config
