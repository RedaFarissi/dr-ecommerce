import axios from 'axios';
import CryptoJS from 'crypto-js';
import AES from 'crypto-js/aes';

const secretKey = 'your-secret-key';

async function hundeleRequest( url , method , data ) {
  const decryptedToken = AES.decrypt(localStorage.getItem('auth_token'), secretKey).toString(CryptoJS.enc.Utf8);
  alert(decryptedToken)
  const headers = {
    'Content-Type': 'application/json',
  };
  if (decryptedToken) {
    headers.Authorization = `Token ${decryptedToken}`;
  }

  try {
    const  response = await axios({  url ,   method ,   headers ,   data  });
    alert(response.data)
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}


export default hundeleRequest;