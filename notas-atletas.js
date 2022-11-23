function calcularMediaNotas (atletas) {

    let atletasValidados = [];

    for(let i = 0; i < atletas.length; i++) {

        let notasOrdenadas = (atletas[i].notas).sort(function (a, b) {
            return a - b;
          });

        atletaNotasValidas =  {
            nome: atletas[i].nome,
            notas: notasOrdenadas.slice(1,4)
        }

        atletasValidados.push(atletaNotasValidas);
    }

    atletasValidados.forEach(iten => {
        let soma = 0;

        for (let i = 0; i < iten.notas.length; i++) {
            soma = soma + iten.notas[i];
        }    

        console.log(`Atleta: ${iten.nome}`)
        console.log(`Notas Obtidas: ${iten.notas}`)
        console.log(`Média Válida: ${soma/3}`)

    })

}

let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];
   calcularMediaNotas (atletas)