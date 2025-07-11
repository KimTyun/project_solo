import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
import config from '../config/config.js'
dotenv.config()

const env = process.env.NODE_ENV || 'development'
const db = {}
const c = config[env]
const sequelize = new Sequelize(c.database, c.username, c.password, c)
