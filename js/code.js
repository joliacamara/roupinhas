
window.onload=init;

function init()
{
    console.log("window has loaded");
    state.i=1;
    state.j=1;
    state.k=1;
    state.l=1;
    state.m=1;
    
}

var state = {
    i : 0,
    j:0,
    k:0,
    l:0,
    m:0
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
    console.log(state.k);
    var shoe=document.getElementById("pants");
    if(state.k===0){
    shoe.setAttribute("class","pants5");
        state.k++;
        console.log(state.j);
    }
    else
     if(state.k===1){
    shoe.setAttribute("class","pants1");
         state.k++;
         console.log(state.j);
    }
    else
     if(state.k===2){
    shoe.setAttribute("class","pants2");
         state.k=0;
    }
    else
     if(state.k===3){
    shoe.setAttribute("class","pants3");
         state.k=0;
    }
    else
     if(state.k===4){
    shoe.setAttribute("class","pants4");
         state.k=0;
    }
    
}

function nextsock()
{
    console.log("inside function nextsock");
    console.log(state.l);
    var shoe=document.getElementById("sock");
    if(state.l===0){
    shoe.setAttribute("class","sock2");
        state.l++;
        console.log(state.l);
    }
    else
     if(state.l===1){
    shoe.setAttribute("class","sock1");
         state.l++;
         console.log(state.l);
    }
    
}

function nextshoes()
{
    console.log("inside function nextshoes");
    console.log(state.m);
    var shoe=document.getElementById("shoes");
    if(state.m===0){
    shoe.setAttribute("class","shoes6");
        state.m++;
        console.log(state.m);
    }
    else
     if(state.m===1){
    shoe.setAttribute("class","shoes1");
         state.m++;
         console.log(state.m);
    }
    else
     if(state.m===2){
    shoe.setAttribute("class","shoes2");
         state.m=0;
    }
    else
     if(state.m===3){
    shoe.setAttribute("class","shoes3");
         state.m=0;
    }
    else
     if(state.m===4){
    shoe.setAttribute("class","shoes4");
         state.m=0;
    }
    else
     if(state.m===5){
    shoe.setAttribute("class","shoes5");
         state.m=0;
    }
    
}