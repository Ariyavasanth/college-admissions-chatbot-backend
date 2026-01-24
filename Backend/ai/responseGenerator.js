const callOllama = require("./ollamaClient");

async function generateResponse(course, userQuestion) {
  const prompt = `
You are a professional college admission chatbot.

IMPORTANT RULES:
- Answer ONLY using the data provided below
- Do NOT add extra information
- If data is missing, say it is not available

Course Data:
Course Name: ${course.courseName}
Department: ${course.department}
Fees: ${course.fees}
Duration: ${course.duration}
Eligibility: ${course.eligibility}
Deadline: ${course.deadline}

User Question:
"${userQuestion}"
`;

  return await callOllama(prompt);
}

module.exports = generateResponse;
