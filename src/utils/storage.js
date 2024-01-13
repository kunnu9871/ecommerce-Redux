const setStorage = (loginData)=>{
    console.log(loginData.status)
    if(loginData.status==="sucess"){
        localStorage.setItem('login-info', JSON.stringify (loginData.userData) );
    }
    else {
        return;
    }
};

const getStorage = ()=>{
    return JSON.parse(localStorage.getItem('login-info'));
}

const hasStorage = ()=>{
    return localStorage.getItem('login-info')? true : false;
}

export {setStorage, getStorage, hasStorage};