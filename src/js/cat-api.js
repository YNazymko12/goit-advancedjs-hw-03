import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_seZlfq3ns3OG4awqKpgrHguF1bsT8zG0vEkOs8p5QCXaskGFToJj4a6Hy3j72iT7';

export async function fetchBreeds() {
  return await axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(resp => resp.data);
}

export async function fetchCatByBreed(breedId) {
  return await axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(resp => resp.data);
}

