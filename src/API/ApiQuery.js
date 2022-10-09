import axios from "axios";
import Notiflix from "notiflix";

const API_KEY = '29451050-d710b01a754c47fc53a7a4779';
const url = 'https://pixabay.com/api/';

export const params = {
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 24,
  page: 1,
  safesearch: 'true',
};

export const getData = async params => {
    try {
      const response = await axios.get(
          `${url}?key=${API_KEY}`, {params,
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        Notiflix.Notify.failure(`Sorry, try again ${error} `);
        throw new Error(`Sorry, try again ${error}`);}
}