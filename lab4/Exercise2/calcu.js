window.onload=function(){

    document.getElementById("btn").onclick=function(){

        
    let sum=parseInt(document.getElementById("num1").value) + parseInt(document.getElementById("num2").value)
    document.getElementById("res").value= sum;
    }

}