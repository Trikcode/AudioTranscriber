const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const bodyparser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "",
});
const openai = new OpenAIApi(configuration);

// app.use(express.json());
app.use(bodyparser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//post
app.post("/audio", async (req, res) => {
  console.log(req.body); // { filename: 'greater.mp3' }
  const { filename } = req.body;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Correct this to standard English:\n\nShe no went to the market.",
    temperature: 0,
    max_tokens: 60,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  console.log(response.data);
  res.send(response.data);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
