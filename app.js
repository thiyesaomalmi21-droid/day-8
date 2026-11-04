const customerName=[];

function btnClickName(){
    console.log("Hi");

    let name=document.getElementById("txtField").value;
    console.log(name);

    document.getElementById("lblCustName").innerText=name;

    customerName.push(name);
    console.log(customerName);
   // loadName();
   // document.getElementById("olCustomer").innerHTML+=`<li>${name}</li>`

}

function loadName(){
    document.getElementById("olCustomer").innerHTML="";
    for(let CNames of customerName){
        document.getElementById("olCustomer").innerHTML+=`<li>${CNames}</li>`
    }
}