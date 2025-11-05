import prismaClient from '../../Prisma/PrismaCliente' // Importa a bibli. prisma
// interface serve para:
interface CadastrarFuncionarios {
    nome:  string,
    email: string,
    senha: string,
    status: boolean
    idHierarquia: string
}

    class FuncionariosServices {
        async cadastrarFuncionarios ({nome,email,senha, status ,idHierarquia}: CadastrarFuncionarios) {
            await prismaClient.funcionarios.create({
                data:{
                    
                    nome:  nome,
                    email: email,
                    senha: senha,
                    status: status,
                    idHierarquia: idHierarquia
                }
            })
            return ({dados: 'cadastro efetuada com sucesso'})
            // Abaixo estou buscando: coluna e o dado presente nesse coluna. Ex: Na coluna nome, buscara o dado nome
            // Boas práticas e após criar o async, testar a conexão, por meio do "Console.log" | junto com async sempre vem com await
        }

    }
        export { FuncionariosServices }

        