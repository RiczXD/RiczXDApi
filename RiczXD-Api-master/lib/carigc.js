const cheerio = require('cheerio')
const fetch = require('node-fetch')
const axios = require('axios')
const _math = require('mathjs')
const _url = require('url')
const request = require('request');
const randomarray = async (array) => {
	return array[Math.floor(Math.random() * array.length)]
}

exports.carigc = (nama) => {
	return new Promise((resolve, reject) => {
		axios.get('http://ngarang.com/link-grup-wa/daftar-link-grup-wa.php?search=' + nama + '&searchby=name')
			.then(({
				data
			}) => {
				const $ = cheerio.load(data);
				const result = [];
				const lnk = [];
				const nm = [];
				$('div.wa-chat-title-container').each(function(a, b) {
					const limk = $(b).find('a').attr('href');
					lnk.push(limk)
				})
				$('div.wa-chat-title-text').each(function(c, d) {
					const name = $(d).text();
					nm.push(name)
				})
				for (let i = 0; i < lnk.length; i++) {
					result.push({
						nama: nm[i].split('. ')[1],
						link: lnk[i].split('?')[0]
					})
				}
				resolve(result)
			})
			.catch(reject)
	})
}
