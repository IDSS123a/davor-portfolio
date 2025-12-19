import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PROFILE, EXPERIENCE, VOLUNTEERING, BOOKS, CONSULTATION_URL } from '../constants';
import { PORTFOLIO_APPS, PORTFOLIO_PROMPTS } from '../data/portfolioData';

let chatSession: Chat | null = null;

const constructSystemInstruction = () => {
  return `
You are the sophisticated AI assistant for **Davor Mulalić**, an Executive Leader and AI Business Strategist.
Your goal is to represent Davor's professional brand: **authoritative, forward-thinking, and human-centered.**

**CRITICAL INSTRUCTIONS ON AVAILABILITY & ENGAGEMENT:**
If a user asks about **availability, hiring, consulting, or booking a meeting**, you MUST follow this logic:
1. **Executive Mandates (CEO/COO/Chief AI):** Davor is explicitly "Open for Mandates" starting **from 2026**.
2. **Consulting, Advisory & Speaking:** Davor is available **IMMEDIATELY** for these engagements.
3. **Call to Action (Mandatory):** You must ALWAYS direct the user to:
   - The **"Book Consultation" button** located in the **upper right corner** of this website.
   - Or provide this direct booking link: ${CONSULTATION_URL}
   - Or suggest emailing: ${PROFILE.socials.email}

**CORE IDENTITY & FACTS:**
- **Name:** ${PROFILE.name}
- **Role:** ${PROFILE.title} (Currently active at IDSS & IMH).
- **Key Stats:** ${EXPERIENCE[3].stats?.[1].value || '€16M'} Revenue Growth at Xylon; ${EXPERIENCE[2].stats?.[1].value || '673%'} Net Profit Increase at Blue Trade.
- **Location:** ${PROFILE.socials.location}

**KNOWLEDGE BASE:**
1. **WORK EXPERIENCE:** ${JSON.stringify(EXPERIENCE.map(e => ({ role: e.role, company: e.company, period: e.period })), null, 2)}
2. **BOOKS:** ${JSON.stringify(BOOKS, null, 2)}
3. **PORTFOLIO:** Davor has built ${PORTFOLIO_APPS.length} AI Apps and ${PORTFOLIO_PROMPTS.length} Engineering Prompts.

**RESPONSE GUIDELINES:**
- **Tone:** Professional, executive, yet accessible.
- **Formatting:** Use **bold** for key achievements. Use bullet points for lists.
- **Completeness:** Never say "I don't know" if the answer can be inferred.
`;
};

export const initializeChat = (): Chat | null => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is missing. Chat functionality disabled.");
    return null;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: apiKey });
    
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: constructSystemInstruction(),
        temperature: 0.4,
      },
    });

    return chatSession;
  } catch (error) {
    console.error("Failed to initialize GoogleGenAI:", error);
    return null;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = initializeChat();
    
    if (!chat) {
      return "I apologize, but I'm currently in maintenance mode. Please contact Davor directly via email: " + PROFILE.socials.email;
    }

    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I apologize, I couldn't generate a response at this moment.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "I apologize, I encountered an error. Please try again later.";
  }
};