const axios = require("axios");

async function callOllama(prompt) {
  console.log('ollama called')
  const response = await axios.post(
    "http://localhost:11434/api/generate",
    {
      model: "mistral",
      prompt: prompt,
      stream: false,
    },
    {
      timeout: 60000,
    },
  );
  return response.data.response.trim();
}

module.exports = callOllama;
