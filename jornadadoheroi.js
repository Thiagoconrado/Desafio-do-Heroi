
const prompt = require ("prompt-sync")()
console.log()

console.log('Bem vindo a Jornada do Heroi');
console.log();

console.log(' O mundo esta em perigo, e precisa de grandes homens e de mulheres incriveis,so voces podem salvar o nosso planeta, a humanidade precia de voces!');
console.log()
;
console.log('Se voce esta preparadoe estar disposta a salvar mundo,vem comigo e responda um simples questionario!');

console.log()

    let pontuacao = 0
console.log(' Responda 1 [sim] e 2 nao] ');

console.log();

     let pergunta1 = prompt('voce tem super poderes?');
     if(pergunta1 == 1){
       pontuaçao++
     }
     console.log();

     let pergunta2 = prompt('voce esta preparado para grandes combates?');
     if(pergunta2 == 1){
       pontucao++
     }
     console.log();

     let pergunta3 = prompt('voce sabe voar?');
     if(pergunta3 == 1){
       pontuacao++
     }
     console.log();

     let pergunta4 = prompt('gostaria de lutar ao lado de outros herois?');
     if(pergunta4 == 1){
       pontuacao++
     }
     console.log();

     let pergunta5 = prompt('voce esta disposta a arriscar sua vida pela humanidade?');
     if(pergunta5 == 1){
       pontuacao++
     }
     console.log();

     if(pontuacao == 0){
       console.log('voce falhou miseravelmente');
     }
     console.log();

     if(pontuacao == 1 || pontuacao == 2){
       console.log('voce nao passou,mas tente na proxima');
     }
     console.log();

    if(pontuacao == 3){
      console.log('Quase, foi por pouco que voce nao conseguiu');
    }
    console.log();

    if(pontuacao == 4){
      console.log('Foi no limite,mas voce passou');
    }
    console.log();

    if(pontuacao == 5){
      console.log('Bem vindo, voce e o heroi que estavamos a procura ');
    }