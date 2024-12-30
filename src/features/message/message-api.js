import axios from 'axios';

import utils from '@Utils/index.js';

const serverBaseURL =
  import.meta.env.VITE_SERVER_BASE_URL || 'http://localhost:3000';

const messageAPI = {
  async getMessageList(page, limit = 10, sort = '-createdAt') {
    const searchParams = new URLSearchParams({
      page,
      limit,
      sort,
    });

    const response = await axios.get(
      `${serverBaseURL}/message?${searchParams.toString()}`,
    );

    return response.data;
  },
  async getMessage(id) {
    const response = await axios.get(`${serverBaseURL}/message/${id}`);

    return response.data;
  },
  async changeReadStatus(id) {
    const response = await axios.put(
      `${serverBaseURL}/message/${id}/change-read-status`,
    );

    return response.data;
  },
  async sendMessage(message) {
    const data = { message };

    const response = await axios.post(`${serverBaseURL}/message`, data);

    return response.data;
  },
};

export default messageAPI;
