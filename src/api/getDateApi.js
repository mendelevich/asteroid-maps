import axios from 'axios';

const apiKey = 'Iz3O5EecFI5VmBfOEeqIWjJqghlWxrOuhSrFYIkF';

const getDateData = async date => {
  const response = await axios.get(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${apiKey}`
  );

  return response.data;
};

export default getDateData;
