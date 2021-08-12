import * as api from '../api/authAPI.js';

export const getFreelancers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchFreelancers();
    console.log(data);
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log("there was an error");
  }
}