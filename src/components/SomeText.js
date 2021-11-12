import { useRecoilState } from "recoil";
import { fontSizeState } from "../simpleState";

function SomeText() {
  const [fontSize] = useRecoilState(fontSizeState);

  return <p style={{ fontSize }}>This is my text.</p>;
}

export default SomeText;
