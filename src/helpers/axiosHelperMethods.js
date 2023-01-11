export function requestInterceptor(config) {
    console.log('START REQUEST <= ************************** =>');
    console.log('Headers: ', config.headers);
    console.log('Method :', config.method);
    console.log('URL :', config.baseURL + config.url);
    console.log('END REQUEST <= ************************** =>');

    return config;
}

export function requestErrorHandler(error) {
    return Promise.reject(error);
}

export function responseInterceptor(error) {
    console.log('START REQUEST <= ************************** =>');
    console.log('Headers :', config.config.headers);
    console.log('Method :', config.config.method);
    console.log('URL :', config.config.baseURL + config.config.url);
    console.log('END REQUEST <= ************************** =>');

    console.log('START RESPONSE <= ************************** =>');
    console.log('Status :', config.status);
    console.log('Response :', config.data);
    console.log('END RESPONSE <= ************************** =>');

    return config;
}

export function responseErrorHandler(error) {

    const originConfig = error.config;

    if (error?.response?.status === 401 && !originConfig._retry) {
        console.log('User is unauthorized...')
    }

    alert(error);

    return Promise.reject(error);
}