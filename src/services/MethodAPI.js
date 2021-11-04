
// const URL = {url}

export const getMethod = async (url) => {
    const res = await fetch(`${url}`);
    const getContent = await res.json();
    console.log('GET', getContent);
    return getContent;
}