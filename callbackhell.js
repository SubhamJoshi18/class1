const cart = ["kurta", "pants", "shirts"];

api.createOrder(cart, (orderId) => [
  api.paymentInFO(
    (paymentId,
    (paymentId) => {
      api.orderSummary((orderSum) => {
        {
          api.paymentDisplay((display) => {
            console.log(display);
          });
        }
      });
    })
  ),
]);
