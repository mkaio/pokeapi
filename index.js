botao = document.getElementById('botao')

function acao(){

    let pokemon = document.getElementById('pokemon').value

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(function(response){
        return response.json()
    }) .then(function(response){
        console.log(response)
        document.getElementById('pokeimg').src = response.sprites.front_default
        document.getElementById('pokename').innerHTML = response.name

        let html_lista = ''
        for (const hab of response.abilities) {
            console.log(hab.ability.name)
            html_lista += '<li class="list-group-item">' + hab.ability.name + '</li>'
        }
        document.getElementById('abilities').innerHTML = html_lista

        
    })
}

botao.addEventListener('click', acao)

