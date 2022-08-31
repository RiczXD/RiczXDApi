const cheerio = require('cheerio')
const fetch = require('node-fetch')
const axios = require('axios')
const _math = require('mathjs')
const _url = require('url')
const request = require('request');
const randomarray = async (array) => {
	return array[Math.floor(Math.random() * array.length)]
}

exports.pinterest = async (querry) => {
	return new Promise(async (resolve, reject) => {
		axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + querry, {
			headers: {
				"cookie": "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
			}
		}).then(({
			data
		}) => {
			const $ = cheerio.load(data)
			const result = [];
			const hasil = [];
			$('div > a').get().map(b => {
				const link = $(b).find('img').attr('src')
				result.push(link)
			});
			result.forEach(v => {
				if (v == undefined) return
				hasil.push(v.replace(/236/g, '736'))
			})
			hasil.shift();
			resolve(hasil)
		})
	})
}
exports.zerochan = (query) => {
	return new Promise((resolve, reject) => {
		axios.get('https://www.zerochan.net/search?q=' + query)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const judul = [];
				const result = [];
				const id = [];
				$('#thumbs2 > li > a > img').each(function(a, b) {
					if (!$(b).attr('alt').startsWith('https://static.zerochan.net/')) {
						judul.push($(b).attr('alt'))
					}
				})
				$('#thumbs2 > li > a').each(function(a, b) {
					id.push($(b).attr('href'))
				})
				for (let i = 0; i < judul.length; i++) {
					result.push('https://s1.zerochan.net/' + judul[i].replace(/\ /g, '.') + '.600.' + id[i].split('/')[1] + '.jpg')
				}
				resolve({
					creator: '@RiczXD',
					result: result
				})
			})
			.catch(reject)
	})
}
exports.happymod = (query) => {
        return new Promise((resolve,reject) => {
                axios.get('https://www.happymod.com/search.html?q=' + query)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const nama = [];
                        const link = [];
                        const rating = [];
                        const thumb = [];
                        const format = [];
                        $('body > div.container-row.clearfix.container-wrap > div.container-left > section > div > div > h3 > a').each(function(a,b) {
                          nem = $(b).text();
                          nama.push(nem)
                          link.push('https://happymod.com' + $(b).attr('href'))
                        })
                        $('body > div.container-row.clearfix.container-wrap > div.container-left > section > div > div > div.clearfix > span').each(function(c,d) {
                          rat = $(d).text();
                          rating.push(rat)
                        })
                        $('body > div.container-row.clearfix.container-wrap > div.container-left > section > div > a > img').each(function(e,f) {
                          thumb.push($(f).attr('data-original'))
                        })
                        for(let i=0; i<link.length; i++){
                          format.push({
                            judul : nama[i],
                            thumb : thumb[i],
                            rating : rating[i],
                            link : link[i]
                          })
                        }
                       const result = {
                        creator : '@RiczXD',
                        data : format
                       }
                  resolve(result)
                })
                .catch(reject)
        })
}
exports.apkmody = (query) => {
        return new Promise((resolve,reject) => {
                axios.get('https://apkmody.io/?s=' + query)
                .then(({ data }) => {
                  //console.log(data)
                        const $ = cheerio.load(data)
                        const nama = [];
                        const link = [];
                        const mod = [];
                        const thumb = [];
                        const format = [];
                        $('#primary > section:nth-child(3) > div > div > div > article > a > div > div > div > h2').each(function(a,b) {
                          nem = $(b).text();
                          nama.push(nem)
                        })
                        $('#primary > section:nth-child(3) > div > div > div > article > a > div > div > p').each(function(c,d) {
                          modd = $(d).text();
                          mod.push(modd.split('\n')[1])
                        })
                        $('#primary > section:nth-child(3) > div > div > div > article > a > div > img').each(function(e,f) {
                          thumb.push($(f).attr('src'))
                        })
                        $('#primary > section:nth-child(3) > div > div > div > article > a').each(function(g,h) {
                          link.push($(h).attr('href'))
                        })
                        for(let i=0; i<link.length; i++){
                          format.push({
                            judul : nama[i],
                            infomod : mod[i], 
                            thumb : thumb[i],
                            link : link[i]
                          })
                        }
                       const result = {
                        creator : '@RiczXD',
                        data : format
                       }

                  resolve(result)
                })
                .catch(reject)
        })
}
