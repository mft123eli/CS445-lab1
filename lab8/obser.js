
const {from} = rxjs;
window.onload = function(){
     document.getElementById("btn").addEventListener("click",async function(){
        const noOfemployee = document.getElementById("noOfEmployee");
        const empList = await fetch('https://randomuser.me/api/?results=' + noOfemployee.value);
        const empResponse = await empList.json();
        empDataList(empResponse.results);
});
} 

function empDataList(emplist){
    
    const employee = document.getElementById("employess");
    employee.innerHTML= '';

    from(emplist)
        .subscribe(empl => {

            let template = `
            <div class="col-4" >
                ${empl.name.first} ${empl.name.last}
            </div>
            <div class="col-8">
                <p class="fw-bold">Location</p>
                <p> ${empl.location.street.number} ${empl.location.street.name}</p>
                <p> ${empl.location.city} ${empl.location.state}${empl.location.country}${empl.location.postcode}</p>

            </div>
            <hr>
            `
            let div =document.createElement("div");
            div.classList = "row";
            div.innerHTML = template;
            employee.appendChild(div);
        });


}