const url =  "https://servicodados.ibge.gov.br/api/v3/agregados/1008/periodos/2006/variaveis/2020?localidades=N1[all]%7CN3[41,42,43]&classificacao=12596[118149]%7C12591[0]";

 
  

async function visualizarDados(){

  const res = await fetch(url)

  const dados = await res.json()
 console.log(dados)
  regiao = 1

   resultado_dados = (dados[0]['resultados'][0]["series"][regiao]['serie'])
  
   let ano = Object.keys(resultado_dados)
   let valor = Object.values(resultado_dados)

  resultado_regiao = (dados[0]['resultados'][0]["series"][regiao]["localidade"]['nome'])

  console.log(resultado_dados, resultado_regiao)

  const paragrafo = document.createElement('p')
  paragrafo.classList.add('graficos--container__texto')
  paragrafo.innerHTML =`No ${ano[0]} foi obtido um valor de ${valor[0]}`
  console.log(paragrafo)
  const container = document.getElementById('grafico--container')

  container.appendChild(paragrafo)

}

visualizarDados()