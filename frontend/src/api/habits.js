import client from './client';

export const getHabits = async () => {
  const response = await client.get('/habits');
  return response.data.data;
};

export const createHabit = async (data) => {
  const response = await client.post('/habits', data);
  return response.data.data;
};

export const deleteHabit = async (id) => {
  await client.delete(`/habits/${id}`);
};