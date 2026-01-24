const callOllama = require("./ollamaClient");

async function detectIntent(userMessage) {
  const prompt = `
You are an intent classification system for a college admission chatbot.

Classify the user question into ONE of the following intents:
- fees
- eligibility
- duration
- deadline
- course_details
- unknown

Return ONLY valid JSON in this format:
{
  "intent": "",
  "courseName": ""
}

User Question:
"${userMessage}"
`;

  try {
    console.log("Calling Ollama...");
    const aiResponse = await callOllama(prompt);
    console.log("RAW AI RESPONSE:", aiResponse);
    return JSON.parse(aiResponse);
  } catch (error) {
    return { intent: "unknown", courseName: "" };
  }
}

module.exports = detectIntent;
