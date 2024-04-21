import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = ' Minha Calculadora';
  public resultado :string = "";
  public decimalAdicionado: boolean = false;
  public parAberto: boolean = false;
  numero: number = 0;

  constructor() {}

public montarResultado(valor:string){
  this.resultado += valor;
  this.decimalAdicionado = false;
}
public limpar(){
  this.resultado = "";
}
public finalizar(){
  try {
    this.resultado = eval(this.resultado);
    this.decimalAdicionado = false;
  } catch (error) {
    this.resultado = 'Erro';
  }
}
public adicionarDecimal() {
  if (!this.decimalAdicionado) { // Verifica se a vírgula já foi adicionada
    this.resultado += '.';
    this.decimalAdicionado = true;
  }
}

calcularPorcentagem() {
  try {
    // Primeiro, verifique se o resultado não está vazio
    if (this.resultado !== '') {
      // Avalia a expressão matemática e calcula a porcentagem
      const resultadoNumerico = eval(this.resultado);
      const resultadoPorcentagem = (resultadoNumerico * 0.01);
      
      // Atualiza o resultado para exibir a porcentagem
      this.resultado = resultadoPorcentagem.toString();
    }
  } catch (error) {
    // Em caso de erro, exibe uma mensagem de erro
    console.error('Erro ao calcular a porcentagem:', error);
  }
}

public adicionarParenteses() {
  if (this.parAberto) {
    this.resultado += ')';
    this.parAberto = false;
  } else {
    this.resultado += '(';
    this.parAberto = true;
  }
}

public adicionarNegativo() {
  this.numero = -this.numero;
}
}