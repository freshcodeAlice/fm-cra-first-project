export const getUser = (page=1) => {
    const url = `https://randomuser.me/api/?results=10&seed=fm-2022&page=${page}`;
   return fetch(url)
        .then((response) => response.json())
}


/* https://randomuser.me/api/?results=50 */