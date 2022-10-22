/*
Uma empresa de computadores possui clientes em diversos estados.
Para realizar a venda é necessário calcular o imposto do produto, 
onde cada estado aplica uma alíquota variada. 
Construa um programa que receba o valor do produto e o estado de venda, 
calcule o valor do imposto e exiba o valor final 
do produto conforme a tabela abaixo:
MG -> 7%
SP -> 12%
RJ -> 15%
MS -> 8%
ES -> 12%
SC -> 18%

*/

function productTaxBasedInState(value, stateTax) {
    const statesTax = {
      'MG': 0.07, 'SP': 0.12,
      'RJ': 0.15, 'MS': 0.08,
      'ES': 0.12, 'SC': 0.18,
    }
    /*
    function valueProdSale(value, stateSale) {
      const stateSale =  
    }
    */
    if (!statesTax.hasOwnProperty([stateTax.toUpperCase()])) {
      return "Este estado não existe na base de dados.";
    } else if (!/[0-9]/.test(value)) {
      return "Este valor não é um número.";
    }
  
    const result = (+value * statesTax[stateTax.toUpperCase()]) + +value;
  
    return `O valor final do produto é: ${result}`
  }
  console.log(productTaxBasedInState(10,"SC")+"\n"+productTaxBasedInState(20,"sp")+"\n"+productTaxBasedInState(50, "Rj")+"\n"+productTaxBasedInState(100, "MS"));

  //////////////

  function porcentagem(valor, estado){
    let numValue = parseFloat(valor.replace(',','.'));
    const estados = {SP:1.12, MG:1.07,RJ:1.15,MS:1.08,ES:1.12,SC:1.18}
    let estadoConvertido = estado.toUpperCase();
    if(estados.hasOwnProperty(estadoConvertido) ){
        if((!numValue) || (numValue <= 0)){
            console.log("O valor é inválido")
            return;
        }else{
            console.log("O valor total com impostos é de R$"+ (numValor*estados[estadoConvertido]).toFixed(2))
        }
    }else{
        console.log("O estado é inválido!");       
    }
}
porcentagem("5a", "sp");