const players = {
   
    Monster:{
        name:'badGuy',
        health: 100,
        damage: 3,
        power: 2,
        image: 'https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687'
    },
    Hero:{
        name: 'goodGuy',
        health: 100,
        damage: 5,
        power: 8 ,
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.07865A4wCJ1tMSnUuIRqhgHaHa%26pid%3DApi&f=1"
    }
}

let level = 1

function drawPlayers(){

    let template = ''
    for(let key in players){
        let player = players[key]
        // console.log(player);
        template += ` 
        
        <div class="col-5">
        <div class="card rounded" style="width:fit-content;" >
            <img src=${player.image}
                class="card-img-top p-1 rounded" alt="" onClick="heroDamage()">
                <div class="progress-bar bg-danger" role="progressbar" style="width: ${player.health}%;" aria-valuenow="25"
            aria-valuemin="0" aria-valuemax="100">Health</div>
            <div class="card-body m-1 border-top border-3">
                <h5 class="card-title">Name:${player.name}</h5>
                <h6>Attack:${player.damage}</h6>
                <h6>Power:${player.power}</h6>
            </div>
        </div>
        
        `
}
document.getElementById('player').innerHTML = template

}

function newGame(){
    players.Hero.health =100
    players.Monster.health = 100
}


function monsterDamage(){
    players.Hero.health -= players.Monster.damage
    // console.log(players.Hero.health);
    if(players.Monster.health ==0){
        levelUp()
    }

    

    drawPlayers()
}

function heroDamage(){
    players.Monster.health -=players.Hero.damage
    // console.log(players.Monster.health);

    drawPlayers()
}

function levelUp(){
    level++
    players.Monster.health = 100 * level
    players.Monster.damage += 3

}


let damageTimer = setInterval(monsterDamage , 3000 )


drawPlayers()