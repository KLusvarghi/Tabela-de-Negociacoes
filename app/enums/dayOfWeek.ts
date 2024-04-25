// sendo dessa maneira que criadmos um enum, para que possa ser acessado no proejto inteiro
// utilizada para criar constantes que poderão ser usadas no projeto inteiro apenas para leitura

// por padrão o TS coloca os valores em hordem de forma crescente, do 0 em diante, porem caso mude a ordem terá erro em tempo de execução, então uma boa prática é definir o valor na mão
export enum DiaDaSemana {
  DOMINGO = 0,
  SEGUNDA = 1,
  TERCA = 2,
  QUARTA = 3,
  QUINTA = 4,
  SEXTA = 5,
  SABADO = 6
}