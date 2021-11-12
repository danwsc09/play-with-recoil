import { useRecoilState, useRecoilValue } from "recoil";

import { fontSizeLabelState, fontSizeState } from "./simpleState";
import SomeText from "./components/SomeText";
import TextInput from "./components/TextInput";

function App() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);

  return (
    <div>
      <div>Current font size: {fontSizeLabel}</div>
      <button
        onClick={() => setFontSize((size) => size + 1)}
        style={{ fontSize }}
      >
        Click to make me bigger!
      </button>
      <SomeText />
      <TextInput />
    </div>
  );
}

export default App;
