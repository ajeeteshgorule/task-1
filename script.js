

function fetchData() {
    
    const data = fetch("/task.json")
        .then((response) => response.json())
        .then((data) => {
            a = data.data.length;

            for (i = 0; i < a; i++) {
                b = data.data[i].productList.length;
                document.getElementById("datas").innerHTML +=
                    `<div class="cosmetics"><h2>Name : ${data.data[i].name}</h2></div>`

                for (j = 0; j < b; j++) {
                    doc=data.data[i].productList[j].name;

                    document.getElementById("datas").innerHTML +=
                        `
                <div class="container-1">
                    <div class="box">
                        <div class="box-1">
                            <h2 id="name"><h2 id="nameId">Name : ${data.data[i].productList[j].name}</h2></h2>
                            <h2 id="price"><h2 id="priceId">Price : ${data.data[i].productList[j].price}<h2></h2>
                            <div class="btn">
                                <button id="atc" onClick="atc()">Add To Cart</button>
                                <button id="rfc" onClick="rfc()">Remove From Cart</button>
                            </div>
                        </div>
                    </div>
                </div>`
                    // data.data[i].productList[j].name + "<br/>";

                    

                    



                }
            }
        })
        .catch(function (err) {
            console.log(err);
        });




        
}


const item=[];

function atc(){
    let name= document.getElementById('nameId').innerHTML;
    let price= document.getElementById('priceId').innerHTML;
item.push(name,price);
console.log("Product Added to the cart.");
console.log("List of product present in cart array."+item);


}
function rfc(){
    let name= document.getElementById('nameId').innerHTML;
    let price= document.getElementById('priceId').innerHTML;
    var index = item.indexOf(name,price);
    if (index > -2) {
      item.splice(index, 2);
    }
    console.log("Product Added to the cart.");
    console.log("List of product present in cart array."+item);


}

// console.log(document.getElementById('nameId').innerHTML);