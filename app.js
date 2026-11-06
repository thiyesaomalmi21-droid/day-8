// const customerName=[];
// const itemNames=[];


// function btnClickName(){
//     //console.log("Hi");

//     let name=document.getElementById("txtField").value;
//     //console.log(name);

//     //document.getElementById("lblCustName").innerText=name;


//     customerName.push(name);
//     console.log(customerName);
//    loadName();
//    // document.getElementById("olCustomer").innerHTML+=`<li>${name}</li>`

// }

// function loadName(){
//     document.getElementById("olCustomer").innerHTML="";
//     for(let CNames of customerName){
//         document.getElementById("olCustomer").innerHTML+=`<li>${CNames}</li>`
//     }
// }
// function btnClickItem(){
//     let item=document.getElementById("itemfield").value;
//     console.log(item);

//     itemNames.push(item);
//     console.log(itemNames);

//     loadItems();
// }
// function loadItems(){
//     document.getElementById("olItem").innerHTML="";

//     for(let INames of itemNames){
//         document.getElementById("olItem").innerHTML += `<li>${INames}</li>`

//     }
// }

const customerlist = [];
const itemList = [];

function addCustomer() {
    console.log("Hi");
    let txtid = document.getElementById("txtId").value;
    let txtname = document.getElementById("txtName").value;
    let txtage = document.getElementById("txtAge").value;
    let txtaddress = document.getElementById("txtAdress").value;
    let txtsalary = document.getElementById("txtSalary").value;

    let customer = {
        id: txtid,
        name: txtname,
        age: txtage,
        address: txtaddress,
        salary: txtsalary

    }
    console.log(customer);

    customerlist.push(customer);
    console.log(customerlist);
    loadCustomerlist();

}

function loadCustomerlist() {
    let body = `
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Salary</th>
        </tr>
    `
    for (let customer of customerlist) {
        body += `
            <tr>
                <td>${customer.id}</td>
                <td>${customer.name}</td>
                <td>${customer.age}</td>
                <td>${customer.address}</td>
                <td>${customer.salary}</td>
            </tr>
        `
    }

    document.getElementById("customertable").innerHTML = body;
}


function addItem(){
    console.log("Hii");
    let txtname = document.getElementById("txtName").value;
    let txtExpDate = document.getElementById("txtEXp").value;
    let txtManufacture = document.getElementById("txtManufacture").value;
    let txtPrice = document.getElementById("txtPrice").value;

    let item = {
        name: txtname ,
         expDate: txtExpDate,
         manuDate: txtManufacture,
         price: txtPrice

     }
     itemList.push(item);

     loadItemList();
}

function loadItemList() {

     let body = `
         <tr>
             <th>Item Name</th>
             <th>Expiary Date</th>
             <th>Manufacture date</th>
             <th>Price</th>

         </tr>

     `
     for(let item of itemList){
         body+=`
             <tr>
                 <td>${item.name}</td>
                 <td>${item.expDate}</td>
                 <td>${item.manuDate}</td>
                 <td>${item.price}</td>

              </tr>

         `
     }
     document.getElementById("itemtable").innerHTML=body;
}
document.getElementById