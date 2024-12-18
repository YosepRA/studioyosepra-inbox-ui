import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';

import messageAPI from './message-api.js';

const initialState = {
  list: [],
  page: 1,
  total: 0,
  pageCount: 0,
  message: null,
  status: 'idle', // idle, loading, error
  error: '',
};

export const fetchMessageList = createAsyncThunk(
  'message/fetchMessageList',
  async ({ page, limit, sort }) => {
    const data = await messageAPI.getMessageList(page, limit, sort);

    return data;
  },
);

export const fetchMessageDetails = createAsyncThunk(
  'message/fetchMessageDetails',
  async (id) => {
    const data = await messageAPI.getMessage(id);

    return data;
  },
);

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setLoadingStatus(state, action) {
      state.status = action.payload;
    },
    resetMessageDetails(state) {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchMessageList.fulfilled,
        (state, { payload: { docs, page, totalDocs, totalPages } }) => {
          state.list = docs;
          state.page = page;
          state.total = totalDocs;
          state.pageCount = totalPages;
          state.status = 'idle';
        },
      )
      .addCase(fetchMessageList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        fetchMessageDetails.fulfilled,
        (state, { payload: { data } }) => {
          state.message = data;
          state.status = 'idle';
        },
      )
      .addCase(fetchMessageDetails.pending, (state) => {
        state.status = 'loading';
      });
  },
});

export const { setLoadingStatus, resetMessageDetails } = messageSlice.actions;

export default messageSlice.reducer;

/* ======================= Selectors ======================= */

export const selectMessageListItems = (state) => state.message.list;
export const selectMessageStatus = (state) => state.message.status;
export const selectMessagePage = (state) => state.message.page;
export const selectMessageTotal = (state) => state.message.total;
export const selectMessagePageCount = (state) => state.message.pageCount;
export const selectMessageDetailsItem = (state) => state.message.message;

export const selectMessageList = createSelector(
  [
    selectMessageListItems,
    selectMessageStatus,
    selectMessagePage,
    selectMessageTotal,
    selectMessagePageCount,
  ],
  (list, status, page, total, pageCount) => ({
    list,
    status,
    page,
    total,
    pageCount,
  }),
);

export const selectMessageDetails = createSelector(
  [selectMessageDetailsItem, selectMessageStatus],
  (message, status) => ({
    message,
    status,
  }),
);
