const axios = require('axios')
const cheerio = require('cheerio')

const wikiSearch = async (query) => {
const res = await axios.get(`https://id.m.wikipedia.org/w/index.php?search=${query}`)
const $ = cheerio.load(res.data)
const hasil = []
let result = $('#mf-section-0').find('p').text()
let author = '@only_cupz'
let thumb = $('#mf-section-0').find('div > div > a > img').attr('src')
thumb = thumb ? thumb : '//pngimg.com/uploads/wikipedia/wikipedia_PNG35.png'
thumb = 'https:' + thumb
let judul = $('h1#section_0').text()
hasil.push({ author, result, thumb, judul })
return hasil
}
module.exports = { wikiSearch }
