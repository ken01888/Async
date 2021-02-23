function display(value){
    let doc = document.createElement('h1')
    doc.innerText= `${value}`
    document.body.appendChild(doc)
    setTimeout(()=>   
    document.body.removeChild(doc),1000)   
}

//Promise Chain
let randomNumber = Math.floor(Math.random()*20)
slowMath.add(2,6)
.then((value)=>{display(value);
return slowMath.multiply(value,2)})
.then((value)=>{display(value);
 return slowMath.divide(value,4)})
.then((value)=>{display(value);
return slowMath.subtract(value,3)})
.then((value=>{display(value);
return slowMath.add(value,98)}))
.then(value=>{display(value);
return slowMath.remainder(value,2)})
.then(value=>{display(value);
return slowMath.multiply(value,50)})
.then(value=>{display(value);
return slowMath.remainder(value,40)})
.then(value=>{display(value)
return slowMath.add(value,32)})
.then(value=>display(value))
.catch (error=> {
    let doc = document.createElement('h2')
    doc.innerText= `${error}`
    document.body.appendChild(doc)
})



//Async-Results will display onscreen 
let value;
async function doMath(){
    try {
        value = await slowMath.add(2,6);
        display(value);
        value = await slowMath.multiply(value,2);
        display(value)
        value = await slowMath.divide(value,4);
        display(value)
        value = await slowMath.subtract(value,3);
        display(value)
        value = await slowMath.add(value,98);
        display(value)
        value = await slowMath.remainder(value,2);
        display(value)
        value = await slowMath.multiply(value,50);
        display(value)
        value = await slowMath.remainder(value,40);
        display(value)
        value = await slowMath.add(value,32);
        display(value)
              
    } catch (error) {
        (()=>{
        let doc = document.createElement('h2')
        doc.innerText= `${error}`
        document.body.appendChild(doc)
        })();
    }
}

doMath()


