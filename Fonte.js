uploadTask(files){
    let promises = [];
    [...files].forEach(file=>{
        promises.push(new Promise((resolve, reject)=>{
            let ajax = new XMLHttpRequest();
                ajax.open('POST', "/upload")
                ajax.onload = event=>{
                    try {
                        resolve(JSON.parse(ajax.responseText))
                    } catch (error) {
                        reject(error)
                    }
                }
                ajax.onerror = event =>{
                    reject(event)
                }
                ajax.send()
        }))
    })
    return Promise.all(promises); 
}