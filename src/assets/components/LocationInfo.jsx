// src/components/LocationInfo.js

import { useState, useEffect } from "react";
import axios from "axios";

const LocationInfo = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
    axios
      .get("YOUR_API_ENDPOINT", {
        params: {
          // Include any necessary parameters here
        },
        headers: {
          // Include any necessary headers here
          Authorization: "Bearer YOUR_API_KEY", // if your API requires authorization
        },
      })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Location Information</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {/* Customize how you display your data here */}
    </div>
  );
};

export default LocationInfo;
