const cyService = {}

cyService.getData = () => {
    return 'This is data';
}

cyService.getAsync = () => {
    return new Promise((resolve,reject)=>{
        const x = true;
        console.log('in get async',x);
        x ? resolve('success'): reject('failed');
    });
}

export default cyService;