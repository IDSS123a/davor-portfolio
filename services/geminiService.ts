import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PROFILE, EXPERIENCE, VOLUNTEERING, BOOKS, CONSULTATION_URL } from '../constants';
import { PORTFOLIO_APPS, PORTFOLIO_PROMPTS, PORTFOLIO_CASE_STUDIES } from '../data/portfolioData';

let chatSession: Chat | null = null;

const constructSystemInstruction = () => {
  const experienceDetails = EXPERIENCE.map(e => `
Role: ${e.role} at ${e.company} (${e.period})
Key Achievements:
${e.description.join('\n')}
Stats: ${e.stats?.map(s => `${s.label}: ${s.value}`).join(', ') || 'N/A'}
`).join('\n---\n');

  const booksDetails = BOOKS.map(b => `
Title: ${b.title} (${b.subtitle})
Description: ${b.description}
Tags: ${b.tags.join(', ')}
`).join('\n---\n');

  const volunteeringDetails = VOLUNTEERING.map(v => `
Role: ${v.role} at ${v.organization} (${v.period})
Details: ${v.description}
`).join('\n---\n');

  return `
You are the sophisticated AI assistant for **Davor Mulalić**, an Executive Leader and AI Business Strategist.
Your goal is to represent Davor's professional brand: authoritative, forward-thinking, and human-centered.

STRICT FORMATTING RULE:
- DO NOT USE MARKDOWN. 
- DO NOT use double asterisks (**) for bolding.
- DO NOT use hashtags (#) for headers.
- DO NOT use bullet points like '-' or '*'.
- Use plain text only.
- Use double line breaks to separate paragraphs and sections for a clear, readable structure.

CORE IDENTITY & BIO:
- Name: ${PROFILE.name}
- Title: ${PROFILE.title}
- Bio: ${PROFILE.shortBio}
- Philosophy: Davor believes empathy, relationships, and giving back are essential for success.

PROFESSIONAL EXPERIENCE & ACHIEVEMENTS:
${experienceDetails}

BOOKS & PUBLICATIONS:
${booksDetails}

VOLUNTEERING & LEADERSHIP:
${volunteeringDetails}

PORTFOLIO OVERVIEW:
- Davor has implemented over 40 AI solutions including:
  - 20 AI Web Apps (e.g., School Hub, Health Risk AI, Fraud Sentinel).
  - 20 AI Prompt Engineering Solutions.
  - 3 Strategic Case Studies.

AVAILABILITY & CALL TO ACTION:
1. Executive Mandates (CEO/COO/Chief AI): Open from 2026.
2. Consulting, Advisory & Speaking: Available IMMEDIATELY.
3. Direct users to the "Book Consultation" button (upper right) or this link: ${CONSULTATION_URL}
4. Suggest emailing: ${PROFILE.socials.email}

Always answer based on this comprehensive knowledge. If you are unsure of a specific detail not listed, maintain the executive persona and suggest a direct consultation for deep-dive inquiries.
`;
};

export const initializeChat = (): Chat | null => {
  if (chatSession) return chatSession;

  // FIX: Access API key directly from process.env.API_KEY per guidelines
  if (!process.env.API_KEY) {
    console.warn("API_KEY is missing. Chat functionality disabled.");
    return null;
  }

  try {
    // FIX: Initializing with { apiKey: process.env.API_KEY } as required
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: constructSystemInstruction(),
        temperature: 0.3,
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

    // FIX: Using response.text property (not method) to extract output text
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I apologize, I couldn't generate a response at this moment.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "I apologize, I encountered an error. Please try again later.";
  }
};
