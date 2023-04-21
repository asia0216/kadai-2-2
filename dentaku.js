let ekisyo = document.getElementById("ekisyo");

ekisyo.innerHTML = 0;

function click7(){
  if (ekisyo.innerHTML.slice(-1) == "."){
    ekisyo.innerHTML += 7;
  } else if (ekisyo.innerHTML == 0){
    ekisyo.innerHTML = 7;
  } else {
    ekisyo.innerHTML += 7;
  }
}

function click8(){
  if (ekisyo.innerHTML.slice(-1) == "."){
    ekisyo.innerHTML += 8;
  } else if (ekisyo.innerHTML == 0){
    ekisyo.innerHTML = 8;
  } else {
    ekisyo.innerHTML += 8;
  }
}


function click9(){
  if (ekisyo.innerHTML.slice(-1) == "."){
    ekisyo.innerHTML += 9;
  } else if (ekisyo.innerHTML == 0){
    ekisyo.innerHTML = 9;
  } else {
    ekisyo.innerHTML += 9;
  }
}


function clickPlus(){
  if (ekisyo.innerHTML.slice(-1) == "+"){
    return ;
  } else if (ekisyo.innerHTML.slice(-1) == "-"){
    return ;
  } else if (ekisyo.innerHTML.slice(-1) == "*"){
    return ;
  } else if (ekisyo.innerHTML.slice(-1) == "/"){
    return ;
  } else if (ekisyo.innerHTML.slice(-1) == "."){
    return ;
  } else {
    ekisyo.innerHTML += "+";
  }
}

function click4(){
  if (ekisyo.innerHTML.slice(-1) == "."){
    ekisyo.innerHTML += 4;
  } else if (ekisyo.innerHTML == 0){
    ekisyo.innerHTML = 4;
  } else {
    ekisyo.innerHTML += 4;
  }
}


function click5(){
  if (ekisyo.innerHTML.slice(-1) == "."){
    ekisyo.innerHTML += 5;
  } else if (ekisyo.innerHTML == 0){
    ekisyo.innerHTML = 5;
  } else {
    ekisyo.innerHTML += 5;
  }
}


function click6(){
  if (ekisyo.innerHTML.slice(-1) == "."){
    ekisyo.innerHTML += 6;
  } else if (ekisyo.innerHTML == 0){
    ekisyo.innerHTML = 6;
  } else {
    ekisyo.innerHTML += 6;
  }
}


function clickMainus(){
  if (ekisyo.innerHTML.slice(-1) == "+"){
    return ;
  } else if (ekisyo.innerHTML.slice(-1) == "-"){
    return ;
  } else if (ekisyo.innerHTML.slice(-1) == "*"){
    return ;
  } else if (ekisyo.innerHTML.slice(-1) == "/"){
    return ;
  } else if (ekisyo.innerHTML.slice(-1) == "."){
    return ;
  } else {
    ekisyo.innerHTML += "-"; 
  }
}

function click1(){
  if (ekisyo.innerHTML.slice(-1) == "."){
    ekisyo.innerHTML += 1;
  } else if (ekisyo.innerHTML == 0){
    ekisyo.innerHTML = 1;
  } else {
    ekisyo.innerHTML += 1;
  }
}


function click2(){
  if (ekisyo.innerHTML.slice(-1) == "."){
    ekisyo.innerHTML += 2;
  } else if (ekisyo.innerHTML == 0){
    ekisyo.innerHTML = 2;
  } else {
    ekisyo.innerHTML += 2;
  }
}


function click3(){
  if (ekisyo.innerHTML.slice(-1) == "."){
    ekisyo.innerHTML += 3;
  } else if (ekisyo.innerHTML == 0){
    ekisyo.innerHTML = 3;
  } else {
    ekisyo.innerHTML += 3;
  }
}


function clickAstalisk(){
  if (ekisyo.innerHTML.slice(-1) == "+"){
    return ;
  } else if (ekisyo.innerHTML.slice(-1) == "-"){
    return ;
  } else if (ekisyo.innerHTML.slice(-1) == "*"){
    return ;
  } else if (ekisyo.innerHTML.slice(-1) == "/"){
    return ;
  } else if (ekisyo.innerHTML.slice(-1) == "."){
    return ;
  } else {
    ekisyo.innerHTML += "*";
  }
}

function click0(){
  if (ekisyo.innerHTML == 0){
    ekisyo.innerHTML = 0;
  } else {
    ekisyo.innerHTML += 0;
  }
}

function click00(){
  if (ekisyo.innerHTML == 0){
    ekisyo.innerHTML = 0;
  } else {
    ekisyo.innerHTML += 0;
    ekisyo.innerHTML += 0;
  }
}

function clickDot(){
   if (ekisyo.innerHTML.slice(-1) == "+"){
    return ;
  } else if (ekisyo.innerHTML.slice(-1) == "-"){
    return ;
  } else if (ekisyo.innerHTML.slice(-1) == "*"){
    return ;
  } else if (ekisyo.innerHTML.slice(-1) == "/"){
    return ;
  } else if (ekisyo.innerHTML.slice(-1) == "."){
    return ;
  } else {
    ekisyo.innerHTML += ".";
  }
}

function clickSrush(){
   if (ekisyo.innerHTML.slice(-1) == "+"){
    return ;
  } else if (ekisyo.innerHTML.slice(-1) == "-"){
    return ;
  } else if (ekisyo.innerHTML.slice(-1) == "*"){
    return ;
  } else if (ekisyo.innerHTML.slice(-1) == "/"){
    return ;
  } else if (ekisyo.innerHTML.slice(-1) == "."){
    return ;
  }
  ekisyo.innerHTML += "/";
}

function clickAC(){
  ekisyo.innerHTML = 0;
}

function clickEqual(){
  ekisyo.innerHTML = eval(ekisyo.innerHTML);
}
//eval関数は危険な関数だから普通は使わないみたい(詳しくはggrks)
