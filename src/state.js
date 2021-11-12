import { atom, selector, selectorFamily } from "recoil";

const URL = "http://localhost:9988";

const myDBQuery = async ({ userID }) => {
  try {
    const res = await fetch(`${URL}/${userID}`);
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const currentUserIDState = atom({
  key: "CurrentUserID",
  default: "1",
});

export const userInfoQuery = selectorFamily({
  key: "UserInfoQuery",
  get: (userID) => async () => {
    const response = await myDBQuery({ userID });
    if (response.error) {
      throw response.error;
    }

    return response;
  },
});

export const currentUserInfoQuery = selector({
  key: "CurrentUserInfoQuery",
  get: ({ get }) => get(userInfoQuery(get(currentUserIDState))),
});

export const friendsInfoQuery = selector({
  key: "FriendsInfoQuery",
  get: ({ get }) => {
    const { friendList } = get(currentUserInfoQuery);
    return friendList.map((friendID) => get(userInfoQuery(friendID)));
  },
});
