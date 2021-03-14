function rand(min=1,max=document.querySelector('canvas').width){
    return Math.floor(Math.random()*(max-min+1)+min);
}