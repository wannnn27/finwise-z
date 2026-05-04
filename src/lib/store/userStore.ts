import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  name: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  profileImage: string | null;
  setProfileData: (data: Partial<Omit<UserState, 'setProfileData' | 'setProfileImage'>>) => void;
  setProfileImage: (image: string | null) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      name: "Raehanah Rezky",
      email: "raehanah@example.com",
      phone: "+62 812 3456 7890",
      location: "Jakarta, Indonesia",
      bio: "Mahasiswa tingkat akhir yang sedang belajar melek finansial dan menghindari jeratan PayLater. Fokus pada manajemen arus kas dan investasi pemula.",
      profileImage: null,
      setProfileData: (data) => set((state) => ({ ...state, ...data })),
      setProfileImage: (image) => set({ profileImage: image }),
    }),
    {
      name: 'user-storage',
    }
  )
);
