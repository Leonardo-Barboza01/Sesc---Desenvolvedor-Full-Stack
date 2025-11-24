import { Response, Request} from 'express'
import {FuncionariosServices} from '../../Services/Funcionarios/FuncionarioServices'
// CRUD

// C
class FuncionariosControllers {
    async cadastrarFuncionarios(req: Request, res: Response){
        const {nome,cpf,email, senha, status, idHierarquia} = req.body
        const enviarDados = new FuncionariosServices()
        const resposta = await enviarDados.cadastrarFuncionarios({
            cpf,
            nome, 
            email,
            senha,
            status,
            idHierarquia
        })
        return res.json(resposta)
    }
// R
    async visualizarFuncionarios(req: Request, res: Response){
        const enviarDados = new FuncionariosServices()
        const resposta = await enviarDados.visualizarFuncionarios()
        return res.json(resposta)
    }
// U
    async alterarFuncionarios (req: Request, res: Response) {
         const {id,nome, cpf,email,status} = req.body
         const enviarDados = new FuncionariosServices()
         const resposta = await enviarDados.alterarFuncionarios({
            id,
            nome,
            cpf,
            email,
            status
         })
            return res.json(resposta)
    }
        //const enviarDados = new FuncionariosServices()
        // const resposta = await enviarDados.alterarFunciorios(id)
          //  return res.json(resposta)


    //boby só quando vem no corpo
    //params - quando vem como paramentro
    
    // D
   async apagarFuncionarios(req: Request, res: Response) {
            const {id} = req.params
            const enviarDados = new FuncionariosServices()
            const resposta  = await enviarDados.apagarFuncionarios(id)
            return res.json(resposta)
    }

    

}

export { FuncionariosControllers}

// Export para cada cada class
// Metodo assicrono= async
// PaCoCha = Parentese () / Colchetes [] / chaves {}