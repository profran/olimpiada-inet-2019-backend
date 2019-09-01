require('dotenv').config() // instatiate environment variables

let CONFIG = {} // Make this global to use all over the application

CONFIG.port = process.env.PORT || '3000'

CONFIG.db_dialect = process.env.DB_DIALECT || 'mongodb'
CONFIG.db_host = process.env.DB_HOST || 'localhost'
CONFIG.db_port = process.env.DB_PORT || '27017'
CONFIG.data_source = process.env.DATA_SOURCE

module.exports = CONFIG
