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
  FileUploadResponse,
  FileUploadRequest
} from '.././models'



  /**
 * @summary Get Upload Url
 */
export const getUploadUrl = <TData = AxiosResponse<FileUploadResponse>>(
    fileUploadRequest: FileUploadRequest, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/upload`,
      fileUploadRequest,options
    );
  }
export type GetUploadUrlResult = AxiosResponse<FileUploadResponse>