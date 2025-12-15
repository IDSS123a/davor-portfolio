
```json
{
  "project_meta": {
    "name": "Davor Mulalić - C-Level AI Leader Portfolio",
    "description": "High-performance personal portfolio website featuring an AI-powered assistant (Gemini), interactive portfolio, and comprehensive professional history.",
    "version": "1.0.0",
    "stack": {
      "framework": "React 18",
      "build_tool": "ESBuild / Browser-native ESM (via index.html importmap)",
      "styling": "Tailwind CSS (CDN)",
      "ai_engine": "@google/genai",
      "icons": "Lucide (SVG implementation)",
      "deployment_target": "Static Web Host"
    }
  },
  "configuration": {
    "metadata": {
      "title": "Davor Mulalić | Executive Leader & AI Business Strategist",
      "theme_colors": {
        "light": "#e8eae3",
        "dark": "#373833",
        "accent": "#035EA1"
      },
      "permissions": ["microphone"]
    },
    "environment_variables": {
      "API_KEY": "Required for Gemini AI Chat features"
    }
  },
  "file_system_blueprint": [
    {
      "path": "index.html",
      "type": "entry_html",
      "spec": {
        "head": {
          "meta_tags": ["viewport", "description", "keywords", "author", "OpenGraph", "Twitter"],
          "scripts": [
            {
              "src": "https://cdn.tailwindcss.com",
              "config": {
                "darkMode": "media",
                "theme": {
                  "extend": {
                    "colors": { "theme": { "light": "#e8eae3", "dark": "#373833", "accent": "#035EA1" } },
                    "fontFamily": { "sans": ["Inter"], "serif": ["Playfair Display"] },
                    "animation": { "fade-in-up": "fadeInUp 0.3s ease-out forwards", "spin-slow": "spin 10s linear infinite" }
                  }
                }
              }
            },
            {
              "type": "importmap",
              "imports": {
                "@google/genai": "https://esm.sh/@google/genai@^1.33.0",
                "react": "https://esm.sh/react@18.2.0",
                "react-dom/client": "https://esm.sh/react-dom@18.2.0/client"
              }
            }
          ],
          "fonts": ["Inter", "Playfair Display"]
        },
        "body": {
          "classes": "bg-theme-light dark:bg-theme-dark text-theme-dark dark:text-theme-light antialiased transition-colors duration-300",
          "root_id": "root"
        }
      }
    },
    {
      "path": "index.tsx",
      "type": "entry_script",
      "content": "Mounts <App /> to #root using ReactDOM.createRoot within React.StrictMode."
    },
    {
      "path": "types.ts",
      "type": "interface_definition",
      "exports": [
        "ExperienceItem", 
        "VolunteeringItem", 
        "TestimonialItem", 
        "ChatMessage", 
        "NavItem", 
        "BookItem", 
        "PortfolioItem", 
        "ComplexityLevel"
      ]
    },
    {
      "path": "constants.ts",
      "type": "data_store",
      "exports": {
        "URLS": {
          "CONSULTATION_URL": "https://davormulali.zohobookings.eu/#/253150000000046052",
          "BOOK_SUBMISSION_URL": "mailto:mulalic71@gmail.com?subject=Pre-order...",
          "AMAZON_AUTHOR_URL": "https://www.amazon.com/s?k=Davor+Mulali%C4%87&i=digital-text"
        },
        "PROFILE": {
          "name": "Davor Mulalić",
          "title": "C-Level AI Leader",
          "bio": "Detailed executive bio...",
          "images": ["profile", "about1", "about2"],
          "socials": ["linkedin", "email", "phone", "location"]
        },
        "DATA_ARRAYS": ["NAV_ITEMS", "EXPERIENCE", "BOOKS", "VOLUNTEERING", "TESTIMONIALS"],
        "SYSTEM_INSTRUCTION": "Prompt engineering for the AI assistant defining persona, constraints, and knowledge base."
      }
    },
    {
      "path": "data/portfolioData.ts",
      "type": "data_store",
      "exports": {
        "PORTFOLIO_APPS": "Array of 20 AI/Web App items",
        "PORTFOLIO_PROMPTS": "Array of 40 Prompt Engineering items",
        "PORTFOLIO_CASE_STUDIES": "Array of 3 Strategic Case Studies"
      }
    },
    {
      "path": "services/geminiService.ts",
      "type": "service",
      "logic": {
        "constructSystemInstruction": "Returns a string combining user instructions with critical availability logic (Mandates 2026 vs Consulting Now) and data injection.",
        "initializeChat": "Creates GoogleGenAI instance using process.env.API_KEY. Configures model 'gemini-2.5-flash'.",
        "sendMessageToGemini": "Async function to send user message. Contains try/catch block returning user-friendly error strings on failure."
      }
    },
    {
      "path": "App.tsx",
      "type": "layout_component",
      "structure": [
        "Navbar",
        "Hero",
        "About",
        "Experience",
        "Books Section (Inline implementation)",
        "Portfolio",
        "Volunteering",
        "Testimonials",
        "Contact Section (Inline implementation)",
        "ChatAssistant",
        "CVRequestModal"
      ],
      "state": ["isCVModalOpen"]
    },
    {
      "path": "components/Navbar.tsx",
      "type": "ui_component",
      "features": [
        "Scroll-aware styling (backdrop blur on scroll)",
        "Mobile Menu with Hamburger toggle",
        "Body scroll locking when mobile menu is open",
        "Smooth scroll handler",
        "Book Consultation CTA"
      ]
    },
    {
      "path": "components/Hero.tsx",
      "type": "ui_component",
      "features": [
        "Animated background blobs",
        "Status Badge: 'Open to CEO/COO Mandates from 2026'",
        "Profile Image with spinning border animation",
        "Stats Grid (Experience, Income Growth, Net Profit, Contracts)",
        "CV Download Trigger"
      ]
    },
    {
      "path": "components/About.tsx",
      "type": "ui_component",
      "features": [
        "IntersectionObserver for scroll animations",
        "Bio content",
        "Workbook Promo Card",
        "Parallax/Zoom image effects",
        "Skills/Education/Languages lists"
      ]
    },
    {
      "path": "components/Experience.tsx",
      "type": "ui_component",
      "features": [
        "Vertical Timeline Layout",
        "Alternating Left/Right cards for desktop",
        "Maps EXPERIENCE constant"
      ]
    },
    {
      "path": "components/Portfolio.tsx",
      "type": "ui_component",
      "features": [
        "Tab Navigation (Apps, Prompts, Case Studies)",
        "Filtering (Search, Industry, Tech)",
        "Pagination (Load More)",
        "Card Grid Display",
        "Detailed Modal View for selected project"
      ]
    },
    {
      "path": "components/ChatAssistant.tsx",
      "type": "interactive_component",
      "features": [
        "Floating Action Button toggle",
        "Chat Window UI",
        "Message History Persistence (localStorage: 'davor_portfolio_chat_history')",
        "Markdown Rendering (FormattedMessage component)",
        "Voice Input (Web Speech API)",
        "Feedback Mechanism (Thumbs Up/Down)",
        "Loading Waveform Animation"
      ]
    },
    {
      "path": "components/CVRequestModal.tsx",
      "type": "ui_component",
      "features": [
        "Form (Name, Email, Reason)",
        "Mailto generator on submit",
        "Backdrop blur"
      ]
    },
    {
      "path": "components/Volunteering.tsx",
      "type": "ui_component",
      "features": ["Grid layout", "Interests & Certifications box"]
    },
    {
      "path": "components/Testimonials.tsx",
      "type": "ui_component",
      "features": ["Grid layout", "Quote styling"]
    }
  ]
}
```
