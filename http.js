const http = require("http");
//endpont = /
const server = http.createServer((req, res) => {
  console.log(req);
  console.log(req.url);
  const pathName = req.url;
  if (pathName === "/" || pathName === "subham") {
    res.end("This is subham Website");
  } else if (pathName === "/deepesh") {
    res.end("Welcome to my website");
  } else {
    res.end("PAGE NOT FOUND");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
