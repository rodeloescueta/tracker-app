import { create } from "zustand";

type TRecord = {
  keyword: string;
  url: string;
  headers: string;
  topic: string;
  strategy_name: string;
  n_times: string;
  n_articles: string;
  insert_kws: string;
  check_copyscape: string;
  add_to_private: string;
  ai_model: string;
};

type RecordStore = {
  count: number;
  isLoading: boolean;
  records: TRecord[];
  addRecord: (data: TRecord[]) => Promise<void>;
};

export const useRecordStore = create<RecordStore>((set) => ({
  count: 0,
  isLoading: false,
  records: [],
  addRecord: async (data) => {
    set(() => ({ isLoading: true }));
    await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay
    set((s) => ({ records: [...s.records, ...data] }));
    console.log("send to API", data);
    set(() => ({ isLoading: false }));
  },
}));
