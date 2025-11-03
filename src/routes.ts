import {Router} from 'express'

//Importação dos controladores 
import { HierarquiaControllers } from './Controllers/Hierarquia/HierarquiaControllers'
const router = Router()

// Criação da rotas de EndPoint \ // Metodo da Rota da API e por meio de "post"
router.post('/CadastrarHierarquia', new HierarquiaControllers().cadastrarHierarquia)

export default router