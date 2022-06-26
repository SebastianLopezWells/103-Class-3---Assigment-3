console.log("Calculating....")
let x =0;
//functions
function calculator()
    {x++;
    let num1 = prompt("Number 1; ");
    let num2 = prompt("Number 2; ");
    basicOperations(num1, num2);
    
}
function basicOperations(N1, N2){
    //Addition
    document.getElementById("results").innerHTML+=`
    <h2>Operation ${x}</h2>
    <div class="result-container">
    <p>Addition</p>
    <p>${N1} + ${N2} = ${Number(N1)+Number(N2)}</p> 
    <p>Substraction</p>
    <p>${N1} - ${N2} = ${Number(N1)-Number(N2)}</p>
    <p>Multiplication</p>
    <p>${N1} * ${N2} = ${Number(N1)*Number(N2)}</p>
    <p>Division</p>
    <p>${N1} / ${N2} = ${Number(N1)/Number(N2)}</p>
    </div>`;
}