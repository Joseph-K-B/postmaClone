
// const URL = {url}

export const getMethod = async (url) => {
    const res = await fetch(`${url}`);
    const content = await res.json();
    console.log('GET', content);
    return content;
}