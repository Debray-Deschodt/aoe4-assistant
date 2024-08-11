const express = require("express");
const axios = require("axios");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/proxy/*", async (req, res) => {
  const url = `https://${decodeURIComponent(req.params[0])}`;
  console.log(`Requesting URL: ${url}`);
  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
      },
    });
    res.send(response.data);
  } catch (error) {
    console.error("Error fetching the URL:", error.message);
    res.status(error.response ? error.response.status : 500).send(error.message);
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
