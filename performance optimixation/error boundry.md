React में Error Boundary officially सिर्फ class component से बनता है, लेकिन function component में indirect तरीके से use किया जा सकता है — usually react-error-boundary library के साथ। 👍

importnat: ye old router me use hota tha ab new router me errorElemnet me hum error component ko create karke useke error ko show kar sakte hai

चलो simple तरीके से समझते हैं।

📌 Function Component में Error Boundary कैसे use करें?

React की popular library है: react-error-boundary

Step 1: Install करें
npm install react-error-boundary
Step 2: Example (Function Component Error Boundary)
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
return (

<div>
<h2>Something went wrong ⚠️</h2>
<p>{error.message}</p>
<button onClick={resetErrorBoundary}>Try again</button>
</div>
);
}

function BuggyComponent() {
throw new Error("Component crashed!");
}

export default function App() {
return (
<ErrorBoundary
FallbackComponent={ErrorFallback}
onReset={() => {
console.log("Reset clicked");
}} >
<BuggyComponent />
</ErrorBoundary>
);
}

अब अगर BuggyComponent crash होगा तो fallback UI दिखेगा।

📌 Custom Hook Style Error Handling (Alternative Concept)

अगर library use नहीं करना चाहते, तो function component में manual error handling ऐसे कर सकते हैं:

import React, { useState } from "react";

function Example() {
const [hasError, setHasError] = useState(false);

try {
if (hasError) {
throw new Error("Something went wrong");
}

    return (
      <div>
        <h2>Working fine</h2>
        <button onClick={() => setHasError(true)}>
          Trigger Error
        </button>
      </div>
    );

} catch (error) {
return <h2>Error occurred ⚠️</h2>;
}
}

export default Example;

⚠️ लेकिन यह real Error Boundary जैसा powerful नहीं होता।

📌 Interview में क्या बोलना चाहिए (Best Answer)

Function components directly error boundaries create नहीं कर सकते, लेकिन react-error-boundary library या class-based ErrorBoundary wrapper से use कर सकते हैं.

अगर चाहो तो मैं production-ready reusable ErrorBoundary wrapper component भी बना देता हूँ जो तुम अपने MERN project में use कर सको।
