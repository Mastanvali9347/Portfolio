// Utility for AI interactions
export const getAIResponse = async (prompt, context = "general") => {
  try {
    // Simulated API call with a delay to show 'connecting' state
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const responses = {
      mahabharata: [
        "In the Bhagavad Gita, Lord Krishna advises Arjuna: 'You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.'",
        "The Mahabharata teaches that Dharma (righteousness) is the foundation of a stable society.",
        "The Kurukshetra War was not just a battle for land, but a struggle for Truth and Justice.",
        "Character is destiny. The choices made by Karna, Bhishma, and Yudhisthira define the epic's moral complexity."
      ],
      general: [
        "Artificial Intelligence is the bridge between human creativity and computational power.",
        "Building scalable systems requires a balance of clean architecture and performant code.",
        "The future of web development lies in immersive, AI-integrated experiences."
      ]
    };

    const targetResponses = context === "mahabharata" ? responses.mahabharata : responses.general;
    return targetResponses[Math.floor(Math.random() * targetResponses.length)];
  } catch (error) {
    console.error("AI Error:", error);
    return "The divine connection was interrupted. Please try again.";
  }
};
