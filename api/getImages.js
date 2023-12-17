export const fetchImages = () => {
  fetch("http://localhost:3000/photos")
    .then((res) => {
      if (res.ok) {
        console.log("result:", res);
        return res.json();
      }
      throw new Error("Something went wrong");
    })
    .then((data) => {
      data.map((e) => {
        console.log(e.url);
        return e.url;
      });
    })
    .catch((error) => console.log(error));
};
