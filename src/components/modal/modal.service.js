import axios from "axios";

export const getContacts = async (
  pageNum = 1,
  countryId = null,
  query = ""
) => {
  let bodyParameters = {
    companyId: 171,
    page: pageNum,
  };
  if (countryId != null) bodyParameters.countryId = countryId;
  if (query != null && query != "") bodyParameters.query = query;

  let config = {
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
