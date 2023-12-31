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
  ClassGamePreferenceResponse,
  PlayerChallengePreferenceResponse,
  PlayerChallengePreferenceRequest,
  ChallengeLockResponse,
  ChallengeAnalyticsEventRequest,
  ChallengeStateResponse,
  ChallengeProgressResponse,
  ChallengeProgressRequest
} from '.././models'



  /**
 * These are overrides set by the teacher for the class

These are designed to only ever be read by the student
the teacher is able to set these via their own interface.
 * @summary Get Game Settings Overrides
 */
export const getGameSettingsOverrides = <TData = AxiosResponse<ClassGamePreferenceResponse>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/api/challenge/preference/overrides`,options
    );
  }
/**
 * @summary Get My Game Preferences
 */
export const getMyGamePreferences = <TData = AxiosResponse<PlayerChallengePreferenceResponse>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/api/challenge/preference`,options
    );
  }
/**
 * @summary Set My Game Preferences
 */
export const setMyGamePreferences = <TData = AxiosResponse<PlayerChallengePreferenceResponse>>(
    playerChallengePreferenceRequest: PlayerChallengePreferenceRequest, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.put(
      `/api/challenge/preference`,
      playerChallengePreferenceRequest,options
    );
  }
/**
 * @summary Get Challenge Locks
 */
export const getChallengeLocks = <TData = AxiosResponse<ChallengeLockResponse>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/api/challenge/lock`,options
    );
  }
/**
 * @summary Save Game Analytics
 */
export const saveGameAnalytics = <TData = AxiosResponse<void>>(
    challengeAnalyticsEventRequest: ChallengeAnalyticsEventRequest, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/api/challenge/analytics`,
      challengeAnalyticsEventRequest,options
    );
  }
/**
 * @summary Get Challenge Level Info
 */
export const getChallengeLevelInfo = <TData = AxiosResponse<ChallengeStateResponse>>(
    challengeId: number, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/api/challenge/${challengeId}`,options
    );
  }
/**
 * A method for retrieving data. 

Players will be able to resume progress within lessons as levels 
within the level.
 * @summary Get Game Challenge Level Progress
 */
export const getGameChallengeLevelProgress = <TData = AxiosResponse<ChallengeProgressResponse>>(
    challengeId: number,
    versionNumber: number, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/api/challenge/${challengeId}/version/${versionNumber}/progress`,options
    );
  }
/**
 * A method for updating data. 

Players will be able to resume progress within lessons as levels 
within the level.
 * @summary Save Game Challenge Level Progress
 */
export const saveGameChallengeLevelProgress = <TData = AxiosResponse<void>>(
    challengeId: number,
    versionNumber: number,
    challengeProgressRequest: ChallengeProgressRequest, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.put(
      `/api/challenge/${challengeId}/version/${versionNumber}/progress`,
      challengeProgressRequest,options
    );
  }
export type GetGameSettingsOverridesResult = AxiosResponse<ClassGamePreferenceResponse>
export type GetMyGamePreferencesResult = AxiosResponse<PlayerChallengePreferenceResponse>
export type SetMyGamePreferencesResult = AxiosResponse<PlayerChallengePreferenceResponse>
export type GetChallengeLocksResult = AxiosResponse<ChallengeLockResponse>
export type SaveGameAnalyticsResult = AxiosResponse<void>
export type GetChallengeLevelInfoResult = AxiosResponse<ChallengeStateResponse>
export type GetGameChallengeLevelProgressResult = AxiosResponse<ChallengeProgressResponse>
export type SaveGameChallengeLevelProgressResult = AxiosResponse<void>
