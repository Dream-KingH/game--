var btn = document.querySelector('button');
var h1 = document.querySelector('h1');
var main = document.querySelector('.main');
var speed = 5,  //速度
    num = 0,    //得分
    timer = null; //定时器
    flag = true;

btn.addEventListener('click',function() {
  btn.style.display = 'none';
  h1.style.display = 'none';
  move()
})
// createDiv();
//创建方块
function createDiv() {
  var row = document.createElement('div');
  row.className = 'row';
  var index = Math.floor(Math.random()*4);
  // 创建四个方块
  for(var i = 0;i < 4;i++){
    var div = document.createElement('div');
    if (i == index) {
      div.className = 'color';
      
    }
    row.appendChild(div);
    
  }
  // 添加行
  
 main.insertBefore(row, main.children[0]);
 
}
// 移动
function move() {
  clearInterval(timer);
  timer = setInterval(function() {
    main.style.top = parseInt(main.offsetTop) + speed + 'px';
    // main top为0 创建一行
    if(parseInt(main.style.top) >= 0) {
      createDiv();
      main.style.top = '-150px'
    }
    //最后一行
    var len = main.children.length;
    if(len == 6) {
      for(var i = 0;i < 4;i++){
        if(main.children[len - 1].children[i].classList.contains('color')) {
          alert('游戏结束，你的得分为：' + num);
          clearInterval(timer);
          flag = false
        }
      }
      //删除最后一行
      main.removeChild(main.children[len - 1]);

    }
  },20)
  divClick();
}
//添加点击事件C
function divClick() {
  main.addEventListener('click',function(e) {
    if(!flag){
      return;
    }
    var target = e.target;
    if(target.className == 'color') {
      target.style.background = '#bbb';
      target.classList.remove('color');
      num++
    }else{
      alert('游戏结束，你的得分为：' + num);
      clearInterval(timer);
      flag = false
    }
     if(num % 10 == 0){
       speed++
     }
  })
}