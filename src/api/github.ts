import api, { TConfig } from "./axios";


const searchGithubUser = async (params: TConfig) => {
    console.log(params);
    
    const result =  await api.get('https://api.github.com/search/users', {params});
    return result
}



export {searchGithubUser}