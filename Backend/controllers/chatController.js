const Course = require("../model/Course");
const detectIntent = require("../ai/intentDetector");
const generateResponse = require("../ai/responseGenerator");

exports.chat = async (req, res) => {
  try {
    const  {message}  = req.body;
    
    console.log(message)

    if (!message) {
      return res.json({ reply: "Please enter a valid question." });
    }

    // 1️⃣ AI-based Intent Detection
    
    const { intent, courseName } = await detectIntent(message);
    console.log("Intent Result:", intent, courseName);

    // 2️⃣ Handle unrelated questions
    if (intent === "unknown") {
      return res.json({
        reply:
          "I can help with college admission and course-related questions such as fees, eligibility, duration, and deadlines.",
      });
    }

    // 3️⃣ Fetch course from MongoDB (Admin data only)
    const course = await Course.findOne({
      courseName: new RegExp(courseName, "i"),
      isActive: true,
    });

    if (!course) {
      return res.json({
        reply: "Sorry, this course information is currently not available.",
      });
    }

    // 4️⃣ NLP Answer Generation (LLaMA / Mistral)
    const aiReply = await generateResponse(course, message);

    res.json({ reply: aiReply });
  } catch (error) {
    console.error("Chatbot Error:", error);
    res.status(500).json({
      reply: "Something went wrong. Please try again later.",
    });
  }
};
