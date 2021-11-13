
export const getMethod = async (url) => {
    const res = await fetch(url);
    const content = await res.json();
    return content;
};

export const fetchMethod = async ( url, method, inputField ) => {
   console.log('FETCH', url, method, inputField)
    const res = await fetch(url, {
        method: method,
        body: inputField,
        headers: {
            'Content-type' : 'application/json; charset=UTF-8',
        },
    });
    const content = await res.json();
    return content
};

// export const postMethod = async (url, inputField ) => {
//     const res = await fetch(url, {
//         method: 'POST',
//         body: inputField,
//         headers: {
//             'Content-type' : 'application/json; charset=UTF-8',
//         },
//     });
//     const content = await res.json();
//     return content
// };

// export const patchMethod =  async(url, inputField) => {
//     const res = await fetch(url, {
//         method: 'PATCH',
//         body: inputField,
//         headers: {
//             'Content-type' : 'application/json; charset=UTF-8'
//         },
//     });
//     const content = await res.json()
//     return content
// };

// export const putMethod =  async(url, inputField) => {
//     const res = await fetch(url, {
//         method: 'PUT',
//         body: inputField,
//         headers: {
//             'Content-type' : 'application/json; charset=UTF-8'
//         },
//     });
//     const content = await res.json()
//     return content
// };

// export const deleteMethod = async(url) => {
//     const res = await fetch(`${url}`, {
//         method: 'DELETE',
//     });
//     const content = await res.json()
//     return content
// }
