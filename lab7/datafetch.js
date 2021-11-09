

window.onload = function(){
    
     randomFetchData();
    document.getElementById("btn").addEventListener("click", randomFetchData)
}

async function randomFetchData(){

    let dataEmp= await fetch('https://randomuser.me/api/?results=5');
   
    let employees= await dataEmp.json();
    
    createEmpData(employees.results)

}

function createEmpData(employees){

    const divWhole=document.getElementById("employess");
          divWhole.innerHTML= " ";

    for(let i=0; i<employees.length; i++){

        let empData = employees[i];


        let div1=document.createElement("div");
            div1.setAttribute("class", "col-4")
        let img=document.createElement("img");
            img.src=empData.picture.large
            div1.append(img);
        let div2=document.createElement("div");
            div2.setAttribute("class", "col-8 text-end")
            let p1=document.createElement("p")
                p1.setAttribute("class", "fw-bold")
                p1.innerHTML= empData.name.first + " " + empData.name.last
                div2.appendChild(p1)
            let p2=document.createElement("p");
                p2.innerHTML=empData.gender;
                div2.append(p2);
            let p3=document.createElement("p")
                p3.innerHTML=empData.email;
                div2.append(p3);
            let hr1=document.createElement("hr")
             
            let row=document.createElement("div")
            row.setAttribute("class", "row")
            divWhole.appendChild(row);
            divWhole.append(hr1);
            row.appendChild(div1)
            row.appendChild(div2);
        

    }

    
}

