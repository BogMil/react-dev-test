import axios from "axios";

export const getContacts = async () => {
  const bodyParameters = {
    companyId: 171,
    // query - to filter by names and number
    page: 1,
    countryId: 226,
  };

  const config = {
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNzEiLCJleHAiOjE2MDM3ODM0Mzd9.3ievseHtX0t3roGh7nBuNsiaQeSjfiHWyyx_5GlOLXk",
    },
    params: bodyParameters,
  };

  return await axios.get(
    "https://api.dev.pastorsline.com/api/contacts.json",
    config
  );
};
