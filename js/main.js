
async function consultaEndereco(cep){
    let cepErro = document.getElementById('erro')
    cepErro.innerHTML = ''

    try {
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCEPJson = await consultaCEP.json()
        
        if(consultaCEPJson.erro) {
            throw Error('CEP não existente!')
        }

        const endereco = document.getElementById('endereco')
        const bairro = document.getElementById('bairro')
        const cidade = document.getElementById('cidade')
        const estado = document.getElementById('estado')

        endereco.value = consultaCEPJson.logradouro
        bairro.value = consultaCEPJson.bairro
        cidade.value = consultaCEPJson.localidade
        estado.value = consultaCEPJson.uf

        console.log(consultaCEPJson)   

    } catch (erro) {
        cepErro.innerHTML = `CEP inválido!`
        console.log(erro)
    }
}

let cepInput = document.getElementById('cep')

cepInput.addEventListener('focusout', () => consultaEndereco(cepInput.value))