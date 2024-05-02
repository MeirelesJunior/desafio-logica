/**GIT INIT INICIA UM REPOSITORIO VAZIO
 * GIT ADD ADICIONA OS ARQUIVOS,  O . ADICIONA TUDO
 * GIT COMMIT -M ''COMENTARIO''
 * git branch -M main
 *  git remote add origin https://github.com/MeirelesJunior/desafio-logica.git
 *  git push -u origin main
 */

//DESAFIO CLASSIFCADOR DE NÍVEL DE HERÓI


let nome = 'Jorge';
let qtdXp = 4596;

if (qtdXp < 1000) {
    console.log('Classe Ferro');
}

if (qtdXp > 1001 && qtdXp <= 2000) {
    console.log('Classe Bronze');
}

if (qtdXp > 2001 && qtdXp <= 5000) {
    console.log('Classe Prata');
}

if (qtdXp > 5001 && qtdXp <= 7000) {
    console.log('Classe Ouro');
}

if (qtdXp > 7001 && qtdXp <= 8000) {
    console.log('Classe Platina');
}

if (qtdXp > 8001 && qtdXp <= 9000) {
    console.log('Classe Ascendente');
}

if (qtdXp > 9001 && qtdXp <= 10000) {
    console.log('Classe Imortal');
}

if (qtdXp >= 10001) {
    console.log('Classe Radiante');
}

console.log("O Herói de nome: " + nome + " está no nível de " + qtdXp);