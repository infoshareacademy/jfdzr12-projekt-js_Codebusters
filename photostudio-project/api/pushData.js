export const addOrdersData = (data) => {
  fetch("http://localhost:3000/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Something went wrong");
    })
    .catch((error) => console.error(error));
};
