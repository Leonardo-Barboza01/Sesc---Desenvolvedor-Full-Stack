import {Request, Response } from 'express'
import { LoginFuncionarioServices } from '../../Services/LoginFuncionarios/LoginFuncionariosServices'


    class LoginFuncionarioControllers{
        async loginFuncionarios (req: Request, res: Response) {
                const {email, senha } = req.body
                const enviarDados = new LoginFuncionarioServices()
                const resposta = await enviarDados.loginFuncionarios({
                    email,
                    senha
                })
                //Aqui o que iremos enviar
                return res.json(resposta)
        }
    }

    export {LoginFuncionarioControllers}