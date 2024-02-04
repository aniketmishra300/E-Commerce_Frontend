
const add = (item)=>{
    return {
        type : "add",
        payload : item
    }
}

const remove = (item)=>{
    return {
        type : "remove",
        payload : item
    }
}

export {add,remove}




