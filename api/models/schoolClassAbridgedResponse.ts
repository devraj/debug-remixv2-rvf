/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * harvest-api
 *  HarvestOS is a custom learning management platform for SERC

    It purposefully blends the learning management system with the
    game based learning platform to create a unique learning.

    
 * OpenAPI spec version: 0.3.5
 */
import type { SchoolClassAbridgedResponseAvatarAssetId } from './schoolClassAbridgedResponseAvatarAssetId';

/**
 * 
    
 */
export interface SchoolClassAbridgedResponse {
  createdAt: string;
  updatedAt: string;
  id: string;
  name: string;
  symbol: string;
  avatarAssetId: SchoolClassAbridgedResponseAvatarAssetId;
  active: boolean;
  calendarYear: number;
  schoolYearId: string;
  teachableContentVersionId: string;
  schoolYearName: string;
  logoUrl: string;
}
