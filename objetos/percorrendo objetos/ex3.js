const carro = {
    marca: 'Chevrolet',
    modelo: 'Corsa',
    ano: 2014,
    cor: 'prata',
    ligado: false,
    ligar: function () {
        if (this.ligado){
            console.log('Carro já está ligado'); 
        } else {
            this.ligado = true;
            console.log('Carro ligado com sucesso');
        }
    },
    desligar: function () {
        if (this.ligado) {
            this.ligado = false;
            console.log('Carro desligado com sucesso');
        } else {
            console.log('Carro já está desligado');
        }
    },
    obterDetalhes: function () {
        const todasPropriedades = Object.entries(this);
        const propriedades = todasPropriedades.filter(elemento => {
            if(typeof elemento[1] === 'function') {
                return false;
            } else {
                return true;
            }
        });
        propriedades.forEach((elemento) => {
            console.log(elemento[0] + ": " + elemento[1]);
        })
    }
};

carro.ligar();
carro.desligar();
carro.obterDetalhes();