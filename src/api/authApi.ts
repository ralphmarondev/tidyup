import axiosInstance from './axiosInstance.ts'
import {AxiosError} from 'axios'

interface ErrorResponse {
  message?: string
}

export const registerUser = async (fullname: string, username: string, password: string) => {
  try {
    const response = await axiosInstance.post('register/', {
      fullname: fullname,
      username: username,
      password: password
    })
    return response.data
  } catch (error: unknown) {
    const err = error as AxiosError<ErrorResponse>
    const errorMessage = err.response?.data?.message || 'Registration failed. Please try again later.'
    throw new Error(errorMessage)
  }
}

export const loginUser = async (username: string, password: string) => {
  try {
    const response = await axiosInstance.post('login/', {
      username: username,
      password: password
    })
    return response.data
  } catch (error: unknown) {
    const err = error as AxiosError<ErrorResponse>
    const errorMessage = err.response?.data?.message || 'Login failed. Please try again later.'
    throw new Error(errorMessage)
  }
}
