/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * harvest-api
 *  HarvestOS is a custom learning management platform for SERC

    It purposefully blends the learning management system with the
    game based learning platform to create a unique learning.

    
 * OpenAPI spec version: 0.3.5
 */
import type { ChallengeActivityProgressOutput } from './challengeActivityProgressOutput';

/**
 *  Redefines this to ensure that the handlers read properly
    
 */
export interface ChallengeProgressResponse {
  id: number;
  selectedLesson: number;
  lessons: ChallengeActivityProgressOutput[];
}
