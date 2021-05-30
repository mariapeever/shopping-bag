/* Api methods to call /functions */

const readAll = () => {
  return fetch('https://pastebin.com/raw/23irTnsr').then((response) => {
    return response.json()
  })
}
export default {
  read: readAll
}