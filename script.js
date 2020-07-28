function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

function changePlayer(){
    if(player=='O')
    player='X'
    else
    player='O'
}

function changeStartingPlayer(){
    if(startingPlayer=='O')
    startingPlayer='X'
    else
    startingPlayer='O'
    player=startingPlayer
}

function select(field){
    if(field.innerHTML==''){
    if(player=="X")
    field.style.color='red'
    else
    field.style.color='blue'
    field.innerHTML=player
    changePlayer()
    }
}

function reset(){
    for(let i=0;i<fields.length;i++)
    fields[i].innerHTML=''
}

function  gameResult(){
    let check=false
    for(let i=0;i<fields.length;i++){
        if(fields[i].innerHTML=='')
        check=true
    }
    if(!check)
    return 'T'
    for(let i=0;i<9;i+=3){
        if(fields[i].innerHTML==fields[i+1].innerHTML&&fields[i].innerHTML==fields[i+2].innerHTML&&fields[i].innerHTML!='')
        return fields[i].innerHTML
    }
    for(let i=0;i<3;i++){
        if(fields[i].innerHTML==fields[i+3].innerHTML&&fields[i].innerHTML==fields[i+6].innerHTML&&fields[i].innerHTML!='')
        return fields[i].innerHTML
    }
    if(fields[0].innerHTML==fields[4].innerHTML&&fields[0].innerHTML==fields[8].innerHTML&&fields[0].innerHTML!='')
    return fields[0].innerHTML
    if(fields[2].innerHTML==fields[4].innerHTML&&fields[2].innerHTML==fields[6].innerHTML&&fields[2].innerHTML!='')
    return fields[2].innerHTML
    return ''
}

function addScore(winner){
    if(winner=='X'){
    scoreX++
    document.getElementById('scoreX').innerHTML=''
    document.getElementById('scoreX').innerHTML='X    '+scoreX
    }
    else if(winner=='O'){
    scoreO++
    document.getElementById('scoreO').innerHTML=''
    document.getElementById('scoreO').innerHTML=scoreO+'    O'
    }
}

function gameEnd(winner){
addScore(winner)
if (winner=='O'){
    alert('Game won by: O')
    reset()
    changeStartingPlayer()
}
else if (winner=='X'){
    alert('Game won by: X')
    reset()
    changeStartingPlayer()
}
else if (winner=='T'){
    alert('Game ended in tie')
    reset()
    changeStartingPlayer()
}
}

/////////////////////////////////////////////////////////////////////////////////////
var startingPlayer='O'
var player=startingPlayer
var scoreX=0
var scoreO=0
document.getElementById('scoreX').innerHTML='X    '+scoreX
document.getElementById('scoreO').innerHTML=scoreO+'    O'
var fields=document.getElementsByClassName('field')
for(let i=0;i<fields.length;i++){
    fields[i].addEventListener('click',function(){
        select(this)
        sleep(1500).then(() => {
            gameEnd(gameResult())
            })
    })
}