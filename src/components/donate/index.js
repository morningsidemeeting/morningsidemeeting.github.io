import React from "react";
import { Helmet } from "react-helmet";

const Donate = () => {
  return (
    <div className="donate-container">
      <Helmet>
        <script
          src="https://www.paypal.com/sdk/js?client-id=AeZUg8uws_-pEws-KenH21kNZo7Rw4Zv8E_ibUWp69nv5pHmTTbXIeLs7m7oUHI95yKQMl13v8YdUiAP&enable-funding=venmo&currency=USD"
          data-sdk-integration-source="button-factory"
        ></script>
        <script>
          {`
        function initPayPalButton() {
          var description = document.querySelector('#smart-button-container #description');
          var amount = document.querySelector('#smart-button-container #amount');
          var descriptionError = document.querySelector('#smart-button-container #descriptionError');
          var priceError = document.querySelector('#smart-button-container #priceLabelError');
          var invoiceid = document.querySelector('#smart-button-container #invoiceid');
          var invoiceidError = document.querySelector('#smart-button-container #invoiceidError');
          var invoiceidDiv = document.querySelector('#smart-button-container #invoiceidDiv');

          var elArr = [description, amount];

          if (invoiceidDiv.firstChild.innerHTML.length > 1) {
            invoiceidDiv.style.display = "block";
          }

          var purchase_units = [{"amount":{"currency_code":"USD","value":1,"breakdown":{"item_total":{"currency_code":"USD","value":1}}},"items":[{"name":"item name","unit_amount":{"currency_code":"USD","value":1},"quantity":"1","category":"DONATION"}]}]

          function validate(event) {
            return event.value.length > 0;
          }

          paypal.Buttons({
            style: {
              color: 'gold',
              shape: 'rect',
              label: 'donate',
              layout: 'vertical',
              
            },

            onInit: function (data, actions) {
              actions.disable();

              if(invoiceidDiv.style.display === "block") {
                elArr.push(invoiceid);
              }

              elArr.forEach(function (item) {
                item.addEventListener('keyup', function (event) {
                  var result = elArr.every(validate);
                  if (result) {
                    actions.enable();
                  } else {
                    actions.disable();
                  }
                });
              });
            },

            onClick: function () {
              if (description.value.length < 1) {
                descriptionError.style.visibility = "visible";
              } else {
                descriptionError.style.visibility = "hidden";
              }

              if (amount.value.length < 1) {
                priceError.style.visibility = "visible";
              } else {
                priceError.style.visibility = "hidden";
              }

              if (invoiceid.value.length < 1 && invoiceidDiv.style.display === "block") {
                invoiceidError.style.visibility = "visible";
              } else {
                invoiceidError.style.visibility = "hidden";
              }

              purchase_units[0].description = description.value;
              purchase_units[0].amount.value = amount.value;
              purchase_units[0].amount.breakdown.item_total.value = amount.value;
              purchase_units[0].items[0].unit_amount.value = amount.value;

              if(invoiceid.value !== '') {
                purchase_units[0].invoice_id = invoiceid.value;
              }
            },

            createOrder: function (data, actions) {
              return actions.order.create({
                purchase_units: purchase_units,
              });
            },

            onApprove: function (data, actions) {
              return actions.order.capture().then(function (orderData) {

                // Full available details
                console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

                // Show a success message within this page, e.g.
                const element = document.getElementById('paypal-button-container');
                element.innerHTML = '';
                element.innerHTML = '<h3>Thank you htmlFor your payment!</h3>';

                // Or go to another URL:  actions.redirect('thank_you.html');
                
              });
            },

            onError: function (err) {
              console.log(err);
            }
          }).render('#paypal-button-container');
        }
        document.onreadystatechange = function () {
          if (document.readyState === 'complete') {
            initPayPalButton();
          }
        }
        
      `}
        </script>
      </Helmet>
      <div id="smart-button-container">
        <div style={{ textAlign: "center" }}>
          <label htmlFor="description">Description </label>
          <input
            type="text"
            name="descriptionInput"
            id="description"
            maxlength="127"
            value=""
          />
        </div>
        <p
          id="descriptionError"
          style={{ visibility: "hidden", color: "red", textAlign: "center" }}
        >
          Please enter a description
        </p>
        <div style={{ textAlign: "center" }}>
          <label htmlFor="amount">Donation Amount </label>
          <input name="amountInput" type="number" id="amount" value="" />
          <span> USD</span>
        </div>
        <p
          id="priceLabelError"
          style={{ visibility: "hidden", color: "red", textAlign: "center" }}
        >
          Please enter a price
        </p>
        <div id="invoiceidDiv" style={{ textAlign: "center", display: "none" }}>
          <label htmlFor="invoiceid"> </label>
          <input
            name="invoiceid"
            maxlength="127"
            type="text"
            id="invoiceid"
            value=""
          />
        </div>
        <p
          id="invoiceidError"
          style={{ visibility: "hidden", color: "red", textAlign: "center" }}
        >
          Please enter an Invoice ID
        </p>
        <div
          style={{ textAlign: "center", marginTop: "0.625rem" }}
          id="paypal-button-container"
        ></div>
      </div>
    </div>
  );
};

export default Donate;
