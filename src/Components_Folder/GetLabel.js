import React, { useState, useEffect } from "react";
import useFetch from "./API_Fetch";

const GetLabel = (url) => {
  const [labelText, setLabelText] = useState("");

  const apiUrl = `http://localhost:1337/api/labels/${url}`;
  const { loading, error, data } = useFetch(apiUrl);

  useEffect(() => {
    if (data) {
      console.log("Отримані текстові дані з API:", data);
      setLabelText(data.data.attributes.text);
    }

    if (error) {
      console.error("Помилка отримання даних з API:", error);
    }
  }, [data, error]);
  return labelText;
};

export default GetLabel;