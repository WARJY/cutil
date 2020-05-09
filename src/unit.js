module.exports = {
    toCent(yuan, fixed=0){
        return +(yuan / 10 * 1000).toFixed(fixed)
    },
    toYuan(cent, fixed=2){
        return +(cent / 1000 * 10).toFixed(fixed)
    }
}