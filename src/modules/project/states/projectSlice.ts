import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { PROJECT } from "./urls";

interface ProjectState {
  items: any[]; // Thay đổi kiểu theo yêu cầu của bạn
  item: Record<string, any>;
  projectDraft: Record<string, any>;
  loaded: boolean;
  total: number;
  skip: number;
  take: number;
}

interface GetListParams {
  filter: Record<string, any>; // Định nghĩa kiểu cho filter
  role: string;
}

// Tạo slice
export const projectSlice = createSlice({
  name: "project",
  initialState: {
    items: [],
    item: {},
    projectDraft: {},
    loaded: false,
    total: 0,
    skip: 0,
    take: 0,
  } as ProjectState,
  reducers: {
    setList: (state, action) => {
      const { results: items, skip, take, total } = action.payload;

      state.items = items;
      state.skip = skip;
      state.take = take;
      state.total = total;
    },
  },
});

// Tạo async thunk để gọi API
export const getList = createAsyncThunk<void, GetListParams>(
  "project/getList",
  async ({ filter, role }, { dispatch }) => {
    const response = await fetch(
      `${PROJECT.GET_LIST}/${role}?${new URLSearchParams(filter)}`
    );
    const data = await response.json();
    dispatch(projectSlice.actions.setList(data)); // Dispatch action để cập nhật state
  }
);

// Xuất reducer
export const { setList } = projectSlice.actions;
export default projectSlice.reducer;
