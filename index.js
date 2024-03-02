let pos=0,content,status,q,A,B,choice;
let cor=0;
let questions=[
["Who invented the computer ? ","Charles","Elon musk","A","1"],
["What is js ? ","Scripting","Programming","A","2"],
["Who is the father of C language?","Steve Jobs","Dennis Ritchie","B","1"],
["Which keyword is used to prevent any changes in the variable within a C program?","immutable","const"
,"B","2"]
]
let arr=new Array(questions.length);
function displayquestion()
{
if(pos>=questions.length){
return false;
}
board=document.getElementById("board");
document.getElementById("status").innerHTML="<h2>Question "+(pos+1)+" of"+questions.length+"</h2>";
q=questions[pos][0];
A=questions[pos][1];
B=questions[pos][2];
board.innerHTML="<h2 id='ques'>"+q+"</h2>";
board.innerHTML+="<input type='radio'name='ch' value='A' >"+"<span id='ui'>"+A+"</span>"+"<br>"
board.innerHTML+="<input type='radio'name='ch' value='B'>"+"<span>"+B+"</span>"+"<br>"
board.innerHTML+="<button onclick='next()' id='hi'>NEXT</button>"
board.innerHTML+="<button id='gi' onclick='previous()'>Prev</button>"
if(pos==0){
document.getElementById("gi").style.display='none';
}
if(pos==questions.length-1){
document.getElementById("hi").style.display='none';
board.innerHTML+="<button onclick='checkanswer()'>SubmitAnswer</button>"
}
}
function checkanswer()
{
next();
for(let i=0;i<arr.length;i++){
if(arr[i]==questions[i][3]){
cor++;
}
}
checkscore();
}
function checkscore(){
board.innerHTML="<h2>"+" You got " +cor+" out of "+questions.length+"</h2>";
}
function next(){
choice=document.getElementsByName("ch");
for(let i=0;i<choice.length;i++){
if(choice[i].checked){
choice=choice[i].value;
}
}
arr[pos]=choice;
console.log(arr);
pos++;
displayquestion();
}
function previous(){
pos--;
if(!(pos>=0)){
}
displayquestion();
}