import axios from 'axios';

const apiKey = 'Iz3O5EecFI5VmBfOEeqIWjJqghlWxrOuhSrFYIkF';

const getIdData = async id => {
  const response = await axios.get(
    `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${apiKey}`
  );

  return response.data;
};

export default getIdData;
