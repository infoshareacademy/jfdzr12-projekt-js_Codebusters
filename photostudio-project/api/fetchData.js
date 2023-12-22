export const getPhotosData = () => {
  return fetch("http://localhost:3000/photos")
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Something went wrong");
    })
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));
};
