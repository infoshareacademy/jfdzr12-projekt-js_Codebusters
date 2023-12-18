export const fetchData = () => {
  return fetch("http://localhost:3000/photos")
    .then((res) => {
      if (res.ok) {
        console.log("result:", res);
        return res.json();
      }
      throw new Error("Something went wrong");
    })
    .then((data) => {
      return data;
    })
    .then((data) => {
      console.log("DATA:");
      console.log(data);
    })
    .catch((error) => console.log(error));
};

console.log("FETCH");
console.log(fetchData());
