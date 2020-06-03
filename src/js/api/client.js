import 'whatwg-fetch';

const fetchURL = (url) => fetchURLs([url]).then(data => data[0]);

const fetchURLs = (urls) => {
  const params = {
    method: 'GET',
    headers: {
      "Content-Type": 'application/json'
    }
  };

  const promises = urls.map(url => (fetch(url, params).then(data => (data.json()))));
  return Promise.all(promises);
};

export const load = (level) => {
  const url = `/api/load?level=${level || 'HARD'}`;
  return fetchURL(url);
};
