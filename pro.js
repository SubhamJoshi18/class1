const cart = ["pant", "shoes", "kurta"];
createOrder(cart)
  .then((orderId) => {
    return console.log(orderId);
  })
  .then((orderId) => {
    return paymentInfo(orderId);
  })
  .then((paymentId) => {
    return console.log(paymentId);
  })
  .catch((err) => {
    console.log(err);
  });

function createOrder(cart) {
  const ptr = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      throw new Error("Cart is not defiend");
    }
    let orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
  });
  return ptr;
}

function validateCart(cart) {
  return true;
}

function paymentInfo(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Payment sucessful");
    }, 5000);
  });
}

async function example() {
  const user1 = await createOrder();
  const user2 = await paymentInfo();
}
