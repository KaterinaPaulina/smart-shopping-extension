const SmartShoppingExtension = {

  showProductTitle: function () {
      var products = document.querySelectorAll(".productCard__title");
      products.forEach(element => console.log(element.textContent));
  },


 createLabel: function(text, cheap) {
    var label = document.createElement('div');
    console.log(label);
    if (cheap) {
      label.style.cssText = "background:green; padding: 5px 6px; color: white; margin: 0 auto; max-width: 100%; ";
    } else {
      label.style.cssText = "background:#bf2222; padding: 5px 6px; color: white; margin: 0 auto; max-width: 100%;";
    }

    label.innerText = text;

    return label;

  },

  addButtons: function () {
    var pricesInfo = document.querySelectorAll(".priceWrap");
    pricesInfo.forEach((price) => {
      var button = document.createElement("button");
      button.innerText = 'Porovnej cenu';
      button.style.cssText = "width: 150px;font-size: 13px;height: 25px; padding: 0 14px; line-height: 25px; margin: 5px auto; background: #e89c06; border-radius: 50px;";
      price.insertAdjacentElement('beforebegin', button);

      button.addEventListener("click", function (event) {
        var heurekaPrice = 120;
        var rohlikPriceElement = button.closest('.cardInfo').querySelector(".offscreen").textContent;
        console.log(button.closest('.productCard__wrapper').querySelector('.productCard__title').textContent);
        var rohlikPrice = parseFloat(rohlikPriceElement.split(/\s+/)[0]);

        if (heurekaPrice >= rohlikPrice) {
            var text = 'Dobrá cena';
            var label = SmartShoppingExtension.createLabel(text, true);
            price.insertAdjacentElement('beforebegin', label);
            alert(text);
        } else {
            var percentage = Math.round(((rohlikPrice - heurekaPrice)/heurekaPrice)*100);
            var text = 'Cena na Rohlíku je dražší o '+percentage+" %";
            var label = SmartShoppingExtension.createLabel(text, false);
            price.insertAdjacentElement('beforebegin', label);
            alert(text);
        }
      });
    });
  }

}


window.setInterval(SmartShoppingExtension.addButtons, 10000);
