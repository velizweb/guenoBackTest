"use strict";

const axios = require("axios");

const getDataUser = async (request, response) => {
  const resp = await validateUser(request.params.cuit);

  if (!resp.success) {
    return response.status(200).json(resp);
  }

  const user = await getUserData(resp.data.cuit);
  return response.status(200).json({ ...user, cuit: resp.data.cuit });
};

const validateUser = async (cuit) => {
  try {
    const result = await axios.get(`https://api.gueno.com.ar/challenge/getCuit/${cuit}`);
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

const getUserData = async (cuit) => {
  try {
    const getData = await axios.get(`https://api.gueno.com.ar/challenge/getUserData/${cuit}`);
    return getData.data.data;
  } catch (error) {
    return error.response.data;
  }
};
module.exports = {
  getDataUser,
};
