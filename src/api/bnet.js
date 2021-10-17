import axios from 'axios'

const { VITE_BLIZZARD_CLIENT_ID }     = import.meta.env
const { VITE_BLIZZARD_CLIENT_SECRET } = import.meta.env
const { VITE_BLIZZARD_URI_TOKEN }     = import.meta.env

const getToken = async () => {
  return await axios
    .post(VITE_BLIZZARD_URI_TOKEN, `grant_type=client_credentials`, {
      auth: {
        username: VITE_BLIZZARD_CLIENT_ID,
        password: VITE_BLIZZARD_CLIENT_SECRET,
      }
    })
    .then(response => response.data.access_token)
    .catch(error => console.error(`⛔ There was a problem getting the Blizzard token. ⛔`, error))
}

export default {
  getToken
}