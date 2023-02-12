// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

  const alturaRetangulo = Number(prompt('Qual é a altura do retângulo?'))
  const larguraRetangulo = Number(prompt('Qual é a largura do retângulo?'))
  const areaRetangulo = alturaRetangulo * larguraRetangulo
  console.log(areaRetangulo)



}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
 const anoAtual = Number(prompt('Digite o ano Atual!'))
 const anoNascimneto = Number(prompt('Digite aqui o ano atual!'))
 const idade = anoAtual - anoNascimneto
 console.log(idade)



}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  const IMC = peso/(altura * altura).toFixed(2)
  return IMC 

4283780417
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const NOME = prompt('Qual é seu nome?')
  const IDADE = Number(prompt('Qual é sua idade?'))
  const EMAIL = prompt('Digite seu email')

  console.log(`Meu nome é ${NOME}, tenho ${IDADE} anos, e o meu email é ${EMAIL}.`)



}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  const corFavorita1 = prompt('Qual é sua cor favorita?')
  const corFavorita2 = prompt('Qual é sua segunda cor favorita?')
  const corFavorita3 = prompt('Qual é sua terceira cor favorita?')

  const coresFav = [corFavorita1 , corFavorita2 , corFavorita3]
  console.log(coresFav)




}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  return string.toUpperCase()


}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const saida = Number(custo) / Number(valorIngresso)

  return saida

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

   return string1.length === string2.length





}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
 
 return array[0]
 

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui


  return array[array.length - 1]


}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  const meuArray = array[0]
  const outroArray= array[array.length - 1]
  array[0] = outroArray
  array[array.length - 1] = meuArray
  return array 


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  return string1.toUpperCase() === string2.toUpperCase()


}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt('Digite o ano Atual!'))
  const anoNascimneto = Number(prompt('Digite aqui o ano do seu nascimento!'))
  const anoId = Number(prompt('Qual ano sua carteira foi emitida?'))
  const idade = anoAtual - anoNascimneto
  const idadeId = anoAtual - anoId 
  if(idade <= 20){
    console.log(idadeId >= 5)
} else if (idade <= 50){
  console.log (idadeId >= 10)
} else {
  console.log(idadeId >= 15)
}

return 


  

  





}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  const anoBissexto = ano % 400 === 0 || (ano % 4 === 0 && ano % 100 != 0)
  return anoBissexto 



}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  const idadeLabenu = prompt('Você tem mais de 18 anos?')
  const ensinoMedio = prompt('Você possui ensino médio completo?')
  const dispHoraraio = prompt('Você possui disponibilidade de horário?')
  const resp = idadeLabenu.toLowerCase() === 'sim' && ensinoMedio.toLowerCase() === 'sim' && dispHoraraio.toLowerCase() === 'sim'
  console.log(resp)

}