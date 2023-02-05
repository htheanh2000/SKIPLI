import api from "./axios";

const refreshToken = async () => {
    const value = Number(localStorage.getItem('expired'));
    if (value && new Date(value) < new Date()) {
      const result = await api.get('/refresh');
      localStorage.setItem('token', result.data.token);
      localStorage.setItem(
        'expired',
        String(new Date().setSeconds(result.data.expired))
      );
    }
  }


export type CreateNewAccessCodeProps = string

const CreateNewAccessCode = async (phonenumber: CreateNewAccessCodeProps) => {
    const params = {
      user: phonenumber
    }
    console.log(params);
    
    const result =  await api.post('/createNewAccessCode', params);
    return result
}

export {CreateNewAccessCode}