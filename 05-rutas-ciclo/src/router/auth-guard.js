const isAuthenticatedGuard = (to, from, next) => {
    return new Promise(() => {
        const random = Math.round(Math.random() * 100);
        if(random>50){
            console.log('authorized');
            next()
        }else{
            console.log('blocked by isAuthenticatedRoute');
            next({name: 'pokemon-about'})
        }
    })
}

export default isAuthenticatedGuard;