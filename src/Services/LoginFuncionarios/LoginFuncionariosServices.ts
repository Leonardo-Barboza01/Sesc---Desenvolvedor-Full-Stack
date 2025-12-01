import prismaCliente from '../../Prisma/PrismaCliente'
import {compare} from 'bcryptjs'

interface loginFuncionarios {
    email: string,
    senha: string,
}

    class LoginFuncionarioServices {
        async loginFuncionarios({email, senha}: loginFuncionarios){
            const emailExiste = await prismaCliente.funcionarios.findFirst({
                where: {
                    email: email
                }
            })
            if(!emailExiste) {
                throw new Error('Login Incorreto')
            }
            const senhaCrypy = await compare(senha, emailExiste.senha)
           // console.log(senhaCrypy)
           if (senhaCrypy){
            return ({dados:"Login Efetuado com sucesso"})
            } else {
                    throw new Error("Login Incorreto");
                
            }

        }
    }

    export {LoginFuncionarioServices}