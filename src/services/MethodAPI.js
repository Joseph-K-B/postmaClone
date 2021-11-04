export const getMethod = async () => {
    const res = await fetch(``);
    const getContent = await res.json();
    console.log('GET', getContent);
    return getContent;
}