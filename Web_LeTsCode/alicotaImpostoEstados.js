const aliquota = [ {valor: 1.07}, {valor: 1.12}, {valor: 1.15}, {valor: 1.08}, {valor: 1.12}, {valor: 1.18} ];

const valores = aliquota.map(p => p.valor * 100);

console.log("Sendo, o valor do produto de 100 reais, acrescido de alíquota estadual(%), em MG(7%), SP(12%), RJ(15%), MS(8%), ES(12%), SC(18%) respectivamente o valor será " + valores);