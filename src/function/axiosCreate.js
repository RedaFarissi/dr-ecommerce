//import axios from 'axios';
//import CryptoJS from 'crypto-js';
//import AES from 'crypto-js/aes';
//
//const secretKey = 'your-secret-key';
//
// 
//const myAxios = axios.create({  
//  baseURL: 'http://localhost:8000/', 
//  headers: {
//    'Content-Type': 'application/json',
//    'Authorization' : `Token ${AES.decrypt(localStorage.getItem('auth_token'), secretKey).toString(CryptoJS.enc.Utf8)}`
//  }
//  
//});
//
//alert("decrypt "+AES.decrypt(localStorage.getItem('auth_token'), secretKey).toString(CryptoJS.enc.Utf8))
//export default myAxios;