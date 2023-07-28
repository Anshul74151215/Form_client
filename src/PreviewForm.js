import React, { useEffect, useState } from "react";

const PreviewForm = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    fetchFormData();
  }, []);

  const fetchFormData = async () => {
    try {
      const response = await fetch(
        "https://form-server-0d7o.onrender.com/api/getFormData"
      );
      const data = await response.json();
      setFormData(data);
    } catch (error) {
      console.error("Error fetching form data:", error);
    }
  };

  return (
    <div>
      <h1>Preview Form Data</h1>
      <ul>
        {formData.map((item) => (
          <li key={item._id}>
            <strong>Name:</strong> {item.name}
            <br />
            <strong>Email:</strong> {item.email}
            <br />
            <strong>Question:</strong> {item.question}
            <br />
            <strong>Response:</strong> {item.response}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PreviewForm;
