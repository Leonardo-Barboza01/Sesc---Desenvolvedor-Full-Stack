import prismaClient from '../../Prisma/PrismaCliente' // Importa a bibli. prisma
import {hash} from 'bcryptjs'

// interface serve para tipificar os dados
// Sempre fora do Classe
// Class apenas métodos
interface CadastrarFuncionarios {
    nome: string,
    cpf: string,
    email: string,
    senha: string,
    status: boolean
    idHierarquia: string
}

interface alterarFuncionarios {
    id: string,
    nome: string,
    cpf: string,
    email: string,
    status: boolean
}


class FuncionariosServices {
    // async é o metodo
    async cadastrarFuncionarios({ nome, cpf, email, senha, status, idHierarquia }: CadastrarFuncionarios) {
        const cpfExiste = await prismaClient.funcionarios.findFirst({
            where: {
                OR: [
                    {
                        cpf: cpf
                    },
                    {
                        email: email
                    }
                ]
                // OR = um ou o outro precisa ser valido/Ser igual para ser validado // AND = Ambos forem iguais a operação ocorre, pois já existe 
            }
        })

        if (cpfExiste) {
            throw new Error('cpf/E-mail já Cadastros')
        }

    
        const senhaCrypt = await hash (senha, 8 )
        await prismaClient.funcionarios.create({
            data: {
                nome: nome,
                cpf:  cpf,
                email: email,
                senha: senhaCrypt,
                status: status,
                idHierarquia: idHierarquia
            }
        })
        return ({ dados: 'cadastro efetuada com sucesso' })
        // Abaixo estou buscando: coluna e o dado presente nesse coluna. Ex: Na coluna nome, buscara o dado nome
        // Boas práticas e após criar o async, testar a conexão, por meio do "Console.log" | junto com async sempre vem com await
    }
    // Nesse caso o metodo async é um Void, assim iniando a função vazia
    // sempre quando é async precisa await,para ele esperar

    async visualizarFuncionarios() {
        const resposta = await prismaClient.funcionarios.findFirst({
            select: {
                cpf: true,
                id: true,
                nome: true,
                email: true,
                status: true
            }
        })
        return resposta

    }
    async apagarFuncionarios(id: string) {

        const idNãoexiste = await prismaClient.funcionarios.findFirst({
            where: {
                id: id
            }
        })
        if (!idNãoexiste) {
            throw new Error('Registro não Encontro')
        }



        await prismaClient.funcionarios.delete({
            where: {
                id: id
            }
        })
        return ({ dados: "Registro Excluido com sucesso" })

    }

    async alterarFuncionarios({ id, nome, cpf, email, status }: alterarFuncionarios) {
        await prismaClient.funcionarios.update({
            where: {
                id: id
            },
            data: {
                nome: nome,
                cpf: cpf,
                email: email,
                status: status
            }
        })
        return ({ dados: 'Registro Alterado com sucesso' })
    }
    // Prestar atenção no uso das chaves


}

export { FuncionariosServices }

//controllers - Back / Services - servidor
//String(maisculula faz conversão) / string - texto