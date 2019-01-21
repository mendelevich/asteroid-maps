import axios from 'axios';

const getData = async date => {
  const response = await axios.get(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=DEMO_KEY`
  );

  return response.data;
};

export default getData;
