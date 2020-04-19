
window.onload=init;

function init()
{
    console.log("window has loaded");
    state.i=1;
    state.j=1;
    state.k=1;
    
}

var state = {
    i : 0,
    j:0,
    k:0
};

function nexthair()
{
    console.log("inside function nexthair");
    console.log(state.i);
    var dress=document.getElementById("hair");
    if(state.i===0){
    dress.setAttribute("class","hair6");
        state.i++;
        console.log(state.i);
    }
    else
     if(state.i===1){
    dress.setAttribute("class","hair1");
         state.i++;
         console.log(state.i);
    }
    else
     if(state.i===2){
    dress.setAttribute("class","hair2");
         state.i=0;

    }
    else
     if(state.i===3){
    dress.setAttribute("class","hair3");
         state.i=0;

    }
    else
     if(state.i===4){
    dress.setAttribute("class","hair4");
         state.i=0;
    }
    else
     if(state.i===5){
    dress.setAttribute("class","hair5");
         state.i=0;
    }
    
}

function nextblouse()
{
    console.log("inside function nextblouse");
    console.log(state.j);
    var shoe=document.getElementById("blouse");
    if(state.j===0){
    shoe.setAttribute("class","blouse6");
        state.j++;
        console.log(state.j);
    }
    else
     if(state.j===1){
    shoe.setAttribute("class","blouse1");
         state.j++;
         console.log(state.j);
    }
    else
     if(state.j===2){
    shoe.setAttribute("class","blouse2");
         state.j=0;
    }
    else
     if(state.j===3){
    shoe.setAttribute("class","blouse3");
         state.j=0;
    }
    else
     if(state.j===4){
    shoe.setAttribute("class","blouse4");
         state.j=0;
    }
    else
     if(state.j===5){
    shoe.setAttribute("class","blouse5");
         state.j=0;
    }
    
}

function nextpants()
{
    console.log("inside function nextpants");
    console.log(state.j);
    var shoe=document.getElementById("pants");
    if(state.j===0){
    shoe.setAttribute("class","pants5");
        state.j++;
        console.log(state.j);
    }
    else
     if(state.j===1){
    shoe.setAttribute("class","pants1");
         state.j++;
         console.log(state.j);
    }
    else
     if(state.j===2){
    shoe.setAttribute("class","pants2");
         state.j=0;
    }
    else
     if(state.j===3){
    shoe.setAttribute("class","pants3");
         state.j=0;
    }
    else
     if(state.j===4){
    shoe.setAttribute("class","pants4");
         state.j=0;
    }
    
}

function nextsock()
{
    console.log("inside function nextsock");
    console.log(state.j);
    var shoe=document.getElementById("sock");
    if(state.j===0){
    shoe.setAttribute("class","sock2");
        state.j++;
        console.log(state.j);
    }
    else
     if(state.j===1){
    shoe.setAttribute("class","sock1");
         state.j++;
         console.log(state.j);
    }
    
}

function nextshoes()
{
    console.log("inside function nextshoes");
    console.log(state.j);
    var shoe=document.getElementById("shoes");
    if(state.j===0){
    shoe.setAttribute("class","shoes6");
        state.j++;
        console.log(state.j);
    }
    else
     if(state.j===1){
    shoe.setAttribute("class","shoes1");
         state.j++;
         console.log(state.j);
    }
    else
     if(state.j===2){
    shoe.setAttribute("class","shoes2");
         state.j=0;
    }
    else
     if(state.j===3){
    shoe.setAttribute("class","shoes3");
         state.j=0;
    }
    else
     if(state.j===4){
    shoe.setAttribute("class","shoes4");
         state.j=0;
    }
    else
     if(state.j===5){
    shoe.setAttribute("class","shoes5");
         state.j=0;
    }
    
}