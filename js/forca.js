let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [
    palavra001 = {
        nome: "SALINAS",
        categoria:"TEMA: CIDADES"
    },
    palavra002 = {
        nome: "TAIOBEIRAS",
        categoria:"TEMA: CIDADES"
    },
    palavra003 = {
        nome: "MONTEZUMA",
        categoria:"TEMA: CIDADES"
    },
    palavra011 = {
        nome: "BICICLETA",
        categoria:"TEMA: TRANSPORTE"
    },
    palavra012 = {
        nome: "CARRO",
        categoria:"TEMA: TRANSPORTE"
    },
    palavra013 = {
        nome: "MOTO",
        categoria:"TEMA: TRANSPORTE"
    },
    palavra014 = {
        nome: "TELEFERICO",
        categoria:"TEMA: TRANSPORTE"
    },
    palavra015 = {
        nome: "MOTOCICLETA",
        categoria:"TEMA: TRANSPORTE"
    },
    palavra021 = {
        nome: "LAPIS",
        categoria:"TEMA: OBJETOS"
    },
    palavra022 = {
        nome: "CANETA",
        categoria:"TEMA: OBJETOS"
    },
    palavra023 = {
        nome: "BORRACHA",
        categoria:"TEMA: OBJETOS"
    },
    palavra024 = {
        nome: "GARRAFA",
        categoria:"TEMA: OBJETOS"
    },
    palavra031 = {
        nome: "MANGA",
        categoria:"TEMA: ALIMENTOS"
    },
    palavra032 = {
        nome: "BANANA",
        categoria:"TEMA: ALIMENTOS"
    },
    palavra033 = {
        nome: "HAMBURGUER",
        categoria:"TEMA: ALIMENTOS"
    },
    palavra034 = {
        nome: "ARROZ",
        categoria:"TEMA: ALIMENTOS"
    },
    palavra040 = {
        nome: "CACHORRO",
        categoria:"TEMA: ANIMAIS"
    },
    palavra041 = {
        nome: "GATO",
        categoria:"TEMA: ANIMAIS"
    },
    palavra042 = {
        nome: "RATO",
        categoria:"TEMA: ANIMAIS"
    },
    palavra043 = {
        nome: "PATO",
        categoria:"TEMA: ANIMAIS"
    },
    palavra044 = {
        nome: "PEIXE",
        categoria:"TEMA: ANIMAIS"
    },
    palavra045 = {
        nome: "MACACO",
        categoria:"TEMA: ANIMAIS"
    }
];

criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";
   
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0)
    {
        mudarStyleLetra("tecla-" + letra);
        comparalistas(letra);
        montarPalavraNaTela();
    }
}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#5B678F";
    document.getElementById(tecla).style.color = "#ffffff";
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();

        if(tentativas == 0){
            abreModal("OPS!", "Não foi dessa vez ... A palavra secreta era <br>" + palavraSecretaSorteada);
        }
    }
    else{
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }
    
    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true)
    {
        abreModal("PARABÉNS!", "Você venceu...");
        tentativas = 0;
    }
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background  = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background  = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background  = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background  = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background  = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background  = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background  = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function(){
    location.reload();
});
