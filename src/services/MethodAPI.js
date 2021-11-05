
export const getMethod = async (url) => {
    const res = await fetch(`${url}`);
    const content = await res.json();
    return content;
};

export const postMethod = async (url, inputField ) => {
    const input = {body: `${inputField}`}
    const res = await fetch(`${url}`, {
        method: 'POST',
        body: JSON.stringify(input),
        // body: JSON.stringify({
        //     title: 'foo',
        //     body: 'bar',
        //     userId: 1,
        // }),
        headers: {
            'Content-type' : 'application/json; charset=UTF-8',
        },
    });
    const content = await res.json();
    console.log('POST', content);
    return content
};

export const patchMethod =  async(url, inputField) => {
    const input = {inputField: {body: `${inputField}`}}
    const res = await fetch(`${url}`, {
        method: 'PATCH',
        body: JSON.stringify(input),
        // body: JSON.stringify({
        //     title: 'foo',
        //   }),
        headers: {
            'Content-type' : 'application/json; charset=UTF-8'
        },
    });
    const content = await res.json()
    return content
};

export const deleteMethod = async(url) => {
    const res = await fetch(`${url}`, {
        method: 'DELETE',
    });
    const content = await res.json()
    return content
}