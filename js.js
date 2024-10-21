var index = 0, check=0;
const n = document.getElementsByClassName('cell');
const dia = document.getElementById('dia');
function tick(x){
    if(index %2 == 0 && x.value != "X" && x.value != "O" && check == 0){
         x.value = "O";
         index++;
    } else if(index %2 == 1 && x.value != "X" && x.value != "O" && check == 0){
         x.value = "X";
         index++;
    } 
  
        for(let i = 0; i < 3; i++){
            if(n[i].value == n[i+3].value && n[i].value == n[i+6].value && n[i].value != ""){
                dia.innerHTML  = "Player " + n[i].value + " win";
                dia.showModal();
                check =1;
            }
            if(n[i*3].value == n[i*3+1].value && n[i*3].value == n[i*3+2].value && n[i*3].value != ""){
                dia.innerHTML  = "Player " + n[i*3].value + " win";
                dia.showModal();
              check=1;
            }
            if(n[0].value == n[4].value && n[0].value == n[8].value && n[0].value != ""){
                dia.innerHTML  = "Player " + n[0].value + " win";
                dia.showModal();
            check =1;
            }
            if(n[2].value == n[4].value && n[2].value == n[6].value && n[2].value != ""){
                dia.innerHTML  = "Player " + n[2].value + " win";
                dia.showModal();
           check =1;
            }
            
        }
        if(index == 9 && check == 0){
            dia.innerHTML  = "Draw";
            dia.showModal();
        }
    
}

function exit(){
    dia.close();
}

function restart(){
    for(let i = 0; i < n.length; i++){
        n[i].value = "";
    }
    check=0;
    index = 0;
}
    
 
