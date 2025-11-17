import { Response, Request} from 'express'
import {FuncionariosServices} from '../../Services/Funcionarios/FuncionarioServices'


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

    async visualizarFuncionarios(req: Request, res: Response){
        const enviarDados = new FuncionariosServices()
        const resposta = await enviarDados.visualizarFuncionarios()
        return res.json(resposta)
    }

  

}

export { FuncionariosControllers}

// Export para cada cada class
// Metodo assicrono= async
// PaCoCha = Parentese () / Colchetes [] / chaves {}