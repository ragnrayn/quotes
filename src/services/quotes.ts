const quoteRequests = {
    get: async () => {
        try {
            const data = await fetch("https://api.api-ninjas.com/v1/quotes?category=happiness", { headers: { "X-Api-Key": import.meta.env.REACT_APP_API_KEY } });
            const response = await data.json();

            return response;
        } catch (error) {
            console.log(error)
            return error;
        }
    }
}



export default quoteRequests;