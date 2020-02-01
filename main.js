const SmartShoppingExtension = {

  showProductTitle: function () {

      var products = document.querySelectorAll(".productCard__title");

      products.forEach(element => console.log(element.textContent));
  },

  addButtons: function () {
    var pricesInfo = document.querySelectorAll(".priceWrap");

    pricesInfo.forEach((price) => {
        var button = document.createElement("button");
        button.innerText = 'Compare the price';
        button.className = 'compare-price-btn';
        price.appendChild(button);

        // tady bude event on click
      });


  }
}


//window.setInterval(SmartShoppingExtension.addButtons, 1000);
