1️⃣ CSR (Client-Side Rendering) क्या होता है?

Definition:
CSR में पहले server सिर्फ एक basic HTML file भेजता है, फिर पूरा page browser में JavaScript (React) से render होता है।

कैसे काम करता है:

Browser request भेजता है
Server empty HTML + JS भेजता है
Browser JS run करता है
React UI render करता है

Example:
Create React App (CRA) default रूप से CSR use करता है।

Advantages ✅

First load के बाद navigation बहुत fast होता है
Dashboard और web apps के लिए best
Server पर कम load
Smooth user experience (SPA)

Disadvantages ❌

First load slow होता है
SEO weak होता है
JavaScript पर पूरी dependency रहती है
2️⃣ SSR (Server-Side Rendering) क्या होता है?

Definition:
SSR में server पहले ही पूरा HTML बना देता है और browser को ready page भेजता है।

कैसे काम करता है:

Browser request भेजता है
Server page render करता है
Ready HTML browser को भेजता है
Page तुरंत दिखाई देता है

Example:
Next.js SSR support करता है।

Advantages ✅

First load fast होता है ⚡
SEO strong होता है
Slow internet में भी content जल्दी दिखता है
Public websites के लिए best

Disadvantages ❌

Server पर ज्यादा load आता है
Setup थोड़ा complex होता है
Page transitions कभी-कभी slow लग सकते हैं
