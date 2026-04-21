Web Vitals are performance metrics defined by Google (LCP, INP, CLS) that measure loading speed, responsiveness, and visual stability of a webpage to improve user experience and SEO.

📊 Core Web Vitals के 3 Main Metrics
1️⃣ LCP (Largest Contentful Paint)

👉 Page का सबसे बड़ा visible content (image / heading) कितनी जल्दी load हुआ

Ideal value:
⏱️ 2.5 seconds से कम

Example:

Banner image जल्दी दिखे → good
Late दिखे → bad UX

Improve कैसे करें:

Image optimize करें
Lazy loading use करें
Fast hosting use करें

2️⃣ INP (Interaction to Next Paint)

👉 User click करने के बाद page कितनी जल्दी response देता है

Ideal value:
⏱️ 200 ms से कम

Example:

Button click → तुरंत response = good
Delay = poor experience

Improve कैसे करें:

Heavy JS reduce करें
Code splitting use करें
Unnecessary re-renders avoid करें

3️⃣ CLS (Cumulative Layout Shift)

👉 Page load होते समय layout कितनी बार हिलता है

isse solve karne ke liye hum skeleton ka use kar sakte hai

Ideal value:
📏 0.1 से कम

Example:

Button नीचे shift हो गया = bad
Stable layout = good

Improve कैसे करें:

Images को fixed width/height दें
Ads space reserve करें
Fonts preload करें

📊 Quick Summary Table
Metric Measure करता है Ideal Value
LCP Loading speed < 2.5s
INP Interaction response < 200ms
CLS Layout stability < 0.1
📈 React / MERN Projects में Web Vitals कैसे improve करें

Useful techniques:

Code splitting (React.lazy)
Lazy loading images
Memoization (useMemo, useCallback)
CDN use करना
SSR (Next.js) use करना
