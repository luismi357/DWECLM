var turno=true;
var fichaX = 0;
var fichaO = 0;
var ficha;
onclick =function(e){
  if(e.target.nodeName=="DIV"){
    if(turno){
      ficha='X';
      if((e.target.innerText=="")&&(fichaX<3)){
        e.target.innerText=ficha;
        fichaX++;
        turno=!turno;
      }else if(fichaX==3){
        alert("No puedes quita una "+ficha);
        if(e.target.innerText==ficha){
          fichaX--;
        }
      }
    }else{
      ficha='O';
      if((e.target.innerText=="")&&(fichaO<3)){
        e.target.innerText=ficha;
        fichaO++;
        turno=!turno;
      }else if(fichaO==3){
        alert("No puedes quita una "+ficha);
        if(e.target.innerText==ficha){
          fichaO--;
        }
      }
    }
  }
}
ondblclick=function(e){
  if(e.target.nodeName == "DIV"){
    if(turno){
      ficha='X';
      if (e.target.innerText !== "") {
        if (e.target.innerText == ficha) {
          e.target.innerText = "";
        }
      }
    }else{
      ficha='O';
      if (e.target.innerText !== "") {
        if (e.target.innerText == ficha) {
          e.target.innerText = "";
        }
      }
    }
  }
}
