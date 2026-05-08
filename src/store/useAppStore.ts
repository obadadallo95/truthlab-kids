import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type AgeGroup = '6-9' | '10-13' | '14-17' | null;

interface AppState {
  ageGroup: AgeGroup;
  setAgeGroup: (age: AgeGroup) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      ageGroup: null,
      setAgeGroup: (age) => set({ ageGroup: age }),
    }),
    {
      name: 'truthlab-storage',
    }
  )
);
