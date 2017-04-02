import 'whatwg-fetch'

/**
 * 
 * 
 * @param {String} url 
 * @param {Object} option 
 * @returns {Object}
 */
async function ajax (url,option) {
    if(typeof url !== 'string'){
        return
    }
    let config = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {}
    }
    Object.keys(config).map(key=>{
        if(config[key]){
            if(Object.prototype.toString.call(option[key])==='[object Object]'){
                JSON.stringify(option[key])
            }
            config[key]=option[key]
        }
    })
    console.log(config)
    return await fetch(url, config)
}


export default ajax