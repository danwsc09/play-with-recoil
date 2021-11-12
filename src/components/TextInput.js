import { useRecoilState, useRecoilValue } from "recoil";
import { textCounterState, textState } from "../simpleState";

function TextInput() {
  const [text, setText] = useRecoilState(textState);
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
      <CharacterCount />
    </div>
  );
}

function CharacterCount() {
  const textCounter = useRecoilValue(textCounterState);
  return <div style={{ color: "red" }}>word count: {textCounter}</div>;
}

export default TextInput;
