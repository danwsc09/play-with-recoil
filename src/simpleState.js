import { atom, selector } from "recoil";

export const fontSizeState = atom({ key: "fontSize", default: 14 });

export const fontSizeLabelState = selector({
  key: "fontSizeLabelState",
  get: ({ get }) => {
    const fontSize = get(fontSizeState);
    const unit = "px";

    return `${fontSize}${unit}`;
  },
});

export const textState = atom({
  key: "textState",
  default: "",
});

export const textCounterState = selector({
  key: "textCounterState",
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});
