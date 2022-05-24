class Nave {
    constructor(capa, arma, vida, combustible){
        this.capa = capa;
        this.arma = arma;
        this.vida = vida;
        this.combustible = combustible
    }

    disparar(){
        let combustible = 0;

        if(combustible < 10){
            console.log('lo siento pero no puedes disparar')
        } else console.log('DISPARA!')
    }

    quitarVida(){
        console.log('tienes una vida menos');
    }

    desaparecer(){
        
    }
}

let nave1 = new Nave('blue', 'metralladora', 5, 9)
let nave2 = new Nave('roja', 'bomba', 6, 11)

nave2.disparar()