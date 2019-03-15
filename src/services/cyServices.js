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

cyService.getAppointmentDetail = () => {
    return new Promise((resolve,reject)=>{
        const appointmentDetail = [{row:1,name:"John",isa:"JK",type:"buyer"},{row:2,name:"Chris",isa:"cy",type:"buyer"}];
        appointmentDetail ? resolve(appointmentDetail): reject("failed to get details");
    });
}

export default cyService;