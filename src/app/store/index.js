import { configureStore } from '@reduxjs/toolkit';

import messageReducer from '@Features/message/message-slice.js';

const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});

export default store;
