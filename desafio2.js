/**
 * # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 */


function getVictorys(victories, defeats){
    return victories - defeats;
}

function getClassification(victories){
    
    if(victories < 10){
        return " Ferro";
       
    }
    if(victories >= 11 && victories <= 20){
        return " Bronze";
        
    }

    if(victories >= 21 && victories <= 51){
        return " Prata";
        
    }

    if(victories >= 51 && victories <= 80){
        return " Ouro";
       
    }

    if(victories >= 81 && victories <= 90){
        return " Diamante";
        
    }

    if(victories >= 91 && victories <= 100){
        return " Lendário";
       
    }

    if( victories >= 101){
        return " Imortal";
       
    }
}

let saldoVitorias = getVictorys(100,35);
let nivelCampeão = getClassification(saldoVitorias);

console.log("O heroi tem o saldo de " + saldoVitorias +  " e está no nível " + nivelCampeão);
