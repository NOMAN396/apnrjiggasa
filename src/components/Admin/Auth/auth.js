import axios from "axios";

const login = async(data)=>{
    const LOGIN_ENDPOINT = `${global.config.apiUrl}/auth/login.php`;
    try {
        let response = await axios.post(LOGIN_ENDPOINT, data);
        
        console.log('Response:', response); // Log the entire response object
        console.log('Response data:', response.data); // Log the response data

        if(response.data && response.data.jwt){
            localStorage.setItem("access_token", response.data.jwt);
            localStorage.setItem("userdata", response.data.datas); // assuming datas is already a string
            return true;
        } else {
            console.log('JWT not found in response data');
            return false;
        }
    } catch(e){
        console.log('Error:', e); // Log the error
        return false;
    }
}

const register = async (data) => {
  const SIGNUP_ENDPOINT = `${global.config.apiUrl}/auth/register.php`;
  try {
    let response = await axios({
      method: 'post',
      url: SIGNUP_ENDPOINT,
      data: data,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
};

const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("userdata");
};

export { login, register, logout };
