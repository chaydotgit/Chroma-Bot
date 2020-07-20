// request from Jikan MAl API 

const url = require('url');
const fetch = require('node-fetch');
class Request_Jikan {
    constructor(){
        this.jikan_URL = " https://api.jikan.moe/v3/"
    }


    // send request to jikan API
    async send() {

    }

    // build URL for jikan API 
    build_url() {
        const req_url = new URL(this.baseURL);

    }
    
}