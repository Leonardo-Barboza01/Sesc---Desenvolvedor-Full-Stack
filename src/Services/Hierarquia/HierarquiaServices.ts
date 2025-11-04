import { PrismaClient } from '@prisma/client'
import prismaCliente from '../../Prisma/PrismaCliente'

interface cadHierarquia {
        nome: string
    }

    class HierarquiaServices { 
        async cadastrarHierarquia({ nome} : cadHierarquia){
            await prismaCliente.hierarquia.create({
                data:  { //Esse data e o bloco onde ira guardar os dados do front-end
                    nome: nome // Nome do campo da "coluna" | e outro nome o dado que "será recebido"
                }
            })
            return ({dados: 'Cadastro Efetivo com Sucesso'}) // Tratamento de resposta, caso de certo
            // await, ira aguadarda a requisão 
        }
    }

    export { HierarquiaServices}

    // export default: E um exportaçao - mais novas()/ Nãp precisa importar por chaves
    // export: Tipo de exportacao onde precisa importar sobre chaves - mais antigo