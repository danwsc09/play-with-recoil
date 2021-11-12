import { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentUserIDState,
  currentUserInfoQuery,
  friendsInfoQuery,
} from "../state";

function CurrentUserInfo() {
  const [inputValue, setInputValue] = useState("");
  const [userId, setUserId] = useRecoilState(currentUserIDState);
  const currentUser = useRecoilValue(currentUserInfoQuery);
  // const friends = useRecoilValue(friendsInfoQuery);
  // const setCurrentUserID = useSetRecoilState(currentUserIDState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserId(inputValue);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>{currentUser.name}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default CurrentUserInfo;
