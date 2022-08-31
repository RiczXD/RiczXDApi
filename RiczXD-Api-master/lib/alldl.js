const cheerio = require('cheerio')
const fetch = require('node-fetch')
const axios = require('axios')
const _math = require('mathjs')
const _url = require('url')
const request = require('request');

exports.happymoddl = (link) => {
	return new Promise((resolve,reject) => {
		axios.get(link)
		.then(({ data }) => {
			const $ = cheerio.load(data)
      const link = [];
      const jlink = [];
      const result = [];
			const title = $('body > div > div.container-left > section:nth-child(1) > div > h1').text()
      const info = $('body > div > div.container-left > section:nth-child(1) > div > ul').text()
      $('body > div.container-row.clearfix.container-wrap.pdt-font-container > div.container-left > section:nth-child(1) > div:nth-child(11) > div:nth-child(3) > div > p > a').each(function(a, b) {
        deta = $(b).text();
        jlink.push(deta)
        if($(b).attr('href').startsWith('/')){
        link.push('https://happymod.com' + $(b).attr('href'))
        }
        else{
          link.push($(b).attr('href'))
        }
      })
      for(let i=0; i<link.length; i++){
        result.push({
          title: jlink[i],
          dl_link: link[i]
        })
      }
		  resolve({
        creator: '@RiczXD',
        title: title,
        info: info.replace(/\t|- /g, ''),
        download: result
      })
		})
		.catch(reject)
	})
}
exports.goredl = async(link) => {
	        return new Promise(async(resolve,reject) => {
            axios.get(link)
						.then(({ data }) => {
							const $$ = cheerio.load(data)
							const format = {
								judul : $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > header > h1').text(),
								views : $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > div.s-post-meta-block.bb-mb-el > div > div > div.col-r.d-table-cell.col-md-6.col-sm-6.text-right-sm > div > span > span.count').text(),
								comment : $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > div.s-post-meta-block.bb-mb-el > div > div > div.col-r.d-table-cell.col-md-6.col-sm-6.text-right-sm > div > a > span.count').text(),
								link : $$('video > source').attr('src')
							}
							const result = {
								creator: '@RiczXD',
								data : format
							}
                  resolve(result)
                })
                .catch(reject)
            })
}
exports.sfiledown = async(link) => {
        return new Promise((resolve,reject) => {
                axios.get(link)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const nama = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(2) > b').text();
                        const size = $('#download').text().split('Download File')
                        const desc = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(7) > center > h1').text();
                        const type = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(4) > a:nth-child(3)').text();
                        const upload = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(5)').text();
                        const uploader = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(4) > a:nth-child(2)').text();
                        const download = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(6)').text();
                        const link = $('#download').attr('href')
			other = link.split('/')[7].split('&is')[0]
                        const format = {
                          judul: nama + other.substr(other.length - 6).split('.')[1],
                          size: size[1].split('(')[1].split(')')[0],
                          type: type,
			  mime: other.substr(other.length - 6).split('.')[1],
                          desc: desc,
                          uploader: uploader,
                          uploaded: upload.split('\n - Uploaded: ')[1],
                          download_count : download.split(' - Downloads: ')[1],
                          link: link
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
exports.zippydl = async(link) => {
        return new Promise(async(resolve,reject) => {
                axios.get(link)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const nama = $('#lrbox > div:nth-child(2) > div:nth-child(1) > font:nth-child(4)').text();
                        const size = $('#lrbox > div:nth-child(2) > div:nth-child(1) > font:nth-child(7)').text();
                        const upload = $('#lrbox > div:nth-child(2) > div:nth-child(1) > font:nth-child(10)').text();
                        const getlink = async (u) => {
                          console.log('⏳  ' + `Get Page From : ${u}`)
                          const zippy = await axios({ method: 'GET', url: u }).then(res => res.data).catch(err => false)
                          console.log('Done')
                          const $ = cheerio.load(zippy)
                          if (!$('#dlbutton').length) {
                              return { error: true, message: $('#lrbox>div').first().text().trim() }
                          }
                          console.log('⏳  ' + 'Fetch Link Download...')
                          const url = _url.parse($('.flagen').attr('href'), true)
                          const urlori = _url.parse(u)
                          const key = url.query['key']
                          let time;
                          let dlurl;
                          try {
                              time = /var b = ([0-9]+);$/gm.exec($('#dlbutton').next().html())[1]
                              dlurl = urlori.protocol + '//' + urlori.hostname + '/d/' + key + '/' + (2 + 2 * 2 + parseInt(time)) + '3/DOWNLOAD'
                          } catch (error) {
                              time = _math.evaluate(/ \+ \((.*)\) \+ /gm.exec($('#dlbutton').next().html())[1])
                              dlurl = urlori.protocol + '//' + urlori.hostname + '/d/' + key + '/' + (time) + '/DOWNLOAD'
                          }
                          console.log('Done')
                          return dlurl 
                      }
                      getlink(link).then(res => {
                        //_(timet) 
                        
                        var result = {
                        creator : '@RiczXD',
                        data : {
                          Judul: nama,
                          size: size,
                          uploaded: upload,
                          link: res
                        }
                       }
                    resolve(result)
                     })
                })
                .catch(reject)
        })
}
exports.android1 = (query) => {
        return new Promise((resolve,reject) => {
                axios.get('https://an1.com/tags/MOD/?story=' + query + '&do=search&subaction=search')
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const nama = [];
                        const link = [];
                        const rating = [];
                        const thumb = [];
                        const developer = [];
                        const format = [];
                        $('body > div.page > div > div > div.app_list > div > div > div.cont > div.data > div.name > a > span').each(function(a,b) {
                          nem = $(b).text();
                          nama.push(nem)
                        })
                        $('div > ul > li.current-rating').each(function(c,d) {
                          rat = $(d).text();
                          rating.push(rat)
                        })
                        $('body > div.page > div > div > div.app_list > div > div > div.cont > div.data > div.developer.xsmf.muted').each(function(e,f) {
                          dev = $(f).text();
                          developer.push(dev)
                        })
                        $('body > div.page > div > div > div.app_list > div > div > div.img > img').each(function(g,h) {
                          thumb.push($(h).attr('src'))
                        })
                        $('body > div.page > div > div > div.app_list > div > div > div.cont > div.data > div.name > a').each(function(i,j) {
                          link.push($(j).attr('href'))
                        })
                        for(let i=0; i<link.length; i++){
                          format.push({
                            judul : nama[i],
                            dev : developer[i],
                            rating : rating[i], 
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
