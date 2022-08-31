const { cekKey, limitAdd, isLimit } = require('../database/db');
const { readFileTxt, readFileJson } = require('../lib/function');

async function cakLontong(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'});
    readFileJson('./lib/data/caklontong.json').then(result => {
        limitAdd(apikey);
        res.status(200).send({
            myname: '@RiczXD',
            status: 200, 
            question: result.quiz, 
            answer: result.answer, 
            detail: result.detail
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}

async function quotes(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'});
    readFileJson('./lib/data/quotes.json').then(result => {
        limitAdd(apikey);
        res.status(200).send({
            myname: '@RiczXD',
            status: 200, 
            quotes: result.quotes, 
            author: result.author
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}

async function fakta(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'});
    readFileTxt('./lib/data/fakta.txt').then(result => {
        limitAdd(apikey);
        res.status(200).send({
            myname: '@RiczXD',
            status: 200,
            result: result});
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}

async function bijak(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey)
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'});
    readFileTxt('./lib/data/bijak.txt').then(result => {
        limitAdd(apikey);
        res.status(200).send({
           myname: '@RiczXD',
           status: 200,
           result: result});
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}

async function ptl(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'});
    readFileTxt('./lib/data/ptl.txt').then(result => {
        limitAdd(apikey);
        res.status(200).send({status: 200, result: result});
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}

async function motivasi(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'});
    readFileTxt('./lib/data/motivasi.txt').then(result => {
        limitAdd(apikey);
        res.status(200).send({
             myname: '@RiczXD',
             status: 200, 
             result: result.replace(/"/g, '')});
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}
async function cerpen(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'});
    readFileTxt('./lib/data/cerpen.txt').then(result => {
        limitAdd(apikey);
        res.status(200).send({
             myname: '@RiczXD',
             status: 200,
             result: result.replace(/"/g, '')});
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}
async function truth(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'});
    readFileTxt('./lib/data/truth.txt').then(result => {
        limitAdd(apikey);
        res.status(200).send({status: 200, result: result.replace(/"/g, '')});
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}
async function dare(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'});
    readFileTxt('./lib/data/dare.txt').then(result => {
        limitAdd(apikey);
        res.status(200).send({myname: '@RiczXD', status: 200, result: result.replace(/"/g, '')});
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}
async function dareen(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'});
    readFileTxt('./lib/data/dareen.txt').then(result => {
        limitAdd(apikey);
        res.status(200).send({myname: '@RiczXD', status: 200, result: result.replace(/"/g, '')});
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}
async function truthen(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'});
    readFileTxt('./lib/data/truthen.txt').then(result => {
        limitAdd(apikey);
        res.status(200).send({myname: '@RiczXD', status: 200, result: result.replace(/"/g, '')});
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}

async function gombal(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'});
    readFileTxt('./lib/data/gombal.txt').then(result => {
        limitAdd(apikey);
        res.status(200).send({status: 200, result: result.replace(/"/g, '')});
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}
async function cinta(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'});
    readFileTxt('./lib/data/cinta.txt').then(result => {
        limitAdd(apikey);
        res.status(200).send({myname: '@RiczXD', status: 200, result: result.replace(/"/g, '')});
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}
async function pantun(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'});
    readFileTxt('./lib/data/dareen.txt').then(result => {
        limitAdd(apikey);
        res.status(200).send({myname: '@RiczXD', status: 200, result: result.replace(/"/g, '')});
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}
async function pquotes(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'});
    readFileTxt('./lib/data/pquotes.txt').then(result => {
        limitAdd(apikey);
        res.status(200).send({myname: '@RiczXD', status: 200, result: result.replace(/"/g, '')});
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}
async function receh(req, res) {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter apikey`
    });
    const check = await cekKey(apikey);
    if (!check) return res.status(403).send({
        status: 403,
        message: `apikey ${apikey} not found, please register first!`
    });
    let limit = await isLimit(apikey);
    if (limit) return res.status(403).send({status: 403, message: 'Limit Apikey Telah Tercapai !!, Limit Akan Diganti Setiap Pagi'});
    readFileTxt('./lib/data/receh.txt').then(result => {
        limitAdd(apikey);
        res.status(200).send({myname: '@RiczXD', status: 200, result: result.replace(/"/g, '')});
    }).catch(error => {
        console.log(error);
        res.status(500).send({status: 500, message: 'Internal Server Error'});
    });
}
module.exports = {cakLontong, quotes, bijak, fakta, ptl, motivasi, cerpen, truth, dare, truthen, dareen, pantun, gombal, cinta, pquotes, receh };
