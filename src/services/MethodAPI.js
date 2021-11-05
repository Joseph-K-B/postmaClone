
export const getMethod = async (url) => {
    const res = await fetch(`${url}`);
    const content = await res.json();
    return content;
}

export const postMethod = async (url, inputField) => {
    const res = await fetch(`${url}`, {
        method: 'POST',
        body: JSON.stringify(`${inputField}`),
        headers: {
            'Content-type' : 'application/json; charset=UTF-8',
        },
    });
    const content = await res.json();
    console.log('POST', content);
    return content
}