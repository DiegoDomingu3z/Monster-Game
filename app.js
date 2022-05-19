const players = {
    Hero:{
        name: 'beast',
        health: 100,
        damage: 5,
        power: 8
    },
    Monster:{ health: 100,
        damage: 3,
        damage: 4,
        power: 2,
        image: 'https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687'
    }}
        

function drawPlayers(){

    let template = ''
    for(let key in players){
        let player = players[key]
        console.log(key, players);
        template += ` <div id = "player" class="col-6"> sdfjhsklg<img class="img-fluid"</div>`
}
document.getElementById('player').innerHTML = template

drawPlayers()
}

function drawMonster(){

}
