document.getElementById('omikujigo').addEventListener("click", function(){

var omikuji = Math.floor(Math.random() * 10);

if (omikuji === 9){
  alert("大吉");
} else if (omikuji === 8 || omikuji === 7){
  alert("中吉");
} else if (omikuji === 6 || omikuji === 5){
  alert("吉");
} else if (omikuji === 4 || omikuji === 3){
  alert("小吉");
} else{
  alert("凶")
}})
