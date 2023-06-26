const ACCESS_KEY = 'KQm0FlauKunEcm-ahP1tynisXD3-JHrq5QZgy74kCv0';

async function searchPhotos(query, per_page=10) {
  const aspectRatio = '300:250';
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=${ACCESS_KEY}&per_page=${per_page}&orientation=squarish&fields=id,description,alt_description,urls,title,subtitle`;
  console.log("requesting", url);
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      return data.results;
    } else {
      throw new Error(data.errors[0]);
    }
  } catch (error) {
    console.error('Error:', error.message);
    return [];
  }
}
