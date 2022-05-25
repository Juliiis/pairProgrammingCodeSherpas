class Nave {
    constructor(capa, arma, vida, combustible, bala){
        this.capa = capa;
        this.arma = arma;
        this.vida = vida;
        this.combustible = combustible;
        this.bala = bala;
    }

    disparar(){
        let combustible = 0;

        if(combustible < 10){
            console.log('lo siento pero no puedes disparar')
        } else console.log('DISPARA!')
    }

    quitarVida(){
        let bala = true;
        this.vida = this.vida - 1 

        if(bala === true){
            console.log(this.vida)
        }
    }

    desaparecer(){}
}

let nave1 = new Nave('blue', 'metralladora', 5, 9, true)
let nave2 = new Nave('roja', 'bomba', 6, 11, false)

nave2.quitarVida()

