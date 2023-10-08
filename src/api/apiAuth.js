import axios from 'axios'

export const apiAuth = axios.create({
  baseURL: 'https://sci4all.azurewebsites.net/auth'
})
