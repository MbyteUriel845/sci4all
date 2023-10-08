import axios from 'axios'

export const apiResources = axios.create({
  baseURL: 'https://sci4all.azurewebsites.net/api'
})
