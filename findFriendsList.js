const listaDeFriends = [
    "Janaina Franquis",
    "José Oliveira",
    "Maria Joaquina",
    "Cirilo da Silva",
    "Maria de Lourdes",
    "José Maria Marin",
    "Maria Fernanda",
]

const somaFriends = (n1,  n2) => n1 + n2

const encontrarFriends = nome =>{
   try{
    validacao(nome)
    const friendsEncontrado = listaDeFriends.find(friends => friends === nome)
    return friendsEncontrado ? friendsEncontrado : 'Amiga não encontrada'
   }catch(erro){
       return erro  
   }
  
}

const validacao = nome => {
    if (!nome) throw 'Campo nome está vazio'
    if (typeof nome !== 'string')  throw 'Tipo inválido'
}

module.exports ={
    somaFriends,
    encontrarFriends
}