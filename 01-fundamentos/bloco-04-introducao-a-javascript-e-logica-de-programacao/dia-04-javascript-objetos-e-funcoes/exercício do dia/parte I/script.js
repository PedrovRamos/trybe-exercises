function exercicio1 (){

    let info = {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    };

    console.log("Bem-vinda, " + info.personagem)
}

function exercicio2 (){

    let info = {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    };
    
    info.recorrente = "Sim"

    console.log(info.recorrente)
}

function exercicio3 (){

    let info = {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
        recorrente: 'Sim',
    };
    
    for (let index in info){
        console.log(index)
    }
}

function exercicio4 (){

    let info = {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
        recorrente: 'Sim',
    };
    
    for (let index in info){
        console.log(info[index])
    }
}

function exercicio5 (){

    let info = {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
        recorrente: 'Sim',
    };

    let info2 = {
        personagem: 'Tio Patinhas',
        origem: 'Christmas on Bear Montain',
        nota: "Dell's Four Color Comics #178', 'O último MacPatinhas'",
        recorrente: 'Sim',
    };
    
    console.log(info.personagem +" e "+ info2.personagem)
    console.log(info.origem +" e "+ info2.origem)
    console.log(info.nota +" e "+ info2.nota)
    console.log("Ambos recorrentes")
    
   
}

function exercicio6 (){

    let leitor = {
        nome: 'Julia',
        sobrenome: 'Pessoa',
        idade: 21,
        livrosFavoritos: [
          {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
          },
        ],
    };

    console.log("O livro favorito de " + leitor.Julia + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo)
   
}

function exercicio7 (){

    let leitor = {
        nome: 'Julia',
        sobrenome: 'Pessoa',
        idade: 21,
        livrosFavoritos: [
          {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
          },
        ],
    };

    leitor.livrosFavoritos.push({
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco', 
    })

    console.log(leitor)
   
}

function exercicio8 (){

    let leitor = {
        nome: 'Julia',
        sobrenome: 'Pessoa',
        idade: 21,
        livrosFavoritos: [
                {
                titulo: 'O Pior Dia de Todos',
                autor: 'Daniela Kopsch',
                editora: 'Tordesilhas'
                },
                {
                titulo: 'Harry Potter e o Prisioneiro de Azkaban',
                autor: 'JK Rowling',
                editora: 'Rocco'
                }
            ]
    }

    console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos")
 
}

