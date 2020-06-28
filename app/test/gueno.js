const axios = require("axios");

async function gueno(cuit) {
  try {
    const result = await axios.get(`https://api.gueno.com.ar/challenge/getCuit/${cuit}`);

    let getData = await axios.get(
      `https://api.gueno.com.ar/challenge/getUserData/${result.data.data.cuit}`,
    );

    return getData.data.data.name;
  } catch (error) {
    return "El ID no existe.";
  }
}
module.exports = gueno;
