import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_vpob7rb2j8BjkAXVTxryYBl400sLEJeJma';
  const onToken = token => {
    console.log(token);
  };

  return (
    <StripeCheckout
      name='Clothing Store' // the pop-in header title
      description={`Your total is $${price}`} // the pop-in header subtitle
      image='https://svgshare.com/i/CUz.svg' // the pop-in header image (default none)
      //   ComponentClass='div'
      label='Pay Now' // text inside the Stripe button
      panelLabel='Give Money' // prepended to the amount in the bottom pay button
      amount={priceForStripe} // cents
      //   currency='USD'
      stripeKey={publishableKey}
      //   locale='zh'
      //   email='info@vidhub.co'
      // Note: Enabling either address option will give the user the ability to
      // fill out both. Addresses are sent as a second parameter in the token callback.
      shippingAddress
      billingAddress
      // Note: enabling both zipCode checks and billing or shipping address will
      // cause zipCheck to be pulled from billing address (set to shipping if none provided).
      //   zipCode={false}
      //   alipay // accept Alipay (default false)
      //   bitcoin // accept Bitcoins (default false)
      //   allowRememberMe // "Remember Me" option (default true)
      token={onToken} // submit callback
    />
  );
};

export default StripeCheckoutButton;
