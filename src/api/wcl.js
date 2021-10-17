import axios from 'axios'

const { VITE_WCL_CLIENT_ID }     = import.meta.env
const { VITE_WCL_CLIENT_SECRET } = import.meta.env
const { VITE_WCL_URI_TOKEN }     = import.meta.env

const getToken = async () => {
  return await axios
    .post(VITE_WCL_URI_TOKEN, {
      client_id:     VITE_WCL_CLIENT_ID,
      client_secret: VITE_WCL_CLIENT_SECRET,
      grant_type:    `client_credentials`
    })
    .then(response => response.data.access_token)
    .catch(error => console.error(`⛔ There was a problem getting the Warcraft Logs token. ⛔`, error))
}

export default {
  getToken
}