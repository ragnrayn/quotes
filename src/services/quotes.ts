const quoteRequests = {
    get: async (category?: string) => {
        try {
            let data;
            let response;
            if(category){
                data = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, { headers: { "X-Api-Key": import.meta.env.VITE_APP_API_KEY } });
            }else{
                data = await fetch("https://api.api-ninjas.com/v1/quotes", { headers: { "X-Api-Key": import.meta.env.VITE_APP_API_KEY } });
            }

            response = await data.json();

            return response;
        } catch (error) {
            console.log(error)
            return error;
        }
    }
}



export default quoteRequests;