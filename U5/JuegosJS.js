var turno=true;
var fichaX = 1;
var fichaO = 1;
var ficha;
onclick =function(e){
  if(e.target.nodeName=="DIV"){
    if(turno){
      ficha='X';
      if((e.target.innerText=="")&&(fichaX<4)){
        e.target.innerText=ficha;
        fichaX++;
        turno=!turno;
      }else if(fichaX==4){
        alert("No puedes poner una "+ficha+" mas");
        if(e.target.innerText==ficha){
          fichaX--;
        }
      }
    }else{
      ficha='O';
      if((e.target.innerText=="")&&(fichaO<4)){
        e.target.innerText=ficha;
        fichaO++;
        turno=!turno;
      }else if(fichaO==4){
        alert("No puedes poner una "+ficha+" mas");
      }
    }
  }
}
oncontextmenu=function(e){
  if(e.target.nodeName == "DIV"){
    if(turno){
      ficha='X';
        if (e.target.innerText == ficha) {
          e.target.innerText = "";
            fichaX--;
        }
    }else{
      ficha='O';
        if (e.target.innerText == ficha) {
          e.target.innerText = "";
            fichaO--;
        }
    }
  }
}
