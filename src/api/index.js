export const getUser = () => {
    const url = 'https://randomuser.me/api/?results=50';
   return fetch(url)
        .then((response) => response.json())
}


/* https://randomuser.me/api/?results=50 */