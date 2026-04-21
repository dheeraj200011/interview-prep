Render Props React का एक pattern है जिसमें component अपना data या logic किसी दूसरे component को function के रूप में pass करता है, ताकि UI dynamically control किया जा सके। 🔁

Simple भाषा में:
Render Props = function को prop की तरह pass करके UI render करवाना

📌 Render Props क्यों use करते हैं?

जब आपको:

logic reuse करना हो
multiple components में same functionality चाहिए
UI अलग-अलग रखना हो लेकिन logic same हो

तब Render Props useful होते हैं।

import ToggleContent from "./ToggleContent";

const App = () => {
return (

<div>
<ToggleContent
render={({ isOpen, toggle }) => {
return (
<div>
<button onClick={toggle}>
{isOpen ? "Hide" : "Show"}
</button>

              {isOpen && <p>Content is visible now 🎉</p>}
            </div>
          );
        }}
      />
    </div>

);
};

export default App;

import { useState } from "react";

const ToggleContent = ({ render }) => {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => {
setIsOpen(!isOpen);
};

return render({ isOpen, toggle });
};

export default ToggleContent;
