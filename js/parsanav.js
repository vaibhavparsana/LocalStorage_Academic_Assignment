function save() {
    let cName = document.getElementById("cName").value
    localStorage.setItem("cName", cName);

    let cEmail = document.getElementById("cEmail").value
    localStorage.setItem("cEmail", cEmail);

    let product = document.getElementById("product").value
    localStorage.setItem("product", product);

    let quantity = document.getElementById("quantity").value
    localStorage.setItem("quantity", quantity);

    let price = document.getElementById("price").innerHTML
    localStorage.setItem("price", price);
}

function recieve() {
    document.getElementById("cNameQuote").innerHTML = localStorage.getItem("cName");
    document.getElementById("cEmailQuote").innerHTML = localStorage.getItem("cEmail");
    document.getElementById("productQuote").innerHTML = localStorage.getItem("product");
    document.getElementById("quantityQuote").innerHTML = localStorage.getItem("quantity");
    document.getElementById("priceQuote").innerHTML = localStorage.getItem("price");

    var quan = document.getElementById("quantityQuote").innerHTML;
    console.log(quan);
    var quanPrice;
    quan = parseInt(quan);
    quanPrice = 5 * quan;
    document.getElementById("calPriceQuote").innerHTML = "$"+quanPrice;

}