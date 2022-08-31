const fs = require('fs')
const { cekKey, limitAdd, isLimit } = require('../database/db');
const { getDoujinObj, getDoujinsByArtist, getDoujinsByTag ,home, search } = require('./nhentai')
const { toPdf } = require(process.cwd() + '/lib/pdf')


async function nhread(req, res) {
	const { path } = req.params
        const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
limitAdd(apikey);
	let obj = await getDoujinObj(path)
	let html = `
	<!DOCTYPE html>
	<html lang="en">

	<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="/favicon.ico" rel="icon">
	<title>${obj.title}</title>
	<style>
	img {
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: 100%;
	}

	body {
		background-color: #1a202c;
		background-color: rgba(26, 32, 44, 1);
	}

	@media (min-width: 576px) {
		img {
			width: auto;
			max-width: 100%;
			height: auto;
		}
	}
	</style>
	</head>

	<body>\n`
	for(let url of obj.pages) {
		html += `<img src=https://external-content.duckduckgo.com/iu/?u=${url}>\n`
	}
	html += `\n</body>

	</html>`
	res.send(html)
}



async function nhdetail(req, res) {
	const code = req.query.code
       const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
	if (!code) return res.status(403).send({
              status: 403,
              message: 'Input Parameter code'
});
		let obj = await getDoujinObj(code)
                 limitAdd(apikey);
		res.json(obj)
}


async function nhartist(req, res) {
	const artist = req.query.artist,
	page = req.query.page
       const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
	if (!artist || !page) return res.status(403).send({
              status: 403,
              message: 'Input Parameter artist & page'
});
		let obj = await getDoujinsByArtist(artist, page)
                 limitAdd(apikey);
		res.json(obj)
}


async function nhtag(req, res) {
	const tag = req.query.tag,
	page = req.query.page
        const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
	if (!tag || !page) return res.status(403).send({
              status: 403,
              message: 'Input Parameter tag & page'
});
		let obj = await getDoujinsByTag(tag, page)
                 limitAdd(apikey);
		res.json(obj)
}


async function nhhome(req, res) {
	const page = req.query.page
        const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
	if (!page) return res.status(403).send({
              status: 403,
              message: 'Input Parameter page'
});
		let obj = await home(page)
                limitAdd(apikey)
		res.json(obj)
}


async function nhsearch(req, res) {
	const query = req.query.query,
	page = req.query.page
       const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
	if (!query || !page) return res.status(403).send({
              status: 403,
              message: 'Input Parameter query & page'
});
		let obj = await search(query, page)
               limitAdd(apikey);
		res.json(obj)

}


async function nhDl(req, res) {
	const { path } = req.params
        const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({
        status: 403,
        message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
	let obj = await getDoujinObj(path)
        limitAdd(apikey);
	let pages = obj.pages.map(a => 'https://external-content.duckduckgo.com/iu/?u=' + a)
	let imgToPdf = await toPdf(pages)
	await fs.writeFileSync(process.cwd() + `/${path}.pdf`, imgToPdf)
	await res.download(process.cwd() + `/${path}.pdf`, `${obj.title}.pdf`)
}

module.exports = {
	nhread,
	nhdetail,
	nhartist,
	nhtag,
	nhhome,
	nhsearch,
	nhDl
}
