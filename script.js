console.log("Welcome to TICTACTOE!");

var val= [9,9,9,9,9,9,9,9,9];

var One=document.querySelector("#one");
var Two=document.querySelector("#two");
var Three=document.querySelector("#three");
var Four=document.querySelector("#four");
var Five=document.querySelector("#five");
var Six=document.querySelector("#six");
var Seven=document.querySelector("#seven");
var Eight=document.querySelector("#eight");
var Nine=document.querySelector("#nine");

var res=document.querySelector("#restart");
res.addEventListener('click',function(){
	val= [9,9,9,9,9,9,9,9,9];
	One.textContent=" ";
	Two.textContent=" ";
	Three.textContent=" ";
	Four.textContent=" ";
	Five.textContent=" ";
	Six.textContent=" ";
	Seven.textContent=" ";
	Eight.textContent=" ";
	Nine.textContent=" ";
})


One.addEventListener('click',function(){
	if(val[0]==0)
	{
		One.textContent="X";
		val[0]=1;
	}
	else if(val[0]==1)
	{
		One.textContent="O";
		val[0]=9;
	}
	else if(val[0]==9)
	{
		One.textContent=" ";
		val[0]=0;
	}
})

Two.addEventListener('click',function(){
	if(val[1]==0)
	{
		Two.textContent="X";
		val[1]=1;
	}
	else if(val[1]==1)
	{
		Two.textContent="O";
		val[1]=9;
	}
	else if(val[1]==9)
	{
		Two.textContent=" ";
		val[1]=0;
	}
})


Three.addEventListener('click',function(){
	if(val[2]==0)
	{
		Three.textContent="X";
		val[2]=1;
	}
	else if(val[2]==1)
	{
		Three.textContent="O";
		val[2]=9;
	}
	else if(val[2]==9)
	{
		Three.textContent=" ";
		val[2]=0;
	}
})


Four.addEventListener('click',function(){
	if(val[3]==0)
	{
		Four.textContent="X";
		val[3]=1;
	}
	else if(val[3]==1)
	{
		Four.textContent="O";
		val[3]=9;
	}
	else if(val[3]==9)
	{
		Four.textContent=" ";
		val[3]=0;
	}
})


Five.addEventListener('click',function(){
	if(val[4]==0)
	{
		Five.textContent="X";
		val[4]=1;
	}
	else if(val[4]==1)
	{
		Five.textContent="O";
		val[4]=9;
	}
	else if(val[4]==9)
	{
		Five.textContent=" ";
		val[4]=0;
	}
})


Six.addEventListener('click',function(){
	if(val[5]==0)
	{
		Six.textContent="X";
		val[5]=1;
	}
	else if(val[5]==1)
	{
		Six.textContent="O";
		val[5]=9;
	}
	else if(val[5]==9)
	{
		Six.textContent=" ";
		val[5]=0;
	}
})


Seven.addEventListener('click',function(){
	if(val[6]==0)
	{
		Seven.textContent="X";
		val[6]=1;
	}
	else if(val[6]==1)
	{
		Seven.textContent="O";
		val[6]=9;
	}
	else if(val[6]==9)
	{
		Seven.textContent=" ";
		val[6]=0;
	}
})


Eight.addEventListener('click',function(){
	if(val[7]==0)
	{
		Eight.textContent="X";
		val[7]=1;
	}
	else if(val[7]==1)
	{
		Eight.textContent="O";
		val[7]=9;
	}
	else if(val[7]==9)
	{
		Eight.textContent=" ";
		val[7]=0;
	}
})


Nine.addEventListener('click',function(){
	if(val[8]==0)
	{
		Nine.textContent="X";
		val[8]=1;
	}
	else if(val[8]==1)
	{
		Nine.textContent="O";
		val[8]=9;
	}
	else if(val[8]==9)
	{
		Nine.textContent=" ";
		val[8]=0;
	}
})

