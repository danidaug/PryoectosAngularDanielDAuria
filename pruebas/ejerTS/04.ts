let id: string | number = '29';

function analizarId(id: string | number):string{
    if(typeof id === 'string'){
        return 'Es de tipo string.';
    }else{
        return 'Es de tipo number';
    }
}

console.log(analizarId(id));