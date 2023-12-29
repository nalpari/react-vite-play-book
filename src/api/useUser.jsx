import axios from 'axios'

export const getUsers = () => {
  return axios.get('http://localhost:8080/api/user').then((res) => {
    console.log(res)
    return res.data
  })
}

export const createUser = (data) => {
  return axios.post('http://localhost:8080/api/user', data).then((res) => {
    console.log(res)
  })
}
