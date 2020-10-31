var x = 0;
btnIncrease = document.querySelector("#increase");
btnDecrease = document.querySelector("#decrease");

col_dec = document.querySelector("#col_dec");
col_hex = document.querySelector("#col_hex");
col_bin = document.querySelector("#col_bin");


function replaceText(id, textArr){
  for(i=0; i<numArr.length;i++){
    elem = document.querySelector(id + i)
    if(elem.innerHTML != textArr[i])
      elem.innerHTML = textArr[i];
  }
}


function updateDec(){
  numArr = x.toString().padStart(9, '0').split('').reverse();
  replaceText("#dec_", numArr);
}

function updateHex(){
  numArr = x.toString(16).toUpperCase().padStart(9, '0').split('').reverse();
  replaceText("#hex_", numArr);
}

function updateBin(){
  numArr = x.toString(2).padStart(9, '0').split('').reverse();
  replaceText("#bin_", numArr);
}


function update(){
  updateDec();
  updateHex();
  updateBin();
}

function printTableBin(){
  for(i=0; i<51; i++){
    
    var newDiv = document.createElement("div")
    newDiv.innerHTML = i
    col_dec.appendChild(newDiv);
    
    var newDiv = document.createElement("div")
    newDiv.innerHTML = i.toString(16).toUpperCase();
    col_hex.appendChild(newDiv);
    
    var newDiv = document.createElement("div")
    newDiv.innerHTML = i.toString(2);
    col_bin.appendChild(newDiv);
    
  }
}


printTableBin();

btnIncrease.onclick = function(){
  x = x+1;
  update();
}
btnDecrease.onclick = function(){
  if(x>0) x = x-1;
  update();
}









