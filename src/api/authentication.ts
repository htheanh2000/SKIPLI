import api from "./axios";

async function refreshToken() {
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
  