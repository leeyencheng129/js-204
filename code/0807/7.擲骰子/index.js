const byId = (id) => document.getElementById(id)

byId('start').addEventListener('click', function(){
    const points = ['one', 'two', 'three', 'four', 'five', 'six']

    const rand = Math.floor(Math.random() * 6) + 1
    
    byId('dice').innerHTML='<i class="fas fa-dice-' + points[rand-1] + '"></i>'
    
    byId('point').innerHTML = rand + ' 點'
})