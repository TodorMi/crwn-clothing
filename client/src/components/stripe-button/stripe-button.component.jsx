import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Logo from "../../assets/crown.svg";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IVAh0EiRmpMwH9NtU7QwLuKoVyODCTU6UBrYECd0x1F3ZBRZ8pGETQuFX7qeAl6Pbf2IlmHbXtMdMhasvl6Ba0z00kfzHlv4P';

    const onToken = (token) => {
      axios({
        url: "payment",
        method: "post",
        data: {
          amount: priceForStripe,
          token: token,
        },
      })
        .then((response) => {
          alert("Payment successful!");
        })
        .catch((error) => {
          console.log("Payment error: ", error);
          alert(
            "There was an issue with your payment. Please make sure you use the provided credit card!"
          );
        });
    };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
