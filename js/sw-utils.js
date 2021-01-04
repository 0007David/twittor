


function actulizarCacheDinamico(dynamicCache, req, res) {

    if( res.ok ){
        caches.open( dynamicCache ).then ( cache => {
            let responseClone = res.clone();
            cache.put(req, responseClone);

            return res.clone();
        });
    }else {
        return res;
    }

}