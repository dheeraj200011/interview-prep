🎯 Interview One-Line Answer

Accessibility means designing websites so that people with disabilities can use them easily using semantic HTML, ARIA attributes, keyboard navigation, and screen reader support.

Accessibility (Web Accessibility) का मतलब है ऐसी website या app बनाना जिसे हर तरह के users आसानी से use कर सकें, चाहे वे visually impaired हों, hearing issues हों, motor disability हो या keyboard-only users हों। ♿✨

Simple भाषा में:
Accessibility = Website सबके लिए usable बनाना

📌 Accessibility क्यों जरूरी है?

Benefits:

Disabled users भी website use कर सकते हैं
SEO improve होता है 📈
Better user experience मिलता है
Legal compliance (कई देशों में required)
Professional product quality बढ़ती है
📌 Accessibility के Examples (Real-world)
1️⃣ Image के लिए alt text

Wrong:

<img src="logo.png">

Correct:

<img src="logo.png" alt="Company logo">

👉 Screen reader users के लिए helpful

2️⃣ Proper Button use करना (div नहीं)

Wrong:

<div onclick="handleClick()">Submit</div>

Correct:

<button>Submit</button>

👉 Keyboard users के लिए accessible

3️⃣ Form labels add करना

Wrong:

<input type="text" placeholder="Enter name">

Correct:

<label>Name</label>
<input type="text">

👉 Screen readers सही input पहचानते हैं

4️⃣ Keyboard navigation support

User बिना mouse के भी:

Tab
Enter
Arrow keys

से website use कर सके

📌 React में Accessibility कैसे improve करें?

Best practices:

Semantic HTML use करें (button, nav, header)
aria attributes use करें
alt text add करें
Proper heading order रखें (h1 → h2 → h3)
Forms में label जरूरी रखें

Example:

<button aria-label="Close menu">❌</button>
📌 Important ARIA Attributes

ARIA = Accessible Rich Internet Applications

Common examples:

Attribute Use
aria-label Extra description देता है
aria-hidden Element hide करता है screen readers से
aria-live Dynamic content announce करता है

Example:

<div aria-live="polite">
  New notification received
</div>
📌 Accessibility Testing Tools

Developers use करते हैं:

Lighthouse (Chrome DevTools)
axe DevTools
WAVE tool
