/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * harvest-api
 *  HarvestOS is a custom learning management platform for SERC

    It purposefully blends the learning management system with the
    game based learning platform to create a unique learning.

    
 * OpenAPI spec version: 0.3.5
 */

/**
 *  Response sent by the root endpoint

    Used to echo back the request and tell the client that
    the API is ready and available to the world
    
 */
export interface RootResponse {
  root_path: string;
  message: string;
  version: string;
}
