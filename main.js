

function calculate(){
    // console.log((height.value/100));
    let level=document.getElementById('level')
    let result=document.getElementById('result')    
if(!height.value||!weight.value){
         result.innerHTML=`<p style="color:red">Enter a valid height and weight</p>`

    }
    else{
    
   bmi= weight.value/((height.value/100)**2)
   console.log(Math.round(bmi * 10) / 10);
   
   if(bmi<18.5){

    level.style.height = 3+bmi+"%"
    level.style.backgroundColor = "#EB3678"
    result.style.color=level.style.backgroundColor
    level.style.transition ="0.5s"
    kword="Under Weight"

   }

   if(bmi>=18.5&&bmi<=24.9){

    level.style.height = 35+bmi-18.5+"%"
    level.style.backgroundColor = "#9ABF80"
    level.style.transition ="0.5s"
    kword="Healthy"
    result.style.color=level.style.backgroundColor

   }
 
   if(bmi>=25&&bmi<=39.9){

    level.style.height = 65+bmi-25+"%"
    level.style.backgroundColor = "#F3C623"
    level.style.transition ="0.5s"
    result.style.color=level.style.backgroundColor
    kword="Over Weight"
   }
   if(bmi>=40){

    level.style.height = 100+"%"
    level.style.backgroundColor = "red"
    level.style.transition ="0.5s"
    result.style.color=level.style.backgroundColor
    kword="Obese"
   }
   result.innerHTML=`<h3>BMI score:${Math.round(bmi * 10) / 10}</h3>
   <h3 style="margin-top:10px;">You are ${kword}</h3>`
    }
   
}

function clear_output(){
    height.value=null
    weight.value=null
    result.innerHTML=`<p> </p>`
    level.style.height = 0+"%"
    level.style.backgroundColor = "rgb(133, 133, 229)"
}

