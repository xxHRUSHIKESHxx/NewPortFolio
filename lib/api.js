export const sendContactForm = async (data) => {
  console.log("inside sendcontact frm")
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("failed to send message");
  }

  console.log("response form api",response)

  const responseData = await response.json();
  console.log("response data from api", responseData);
  return responseData;
};
