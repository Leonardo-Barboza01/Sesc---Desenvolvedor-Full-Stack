import express, {Request,Response,NextFunction } from 'express'
import 'empress-async-errors'
import cors from 'cors'

const app = express()
app.use(express.json()) //Uma função dentro de um função

app.use(cors())

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        if(err instanceof Error){
        return res.status(400).json({
            error: err.message
        })
     }   
    return res.status(500).json({
        status: 'Erro',
        message: 'Erro Interno do Servidor'
    })
})
app.listen(3333, () => console.log('Servidor On-line na porta 3333'))
    
    