
export const getMethod = async (url) => {
    const res = await fetch(url);
    const content = await res.json();
    return content;
};

export const fetchMethod = async ( url, method, inputField, contentType = null, token = null ) => {
   console.log('FETCH', url, method, inputField)
    const res = await fetch(url, {
        method: method,
        body: inputField,
        headers: {
            'Content-type': contentType,
            Authorization: token 
        },
    });
    const content = await res.json();
    return content
};
