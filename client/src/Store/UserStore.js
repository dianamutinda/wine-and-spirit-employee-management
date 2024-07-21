import { create } from "zustand";

const UserStore = (set) => ({
  users: [],

  captureUser: (newUser) => {
    set((previousUser) => {
      return { users: [newUser, ...previousUser.users] };
    });
  },
});
export const useUserStore = create(UserStore)
export default useUserStore
