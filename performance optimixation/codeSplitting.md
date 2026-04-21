Code Splitting एक technique है जिससे हम बड़े JavaScript bundle को छोटे-छोटे हिस्सों (chunks) में divide कर देते हैं, ताकि app जल्दी load हो और performance बेहतर हो जाए। ⚡

lazy loading se react app ko optimize karte hai

React apps में यह खासतौर पर important होता है क्योंकि पूरी JS file एक साथ load होने से first load slow हो जाता है।

📌 Code Splitting क्या होता है?

Normally क्या होता है:

👉 पूरा React app एक ही बड़ी JS file में bundle हो जाता है
👉 Browser को पूरा bundle download करना पड़ता है
👉 Page load slow हो जाता है

Code Splitting में:

👉 जरूरत के हिसाब से code अलग-अलग हिस्सों में load होता है
👉 सिर्फ वही code load होता है जो उस समय चाहिए

📌 Example (Simple समझें)

मान लो आपके app में 3 pages हैं:

Home
About
Contact

Without code splitting:

Browser → पूरा app download
(Home + About + Contact)

With code splitting:

Home page open → सिर्फ Home code download
About page open → तब About code download
Contact page open → तब Contact code download

इससे performance improve होती है 🚀

📌 React में Code Splitting कैसे करते हैं?

React में हम React.lazy() और Suspense use करते हैं।

Example:
import React, { Suspense, lazy } from "react";

const About = lazy(() => import("./About"));

function App() {
return (

<div>
<Suspense fallback={<h2>Loading...</h2>}>
<About />
</Suspense>
</div>
);
}

export default App;

👉 यहाँ About component तभी load होगा जब जरूरत पड़ेगी

📌 Routing के साथ Code Splitting (Best Practice)

React Router में बहुत useful होता है:

import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

function App() {
return (
<Suspense fallback={<h2>Loading...</h2>}>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
</Routes>
</Suspense>
);
}
📌 Advantages ✅
First load fast होता है
Bundle size छोटा हो जाता है
Performance improve होती है
Large React apps के लिए best practice
Interview में frequently पूछा जाता है
📌 Real Interview One-Line Answer 🎯

Code splitting is a technique where JavaScript bundles are split into smaller chunks and loaded on demand to improve application performance and reduce initial load time.

अगर चाहो तो मैं lazy loading vs code splitting vs dynamic import भी simple तरीके से समझा सकता हूँ—ये तीनों interview में साथ पूछे जाते हैं।
