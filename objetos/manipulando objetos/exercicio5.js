const contaBancaria = {
    titular: 'Gabriel',
    saldo: 2000.95,
    depositar: function (valor) {
        this.saldo = this.saldo + valor;
        console.log(`Depósito efetuado, saldo atualizado ${this.saldo.toFixed(2)}`);
    },
    sacar: function (valor) {
        if (this.saldo < valor) {
            console.log('Saldo insuficiente para saque');
        } else {
            this.saldo = this.saldo - valor;
            console.log(`Saque executado, saldo remanescente: ${this.saldo.toFixed(2)}`);
        }
    }
}

const cliente = {
    nome: 'Gabriel',
    conta: contaBancaria
}

cliente.mostrarSaldo = function () {
    console.log(`Cliente ${this.nome} tem saldo de ${this.conta.saldo.toFixed(2)}`);
}

cliente.mostrarSaldo();
cliente.conta.depositar(1000);
cliente.conta.sacar(2000);
contaBancaria.depositar(200);
cliente.mostrarSaldo();