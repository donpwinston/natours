import axios from 'axios';
import showAlert from './alerts';

const stripe = Stripe('pk_test_7yHlbdk2BZDLqXt6sq814VYE007ykf3QjC');

export const bookTour = async tourId => {
  try {
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
