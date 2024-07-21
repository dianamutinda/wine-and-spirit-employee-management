import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const UserStore = (set) => ({
  users: [],

  captureUser: (newUser) => {
    set((previousUser) => {
      return { users: [newUser, ...previousUser.users] };
    });
  },
});
export const useUserStore = create(devtools(persist(UserStore, {name: "An employee"})))
export default useUserStore
