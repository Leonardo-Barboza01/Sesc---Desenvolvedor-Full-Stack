import {Router} from 'express'

//Importação dos controladores 
import { HierarquiaControllers } from './Controllers/Hierarquia/HierarquiaControllers'
import { FuncionariosControllers } from './Controllers/Funcionarios/FuncionariosControllers'

// para entrar no diretorio pode usar: ./ - para chegar a outra pasta || ../ - Volta uma pasta

const router = Router()

// Criação da rotas de EndPoint \ // Metodo da Rota da API e por meio de "post"

router.post('/CadastrarHierarquia', new HierarquiaControllers().cadastrarHierarquia)
router.post('/CadastrarFuncionarios', new FuncionariosControllers().cadastrarFuncionarios)
// Get - Obter, pegar algo /  Post - Enviar algo

// router: e um metodo de rotas/meio do express;
//post: E o que irá conectar com a URL ;
// ('/CadastrarFuncionarios' -  EndPoint;
// - new FuncionariosControllers - Seria o tratamentos de dados, para assim aplicar dentro do metodo;
// .cadastrarFuncionarios) - Esse e o método para cadastrar os dados no banco.  

// Se receber a informação como: UNDEFINED, isso quer dizer que os dados foram escritos errados, não batendo com referencia. Ex: "nome": "leoanrdo", se escrever errado da erro
export default router