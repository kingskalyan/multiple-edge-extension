

let btn=document.getElementById("btn");
btn.addEventListener("click",getdata);
var cname;
var countries=[];
var facts={};
var d;
var date;
var newconfirmed;
var totalconfirmed;
var newdeaths;
var totaldeaths;
var newrecovered;
var totalrecovered;
var w,x,y,z,a,b,c;
async function getdata(){
const data= await fetch("https://api.covid19api.com/summary");
facts= await data.json();
d=facts.Global;
date=d.Date;
newconfirmed=d.NewConfirmed;
totalconfirmed=d.TotalConfirmed;
newdeaths=d.NewDeaths;
totaldeaths=d.TotalDeaths;
newrecovered=d.NewRecovered;
totalrecovered=d.TotalRecovered;
document.getElementById("result1").value=date;
document.getElementById("result2").value=newconfirmed;
document.getElementById("result3").value=totalconfirmed;
document.getElementById("result4").value=newdeaths;
document.getElementById("result5").value=totaldeaths;
document.getElementById("result6").value=newrecovered;
document.getElementById("result7").value=totalrecovered;
}
