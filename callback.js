setTimeout(() => {
  console.log("Hello");
  setTimeout(() => {
    console.log("Hello 2");
    setTimeout(() => {
      console.log("Hello 3");
      setTimeout(() => {
        console.log("Hello 4");
        setTimeout(() => {
          console.log("Hello 5");
        });
      }, 5000);
    }, 4000);
  }, 3000);
}, 2000);
