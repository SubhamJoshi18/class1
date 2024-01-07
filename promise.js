const p1 = new Promise((resolve, reject) => {
  resolve("This is p1");
});

const p2 = new Promise((resolve, reject) => {
  resolve("This is p2");
});

async function test() {
  console.log("First");
  await p1;
  console.log("first 11");
  console.log(p1);

  console.log("second");
  await p2;
  console.log("second 11");
  console.log(p2);
}

test();

const cart = ["pant", "shoes", "kurta"];
createOrder(cart).then((orderId) => {
  console.log(orderId);
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
