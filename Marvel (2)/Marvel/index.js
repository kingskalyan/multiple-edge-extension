let b1=document.getElementById("i1");
let b2=document.getElementById("i2");
let b3=document.getElementById("i3");
let b4=document.getElementById("i4");
let b5=document.getElementById("i5");
let b6=document.getElementById("i6");
let b7=document.getElementById("i7");
let b8=document.getElementById("i8");
let b9=document.getElementById("i9");
let b10=document.getElementById("i10");
let b11=document.getElementById("i11");
let b12=document.getElementById("i12");
b1.addEventListener("click",dis);
b2.addEventListener("click",dis);
b3.addEventListener("click",dis);
b4.addEventListener("click",dis);
b5.addEventListener("click",dis);
b6.addEventListener("click",dis);
b7.addEventListener("click",dis);
b8.addEventListener("click",dis);
b9.addEventListener("click",dis);
b10.addEventListener("click",dis);
b11.addEventListener("click",dis);
b12.addEventListener("click",dis);
         //function that display value
         function dis(val)
         {
             document.getElementById("result").value+=val
         }
           
         //function that evaluates the digit and return result
         function solve()
         {
             let x = document.getElementById("result").value
             let y = eval(x)
             document.getElementById("result").value = y
         }
           
         //function that clear the display
         function clr()
         {
             document.getElementById("result").value = ""
         }
      