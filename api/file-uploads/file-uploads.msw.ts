/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * harvest-api
 *  HarvestOS is a custom learning management platform for SERC

    It purposefully blends the learning management system with the
    game based learning platform to create a unique learning.

    
 * OpenAPI spec version: 0.3.5
 */
import {
  rest
} from 'msw'
import {
  faker
} from '@faker-js/faker'

export const getGetUploadUrlMock = () => ({presignedUploadUrl: faker.random.word(), expires: faker.datatype.number({min: undefined, max: undefined})})

export const getFileUploadsMSW = () => [
rest.post('*/api/upload', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetUploadUrlMock()),
        )
      }),]
