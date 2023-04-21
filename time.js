let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

let conma = document.getElementById("conma");
let conma_i = 1;

let seconds = document.getElementById("seconds");
let seconds_i = 1;

let min = document.getElementById("min");
let min_i = 1;

let hour = document.getElementById("hour");
let hour_i = 1;

let clearId;


function conmaCount(){
  clearId = setInterval(function(){
    if (conma_i == 10){
      if (seconds_i == 60){
        if (min_i == 60){
          if (hour_i == 99){
            hour_i = 0
          };
          hour.textContent = hour_i;
          hour_i++;
          min_i = 0;
        };
        min.textContent = min_i;
        min_i++;
        seconds_i = 0;
      };
    seconds.textContent = seconds_i;
    seconds_i++;
    conma_i = 0;
  };
  conma.textContent = conma_i;
  conma_i++;
  }, 100);
}

function clickStart(){
  conmaCount();
  
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;
}

function clickStop(){
  clearInterval(clearId);
  
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
}

function clickReset(){
  clearInterval(clearId);
  
  hour.textContent = 0;
  min.textContent = 0;
  seconds.textContent = 0;
  conma.textContent = 0;
  
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
}



/* 桁数の表現方法がちょっとわからん。それ以外はいい感じ
let startButton;
let stopButton;
let resetButton;
let showTime;
//上記は後にそれぞれhtmlと紐付けする

let timer; //setInterval,clearIntervalで使用
let startTime; //開始時間
let elapsedTime = 0; //経過時間
let holdTime = 0; //一時停止した時にココに格納させる
//後にそれぞれ使う変数を宣言
//最初に各変数を宣言した方が混乱を回避できそう

window.onload = function(){
  showTime = document.getElementById("stop_wacth");
  startButton = document.getElementById("start");
  stopButton = document.getElementById("stop");
  resetButton = document.getElementById("reset");
}
//window.onloadはページが読み込まれた時に最初に行われる指定っぽい
//それぞれの変数とhtmlのボタンとを紐付けているイメージ
  //showTimeの中に文字を入れたらstop_watch(html側)に文字を入れられてる的な
//変数宣言時に一緒にやらない理由はわからん
//読み込み直後の一番最初に紐付けをしたいのか？

function clickStart(){
  startTime = Date.now();
  //詳しくはググった方が早いけど、ある時間から現在の時間までどれぐらい経ったかをミリ秒単位で返してくる
  //それをstartTimeに入れて、measureTime関数に使っている
  //この時に入手した時間を基準の時間(0秒)としてどのぐらい時間が経ったかを後に出す
  
  measureTime();
  //後述したこの関数を呼び出している
  
  startButton.disabled = true;
  //disabledをtrueにする事でスタートボタンを押せないようにしている
  stopButton.disabled = false;
  resetButton.disabled = false;
  //falseにする事でそれぞれのボタンを押せるようにしている
  //disabledを無効化的な感じ
  //jQueryのprop()でも変えれるみたい
}

function clickStop(){
  clearInterval(timer);
  //
  
  holdTime += Date.now() - startTime;
  //holdTime = holdTime + Date.now() - startTime
  //
  
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
}



function clickReset(){
  clearInterval(timer);
  //
  
  elapsedTime = 0;
  holdTime = 0;
  showTime.textContent = "0:0:0:0";
  //
  
  startButton.disabled = false;
  //
  stopButton.disabled = true;
  resetButton.disabled = true;
  //
}

function measureTime(){
  timer = setTimeout(function(){
  //指定の時間後に1度処理を実行する(後述の指定では10ミリ秒後)
  //関数内でもう一度呼び出している影響で処理が繰り替えされてる
  //意味的には0.01(10ミリ)秒毎に()内(setTimeout)を実行しろ的な
  //timerの中にclearIntervalで使うidを代入している
    
    elapsedTime = Date.now() - startTime + holdTime;
    //現在の時間(Date.now)からclickStart内の時間を引いてどのぐらい時間が経っているか計算
    //holdTimeは一時停止した時の時間が格納されている(初期値は宣言時の0)
    
    showTime.textContent = new Date(elapsedTime).toISOString().slice(11, 21);
    //new Date(elapsedTime)で経過時間を新しく作成している感じ？(口での説明がむずい)
    //toISOString()は表示形式を指定(YYYY-MM-DDTHH:mm:ss.sssZ)
    //slice()は特定の部分だけを指定みたいな感じ
      //(14, 23)だと上のY~Z内の一番最初のYを0として14番目~23番目を示す(mm:ss.sss)
    
    measureTime();
    //自分自身(measureTime関数)を更に呼んでいる
  }, 10);
}
*/



/*やり方が違うかも？
スタートを押してカウント開始まではok、それ以降は出来んかった

//コンマ部分
function startConma(){
  let conma = document.getElementById("conma");
  //idが「conma」のタグの中身を取得のつもりだったけど無くても動く
  //無いと15行目に"!"マークがでるけど、一応動く
  //htmlとの紐付けだと思ってるけど違う？
  
  let conma_i = 1;
  //0からだと"0"、"1"、・・・みたいに0も数えられてしまう
  
  function conmaCount(){
    if (conma_i == 10){
      conma_i = 0;//10になったら0に戻す(9迄表示されてから0にする)
    };
    conma.textContent = conma_i;
    //conma_iの中の文字をidが「conma」の中に入れる
    //innerHTMLでもイケル
    conma_i++; //1ずつ増やしていく
  }
  
  setInterval(conmaCount, 100); //1000で1秒 100で0.1秒
  //0.1秒経ったらconmaCountが実行されている(繰り返されている)
}


//秒部分
function startSeconds(){
  let seconds = document.getElementById("seconds");

  let seconds_i = 1;

  function secondsCount(){
    if (seconds_i == 60){
      seconds_i = 0;
    };
    seconds.textContent = seconds_i;
   seconds_i++;
  }

  setInterval(secondsCount, 1000);
}



//分部分
function startMin(){
  let min = document.getElementById("min");
  
  let min_i = 1;
  
  function minCount(){
    if (min_i == 60){
      min_i = 0;
    };
    min.textContent = min_i;
    min_i++;
  }
  
  setInterval(minCount, 60000);
}



//時間部分
function startHour(){
  let hour = document.getElementById("hour");
  
  let hour_i = 1;
  
  function hourCount(){
    if (hour_i == 99){
      hour_i = 0;
    };
    hour.textContent = hour_i;
    hour_i++;
  }
  
  setInterval(hourCount, 3600000);
}




//「スタート」を押したらカウントスタート！
function clickStart(){
  startConma(), startSeconds(), startMin(), startHour();
}



//上のヤツをちょっと改造したヤツ　こっちのがcpuの負担は少なそう
let conma = document.getElementById("conma");
let conma_i = 1;

let seconds = document.getElementById("seconds");
let seconds_i = 1;

let min = document.getElementById("min");
let min_i = 1;

let hour = document.getElementById("hour");
let hour_i = 1;

function conmaCount(){
  if (conma_i == 10){
    if (seconds_i == 60){ //繰り上がりをイメージ
      if (min_i == 60){
        if (hour_i == 99){
          hour_i = 0
        };
        hour.textContent = hour_i;
        hour_i++;
        min_i = 0;
      };
      min.textContent = min_i;
      min_i++;
      seconds_i = 0;
    };
    seconds.textContent = seconds_i; //最初の引数の1が入る
    seconds_i++;
    conma_i = 0; //直前の記述と合わせて擬似的に10にしてる
  };
  conma.textContent = conma_i;
  conma_i++;
}

let id = setInterval(conmaCount, 100);
*/