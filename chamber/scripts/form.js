document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("myForm").addEventListener("submit", handleForm);
  });
  
  function handleForm(ev) {
    ev.preventDefault(); //stop the page reloading
    //console.dir(ev.target);
    let myForm = ev.target;
    let fd = new FormData(myForm);
  
    //add more things that were not in the form
    fd.append("api-key", "myApiKey");
  
    //look at all the contents
    for (let key of fd.keys()) {
      console.log(key, fd.get(key));
    }
    let json = convertFD2JSON(fd);
  
    //send the request with the formdata
    let url = "http://localhost:3000/";
    let h = new Headers();
    h.append("Content-type", "application/json");
  
    let req = new Request(url, {
      headers: h,
      body: json,
      method: "POST"
    });
    //console.log(req);
    fetch(req)
      .then((res) => res.json())
      .then((data) => {
        console.log("Response from server");
        console.log(data);
      })
      .catch(console.warn);
  }
  
  function convertFD2JSON(formData) {
    let obj = {};
    for (let key of formData.keys()) {
      obj[key] = formData.get(key);
    }
    return JSON.stringify(obj);
  }
  const http = require("http");
  
  const server = http.createServer(function (req, res) {
    req.on("data", function (data) {
      //handle data as it is received... for POST requests
    });
    req.on("end", function () {
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.writeHead(200, "OK");
  
      res.end('{ "data": "just a plain old json reply" }');
    });
  });
  
  server.listen(3000, (err) => {
    if (err) {
      console.log("bad things");
      return;
    }
    console.log("listening on port 3000");
  });
  