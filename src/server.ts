import express, { request, Response, NextFunction } from 'express'
import 'empress-async-errors'
import cors from 'cors'

const app = express()
app.use(express.json()) //Uma função dentro de um função

app.use(cors())