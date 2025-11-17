import prismaClient from '../../Prisma/PrismaCliente' // Importa a bibli. prisma
// interface serve para:
interface CadastrarFuncionarios {
    nome: string,
    cpf: string,
    email: string,
    senha: string,
    status: boolean
    idHierarquia: string
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
            }
        })

        if (cpfExiste) {
            throw new Error('cpf/E-mail já Cadastros')
        }

        await prismaClient.funcionarios.create({
            data: {
                nome: nome,
                cpf: cpf,
                email: email,
                senha: senha,
                status: status,
                idHierarquia: idHierarquia
            }
        })
        return ({ dados: 'cadastro efetuada com sucesso' })
        // Abaixo estou buscando: coluna e o dado presente nesse coluna. Ex: Na coluna nome, buscara o dado nome
        // Boas práticas e após criar o async, testar a conexão, por meio do "Console.log" | junto com async sempre vem com await
    }

    async visualizarFuncionarios() {  // Nesse caso o metodo async é um Void, assim iniando a função vazia
        // sempre quando é async precisa await,para ele esperar
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

}
export { FuncionariosServices }

