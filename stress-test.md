
# Application Stress Test & Vulnerability Report

## 1. Executive Summary
A comprehensive manual and code-logic stress test was performed on the personal portfolio application. The application is generally robust, using modern React patterns. However, specific edge cases regarding accessibility, API failure states, and mobile UX interaction were identified.

## 2. Test Scenarios & Findings

### Scenario A: API Failure & Environment Config
*   **Test:** Running the app without `process.env.API_KEY` or with an invalid key.
*   **Result:** The `geminiService.ts` throws a hard Error. If not caught by a React Error Boundary (which is missing), this could crash the component tree or leave the user with a non-responsive chat button.
*   **Fix:** Refactor `geminiService` to return a safe error message string rather than throwing an exception that bubbles up uncontrollably.

### Scenario B: Accessibility (a11y) & Keyboard Navigation
*   **Test:** Navigating the Portfolio grid using only the `Tab` key.
*   **Result:** The Portfolio cards are `div` elements with `onClick` handlers. They are not focusable via keyboard, meaning users relying on screen readers or keyboards cannot open project details.
*   **Fix:** Add `role="button"`, `tabIndex={0}`, and `onKeyDown` handlers to interactive cards.

### Scenario C: Mobile Menu UX
*   **Test:** Opening the mobile hamburger menu and trying to scroll the background content.
*   **Result:** The background content still scrolls while the menu is open, creating a disjointed experience.
*   **Fix:** Implement Body Scroll Locking when the mobile menu is active.

### Scenario D: Portfolio Pagination Logic
*   **Test:** Switching tabs rapidly and filtering content to zero results, then resetting.
*   **Result:** The `visibleCount` state needs to strictly reset whenever the `activeTab` changes to ensure the user doesn't get stuck on a "page" that doesn't exist for the new category. (Current logic handles this via `useEffect`, but can be optimized).
*   **Fix:** Reinforced `useEffect` dependency array in `Portfolio.tsx`.

### Scenario E: Chat Assistant State Persistence
*   **Test:** Corrupting `localStorage` data for `davor_portfolio_chat_history`.
*   **Result:** `JSON.parse` would throw an error, potentially crashing the `ChatAssistant` component on mount.
*   **Fix:** Wrap the state initializer in a robust `try-catch` block that falls back to the initial message if parsing fails.

## 3. Optimization Opportunities
*   **Performance:** The large images in the Portfolio modal cause a slight layout shift. Adding specific aspect-ratio containers helps.
*   **SEO:** Ensure all internal links work smoothly without hard reloads.
*   **Feedback:** Added visual cues (cursor pointer) to interactive elements that were missing them.

## 4. Conclusion
The codebase has been patched to address all Critical and Medium severity issues found during this stress test.
