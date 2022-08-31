/*
   TextPro By NaufalCream
*/
const axios = require("axios");
const cheerio = require("cheerio");
const cookie = require("cookie");
const FormData = require("form-data");

async function post(url, formdata = {}, cookies) {
  let encode = encodeURIComponent;
  let data = Object.keys(formdata)
    .map((key) => {
      let vals = formdata[key];
      let isArray = Array.isArray(vals);
      let keys = encode(key + (isArray ? "[]" : ""));
      if (!isArray) vals = [vals];
      let out = [];
      for (let valq of vals) out.push(keys + "=" + encode(valq));
      return out.join("&");
    })
    .join("&");
  return await axios(`${url}?${data}`, {
    method: "GET",
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      Cookie: cookies,
    },
  });
}

/**
 * TextPro Scraper
 * @function
 * @param {String} url - Your phootoxy url, example https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html.
 * @param {String[]} text - Text (required). example ["text", "text 2 if any"]
 */

async function photooxy(url, text) {
  if (!/^https:\/\/photooxy\.com\/.+\.html$/.test(url))
    throw new Error("Url Salah!!");
  const geturl = await axios(url, {
    method: "GET",
    headers: {
      "User-Agent": "GoogleBot",
    },
  });
  const caritoken = geturl.data;
  hasilcookie = geturl.headers['set-cookie']
  .join('; ')
  
  const $ = cheerio.load(caritoken);
  const token = $('input[name="token"]').attr("value");
  const form = new FormData();
  if (typeof text === "string") text = [text];
  for (let texts of text) form.append("text[]", texts);
  form.append("submit", "Go");
  form.append("token", token);
  form.append("build_server", "https://photooxy.com");
  form.append("build_server_id", 1);
  const geturl2 = await axios(url, {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      Cookie: hasilcookie,
      ...form.getHeaders(),
    },
    data: form.getBuffer(),
  });
  const caritoken2 = await geturl2.data;
  console.log(caritoken2)
  const token2 = /<div.*?id="form_value".+>(.*?)<\/div>/.exec(caritoken2);
  if (!token2) throw new Error("Token Tidak Ditemukan!!");
  const prosesimage = await post(
    "https://photooxy.com/effect/create-image",
    JSON.parse(token2[1]),
    hasilcookie
  );
  const hasil = await prosesimage.json();
  return `https://photooxy.com${hasil.fullsize_image}`;
}

module.exports = { photooxy }
