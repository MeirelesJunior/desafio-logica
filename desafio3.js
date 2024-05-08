//DESAFIO 3 Escrevendo as classes de um Jogo

class Hero{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type
    }

    displayTheMessage(){
        let attackDescription =  " ";
        
        if(this.type == 'mago' ){
             attackDescription = 'magia'
            console.log(`O ${this.type} atacou usando ${attackDescription}`)
        } 
        
        if(this.type == 'guerreiro' ){
             attackDescription = 'espada'
            console.log(`O ${this.type} atacou usando ${attackDescription}`)
      }  
      
        if(this.type == 'monge' ){
             attackDescription = 'artes marciais'
            console.log(`O ${this.type} atacou usando ${attackDescription}`)
     }  

        if(this.type == 'ninja' ){
             attackDescription = 'shuriken'
            console.log(`O ${this.type} atacou usando ${attackDescription}`)
        }  

  } 
    
}

let heroOne =  new Hero('Jorge', 37, 'ninja');
let heroTwo = new Hero('Julio', 8, 'mago')

heroOne.displayTheMessage();
heroTwo.displayTheMessage();




