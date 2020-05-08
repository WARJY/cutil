const axios = require("axios")

class Session{
    constructor(){
        this.cookies = []
    }

    setSession(option){
        return new Promise((resolve,reject)=>{
            axios(option).then(res=>{
                this.cookies = res.headers["set-cookie"]
                resolve(res)
            }).catch(e=>{
                reject(e)
            })
        })
    }

    request(option){
        let cookie = ""
        if(option.headers.cookie) cookie += option.headers.cookie
        if(option.headers.Cookie) cookie += option.headers.Cookie
        if(option.headers.COOKIE) cookie += option.headers.COOKIE
        cookie += this.cookies.join(";")
        let optionMerged = {
            ...option,
            headers: {
                ...option.headers,
                cookie: cookie
            }
        }
        return new Promise((resolve,reject)=>{
            axios(optionMerged).then(res=>{
                resolve(res)
            }).catch(e=>{
                reject(e)
            })
        })
    }
}

module.exports = Session