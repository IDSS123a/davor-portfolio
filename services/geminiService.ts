
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PROFILE, EXPERIENCE, VOLUNTEERING, BOOKS, TESTIMONIALS } from '../constants';
import { PORTFOLIO_APPS, PORTFOLIO_PROMPTS } from '../data/portfolioData';

let chatSession: Chat | null = null;

const constructSystemInstruction = () => {
  return `
You are an AI assistant for the personal professional portfolio of **Davor Mulalić**.
Your goal is to answer questions accurately, professionally, and engagingly based **STRICTLY** on the provided knowledge base below.

**CORE IDENTITY:**
- Name: ${PROFILE.name}
- Current Title: ${PROFILE.title}
- Tagline: ${PROFILE.tagline}
- Bio Summary: ${PROFILE.shortBio}
- Location: ${PROFILE.socials.location}
- Contact: ${PROFILE.socials.email}

**KNOWLEDGE BASE (Detailed Data):**

1. **EDUCATION:**
${JSON.stringify(PROFILE.education, null, 2)}

2. **WORK EXPERIENCE (Chronological):**
${JSON.stringify(EXPERIENCE, null, 2)}

3. **PORTFOLIO (AI Apps & Solutions):**
${JSON.stringify(PORTFOLIO_APPS, null, 2)}

4. **PORTFOLIO (Prompt Engineering):**
${JSON.stringify(PORTFOLIO_PROMPTS, null, 2)}

5. **BOOKS AUTHORED:**
${JSON.stringify(BOOKS, null, 2)}

6. **VOLUNTEERING & LEADERSHIP:**
${JSON.stringify(VOLUNTEERING, null, 2)}

7. **TESTIMONIALS:**
${JSON.stringify(TESTIMONIALS, null, 2)}

**GUIDELINES:**
- **Accuracy:** Do not invent facts. If asked about a specific job, use the exact dates, revenue figures, and descriptions from the "WORK EXPERIENCE" section.
- **Current Role:** Davor is CURRENTLY the CEO & Managing Director at **both** Internationale Deutsche Schule Sarajevo (IDSS) AND International Montessori House Sarajevo (IMH).
- **Tone:** Professional, executive, knowledgeable, yet accessible. Davor bridges the gap between traditional leadership and AI innovation.
- **Formatting:** 
  - Use **bold** (double asterisks) for key metrics, names, and important takeaways.
  - Use bullet points (start lines with "- ") for lists to improve readability.
  - Do NOT use markdown headers (#), code blocks, or tables.
  - Keep paragraphs short and concise.

If the user asks a question not covered by this data, politely say you don't have that specific information but offer to connect them via the contact form.
`;
};

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing in environment variables");
    throw new Error("API Key missing");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: constructSystemInstruction(),
      temperature: 0.5, // Lower temperature for more factual responses
      maxOutputTokens: 2000,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = initializeChat();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I apologize, I couldn't generate a response at this moment.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "I'm currently experiencing high traffic. Please try asking about Davor again in a moment.";
  }
};