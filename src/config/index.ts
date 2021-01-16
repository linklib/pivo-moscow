import DotEnv from 'dotenv'

DotEnv.config()

// API Endpoint
export const endpoint = process.env.API_ENDPOINT || 'https://pivkarta.ru/api/'
