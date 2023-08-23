export const sendContactForm = async(data) =>
// console.log(data);
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) =>{
    if(!res.ok) throw new Error ("failed to send message");
    return res.json();
  })


