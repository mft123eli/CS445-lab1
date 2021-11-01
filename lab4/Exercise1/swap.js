window.onload=function(){

    document.getElementById("btn").addEventListener("click",function(){
        

        let pict1=document.getElementById("pict1");
        let pict2=document.getElementById("pict2");
           let temp=pict1.src;
            pict1.src=pict2.src;
            pict2.src=temp;

    });

}
