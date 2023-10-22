export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': 'ea938409c1msh29480b913e1b872p158077jsn40292a64c5a2',
  },
};
export const fetchData = async (url , options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  
  return data;
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  },
};

