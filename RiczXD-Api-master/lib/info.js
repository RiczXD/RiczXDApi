const cheerio = require('cheerio')
const fetch = require('node-fetch')
const axios = require('axios')
const _math = require('mathjs')
const _url = require('url')
const request = require('request');
const randomarray = async (array) => {
	return array[Math.floor(Math.random() * array.length)]
}

async function merdeka() {
        return new Promise((resolve) => {
		axios.get('https://www.merdeka.com/peristiwa/')
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const judul = [];
				const upload = [];
				const link = [];
				const thumb = [];
				const result = [];
				$('#mdk-content-center > div.inner-content > ul > li > div').each(function(a, b) {
					deta = $(b).find('h3 > a').text();
					judul.push(deta)
					link.push('https://www.merdeka.com' + $(b).find('h3 > a').attr('href'))
					upload.push($(b).find('div > span').text())
					thumb.push($(b).find('div > a > img').attr('src'))
				})
				for (let i = 0; i < judul.length; i++) {
					result.push({
                                                author: '@RiczXD',
						judul: judul[i],
						upload_date: upload[i],
						link: link[i],
						thumb: thumb[i]
					})
				}
				resolve(result)
			})
	})
}
async function metro() {
	return new Promise((resolve) => {
		axios.get('https://www.metrotvnews.com/news')
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const judul = [];
				const desc = [];
				const link = [];
				const thumb = [];
				const tag = [];
				const result = [];
				$('body > div.container.layout > section.content > div > div.item-list.pt-20 > div > div > h3 > a').each(function(a, b) {
					judul.push($(b).attr('title'))
				})
				$('body > div.container.layout > section.content > div > div.item-list.pt-20 > div > div > p').each(function(a, b) {
					deta = $(b).text();
					desc.push(deta)
				})
				$('body > div.container.layout > section.content > div > div.item-list.pt-20 > div > div > h3 > a').each(function(a, b) {
					link.push('https://www.metrotvnews.com' + $(b).attr('href'))
				})
				$('body > div.container.layout > section.content > div > div.item-list.pt-20 > div > img').each(function(a, b) {
					thumb.push($(b).attr('src').replace('w=300', 'w=720'))
				})
				for (let i = 0; i < judul.length; i++) {
					result.push({
                                                author: '@RiczXD',
						judul: judul[i],
						link: link[i],
						thumb: thumb[i],
						deskripsi: desc[i]
					})
				}
				resolve(result)
			})
	})
}
async function wikipedia(querry) {
	try {
	const link =  await axios.get(`https://id.wikipedia.org/wiki/${querry}`)
	const $ = cheerio.load(link.data)
	let judul = $('#firstHeading').text().trim()
	let thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`
	let isi = []
	$('#mw-content-text > div.mw-parser-output').each(function (rayy, Ra) {
		let penjelasan = $(Ra).find('p').text().trim()
		isi.push(penjelasan)
	})
	for(let i of isi) {
	const data = {
		author: '@RiczXD',
		status: link.status,
		result: {
			judul: judul,
			thumb: 'https:'+thumb,
			isi: i
		}
	}
	return data
}
	} catch (err) {
		var notFond = {
			author: '@RiczXD',
			status: link.status,
			Pesan: 'ERROR HUBUNGI OWNER 087846676690'
		}
		return notFond
	}
}
async function corona(negara) {
	try{
	const link = await axios.get(`https://www.worldometers.info/coronavirus/country/${negara}/`)
	const $ = cheerio.load(link.data)
	let kasus = $('#maincounter-wrap').find(' div > span').eq(0).text().trim()
	let mati = $('#maincounter-wrap').find(' div > span').eq(1).text().trim()
	let sembuh = $('#maincounter-wrap').find(' div > span').eq(2).text().trim()
	const data = {
		author: '@only_cupz',
		status: link.status,
		result: {
			kasus: kasus,
			meninggal: mati,
			sembuh: sembuh
		}
	}
	return data
} catch (err) {
	var notFond = {
		author: '@RiczXD',
		status: link.status,
		Pesan: 'ERROR HUBUNGI OWNER 087846676690'
	}
	return notFond
}
}

async function gempa() {
	try{
	const link = await axios.get(`https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan.bmkg`)
	const $ = cheerio.load(link.data)
	let hasil = []
	$('body > div.wrapper > div.container.content > div > div.col-md-8 > div > div > table > tbody').each(function (a, b) {
	    $(b).find('tr').each(function (c, d) {
			let tanggal = $(d).find('td:nth-child(2)').text().trim()
			let koordinat = $(d).find('td:nth-child(3)').text().trim()
			let magnitudo = $(d).find('td:nth-child(4)').text().trim()
			let kedalaman = $(d).find('td:nth-child(5)').text().trim()
			let skala = $(d).find('td:nth-child(6) > a').text().trim()
			const data = {
				author: '@RiczXD',
				status: link.status,
				result: {
					tanggal: tanggal,
					koordinat: koordinat,
					getaran: magnitudo,
					kedalaman: kedalaman,
					skala: skala
				}
			}
			hasil.push(data)
		})
	})
	return hasil
} catch (err) {
	var notFond = {
		author: '@RiczXD',
		status: link.status,
		Pesan: 'ERROR HUBUNGI OWNER 087846676690'
	}
	return notFond
}
}
async function cnn() {
	try {
	const link = await axios.get('https://www.cnnindonesia.com/')
	const $ = cheerio.load(link.data)
	let hasil = []
	$('#content > div > div.l_content > div.box.feed.berita_terbaru_lst > div.list.media_rows.middle').each(function (a, b) {
		$(b).find('article').each(function (c, d) {
			let judul = $(d).find('a > span.box_text > h2').text().trim() || '-' 
			let tema = $(d).find('a > span.box_text > span.kanal').text().trim() || '-'
			let publik = $(d).find('a > span.box_text > span.date').text().trim() || '-'
			let thumb = $(d).find('a > span.ratiobox.ratio_16_9.box_img > span > img').attr('src') || '-'
			let url = $(d).find('a').attr('href') || '-'
			const data = {
				author: '@RiczXD',
				status: link.status,
				result: {
					judul: judul,
					tema: tema,
					rilis: publik,
					thumb: thumb,
					url: url
				}
			}
			hasil.push(data)
		})
	})
	return hasil
} catch (err) {
	var notFond = {
		author: '@RiczXD',
		status: link.status,
		Pesan: 'ERROR HUBUNGI OWNER 087846676690'
	}
	return notFond
}
}

module.exports = { merdeka, metro, wikipedia, corona, cnn, gempa }
