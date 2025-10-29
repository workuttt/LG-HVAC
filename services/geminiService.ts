import { GoogleGenAI, Chat } from "@google/genai";

// Fix: Aligned API key handling with coding guidelines. The API key is now sourced
// directly from process.env.API_KEY, which resolves the TypeScript error related
// to 'import.meta.env'. Per guidelines, the key is assumed to be available.
const ai = new GoogleGenAI({apiKey: process.env.API_KEY});

const systemInstruction = `You are the 'LG MEA HVAC HUB Expert Assistant'. Your sole purpose is to provide expert, accurate, and helpful information on two specific topics:
1.  **LG HVAC Products:** Answer questions about LG's HVAC product line, including features, benefits, and differences between models like VRF Systems, Chillers, and Air Purifiers. Be clear and easy for customers to understand.
2.  **MEA HVAC HUB Academy:** Provide details about the academy, including available training courses, its location in Jebel Ali, Dubai, and the process for registration. When asked about booking, registration, contact details for training, or contact for support, direct users to the following URL: https://b2bmkt.lge.com/LP=13887

**Formatting Guidelines:**
- When you create lists, you **must** use a bolded title (e.g., **Key Features:**) followed by a numbered list for the items (1., 2., 3., etc.).
- Do not use asterisks (*) or dashes (-) for list items.

Your responses must be professional, concise, and strictly limited to these two areas. Do not answer questions outside of this scope. If asked about an unrelated topic, politely state that you can only assist with LG HVAC products and the MEA HVAC HUB Academy.`;

const chat: Chat = ai.chats.create({
  model: 'gemini-2.5-flash',
  config: {
    systemInstruction,
  },
});

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    // Provide a more specific error message if the API key might be the issue
    if (error instanceof Error && error.message.includes('API key')) {
         return "I'm sorry, there seems to be an issue with the API configuration. Please contact the administrator.";
    }
    return "I'm sorry, I'm having trouble connecting to the expert assistant right now. Please check your connection or try again later.";
  }
};
