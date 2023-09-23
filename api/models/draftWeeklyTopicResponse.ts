/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * harvest-api
 *  HarvestOS is a custom learning management platform for SERC

    It purposefully blends the learning management system with the
    game based learning platform to create a unique learning.

    
 * OpenAPI spec version: 0.3.5
 */
import type { DraftWeeklyTopicResponseExperience } from './draftWeeklyTopicResponseExperience';
import type { DraftWeeklyTopicResponseRepresent } from './draftWeeklyTopicResponseRepresent';
import type { DraftWeeklyTopicResponseApply } from './draftWeeklyTopicResponseApply';

/**
 *  Full formed response for a weekly teachable topic
    
 */
export interface DraftWeeklyTopicResponse {
  createdAt: string;
  updatedAt: string;
  id: string;
  number: number;
  title: string;
  schoolYearId: string;
  schoolTermId: string;
  draftTeachableUnitId: string;
  experience: DraftWeeklyTopicResponseExperience;
  represent: DraftWeeklyTopicResponseRepresent;
  apply: DraftWeeklyTopicResponseApply;
}