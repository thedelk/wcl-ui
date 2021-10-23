import axios from 'axios'

const getTokenBnet = async () =>
  axios
    .post(import.meta.env.VITE_BLIZZARD_URI_TOKEN,
      `grant_type=client_credentials`, {
        auth: {
          username: import.meta.env.VITE_BLIZZARD_CLIENT_ID,
          password: import.meta.env.VITE_BLIZZARD_CLIENT_SECRET,
        }
      })
    .then(response => response.data.access_token)
    .catch(error => console.error(`⛔ There was a problem getting the Blizzard token. ⛔`, error))

const getTokenWcl = async () =>
  axios
    .post(import.meta.env.VITE_WCL_URI_TOKEN, {
      client_id:     import.meta.env.VITE_WCL_CLIENT_ID,
      client_secret: import.meta.env.VITE_WCL_CLIENT_SECRET,
      grant_type:    `client_credentials`
    })
    .then(response => response.data.access_token)
    .catch(error => console.error(`⛔ There was a problem getting the Warcraft Logs token. ⛔`, error))

export default {
  getTokenBnet,
  getTokenWcl
}
