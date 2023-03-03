const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const bodyparser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
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
  const resp = await openai.createTranscription(
    fs.createReadStream(filename),
    "whisper-1"
  );
  console.log(resp);
  res.send(resp);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
