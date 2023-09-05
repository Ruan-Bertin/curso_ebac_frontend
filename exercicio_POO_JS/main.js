class PremierLeague{
  constructor(nome, estadio){
    this.nome = nome;
    this.estadio = estadio
  }
}

class Liverpol extends PremierLeague{
  constructor(nome, posicao){
    super(nome, "Anfield");
    this.posicao = posicao
  }

  falta(){
    console.log(`${this.nome} sofreu uma falta`);
  }
}

class Arsenal extends PremierLeague{
    constructor(nome, perna){
      super(nome, "Emirates");
      this.perna = perna
    }

    defendeu(){
      console.log(`${this.nome} defendeu um pênalti`)
    }
}

class ManchesterCity extends PremierLeague{
    constructor(nome, numero){
      super(nome, "Etihad");
      this.numero = numero
    }

    gol(){
      console.log(`${this.nome} marcou um gol`)
    }
}

const jogador1 = new Liverpol("Salah", "Atacante");
const jogador2 = new ManchesterCity("Haaland", 9);
const jogador3 = new Arsenal("Ramsdale", "Direita");

jogador1.falta();
jogador2.gol();
jogador3.defendeu();
