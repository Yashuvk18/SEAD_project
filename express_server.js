const express = require('express');
const axios = require('axios');
const { apiPublicKey, apiSecretKey } = require('./config');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
