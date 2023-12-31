/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * harvest-api
 *  HarvestOS is a custom learning management platform for SERC

    It purposefully blends the learning management system with the
    game based learning platform to create a unique learning.

    
 * OpenAPI spec version: 0.3.5
 */
import axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import type {
  UserResponse,
  GetUsersWithLimitsParams,
  UserRequest,
  GetUsersParams
} from '.././models'



  /**
 * @summary Query users between limits
 */
export const getUsersWithLimits = <TData = AxiosResponse<UserResponse[]>>(
    params?: GetUsersWithLimitsParams, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/api/users`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }
/**
 * Creates a new user based on
 * @summary Create a new user
 */
export const createUser = <TData = AxiosResponse<UserResponse>>(
    userRequest: UserRequest, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/users`,
      userRequest,options
    );
  }
/**
 * @summary Get all users
 */
export const getUsers = <TData = AxiosResponse<UserResponse[]>>(
    params?: GetUsersParams, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/api/users/infinite`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }
/**
 * Get a user by their id
 * @summary Get a particular user
 */
export const getUserById = <TData = AxiosResponse<UserResponse>>(
    id: string, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/api/users/${id}`,options
    );
  }
/**
 * Delete a user from the database

The endpoint will look to see if the user exists, and if so
will attempt to delete the user from the database and
return a 204 response. If the user does not exist, a 404
 * @summary Delete a particular user
 */
export const deleteUser = <TData = AxiosResponse<void>>(
    id: string, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.delete(
      `/api/users/${id}`,options
    );
  }
/**
 * @summary Update a particular user
 */
export const updateUser = <TData = AxiosResponse<unknown>>(
    id: string,
    userRequest: UserRequest, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.patch(
      `/api/users/${id}`,
      userRequest,options
    );
  }
export type GetUsersWithLimitsResult = AxiosResponse<UserResponse[]>
export type CreateUserResult = AxiosResponse<UserResponse>
export type GetUsersResult = AxiosResponse<UserResponse[]>
export type GetUserByIdResult = AxiosResponse<UserResponse>
export type DeleteUserResult = AxiosResponse<void>
export type UpdateUserResult = AxiosResponse<unknown>
