import api, { TConfig } from "./axios";


const searchGithubUser = async (params: TConfig) => {
    console.log(params);
    const result =  await api.get('github/searchGithubUsers', {params});
    return result
}

const updateFavoriteUser = async (params: TConfig) => {
    console.log(params);
    const result =  await api.post('github/likeGithubUser', params);
    return result
}



export {searchGithubUser, updateFavoriteUser}