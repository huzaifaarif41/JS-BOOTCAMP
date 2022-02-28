//in axios, we could'nt need to parse the data as res.json(), it alreadyy care for us
//also, we didnt need to check the response if it is ok, it automatically checks the response and throw or catch an error if the response if 404 or 500 etc.



axios.get('https://randomuser.me/api/?result=10').then((res) => {
    console.log(res.data)
}).catch(err=>{
    console.log('Errorr!!')
    console.log(err)
});
