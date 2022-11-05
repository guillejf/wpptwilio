const express = require("express");

//const accountSid = "PONER LO CORRECTO";
//const authToken = "AGREGAR SU TOKEN";
const client = require("twilio")(accountSid, authToken);

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  if (req.body.Body == "hola") {
    client.messages
      .create({
        body: "Gracias por saludar",
        from: "whatsapp:+PONER TU TEL DE TWILIO",
        to: "whatsapp:+PONER TU TEL PERSONAL",
      })
      .then((message) => console.log("la respuesta es" + message.body))
      .done();
  } else {
    client.messages
      .create({
        body: "Saludame primero",
        from: "whatsapp:+PONER TU TEL DE TWILIO",
        to: "whatsapp:+PONER TU TEL PERSONAL",
      })
      .then((message) => console.log("la respuesta es" + message.body))
      .done();
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
