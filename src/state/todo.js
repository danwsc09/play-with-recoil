import { atom } from "recoil";

let id = 0;

export const todoListState = atom({
  key: "todoListState",
  default: [],
});

export function getId() {
  return id++;
}
