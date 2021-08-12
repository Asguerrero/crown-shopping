import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51JN7HqIyvUs6hJKWLl9NZLq7fraptvYTkLfM7D0czP95eiviSezGDyeleydYldMhV1vgF9kRwREjGqFC5o8I6ajY00fsKhZGVZ"

    const onToken = token => {
        console.log(token);
        alert('Payment successful')
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='CROWN Store'
            billingAddress
            shippingAddress
            image='https://stripe.com/img/documentation/checkout/marketplace.png'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;