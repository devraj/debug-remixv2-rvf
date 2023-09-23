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

export const getGetGameSettingsOverridesMock = () => ({createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`, updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`, id: faker.datatype.uuid(), isMusicMuted: faker.datatype.boolean(), isVoiceMuted: faker.datatype.boolean(), quality: faker.random.word(), isEnabled: faker.datatype.boolean()})

export const getGetMyGamePreferencesMock = () => ({createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`, updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`, id: faker.datatype.uuid(), isMusicMuted: faker.datatype.boolean(), isVoiceMuted: faker.datatype.boolean(), quality: faker.random.word()})

export const getSetMyGamePreferencesMock = () => ({createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`, updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`, id: faker.datatype.uuid(), isMusicMuted: faker.datatype.boolean(), isVoiceMuted: faker.datatype.boolean(), quality: faker.random.word()})

export const getGetChallengeLocksMock = () => ({values: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.datatype.number({min: undefined, max: undefined})))})

export const getGetChallengeLevelInfoMock = () => ({active: faker.datatype.boolean(), codes: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word()))})

export const getGetGameChallengeLevelProgressMock = () => ({id: faker.datatype.number({min: undefined, max: undefined}), selectedLesson: faker.datatype.number({min: undefined, max: undefined}), lessons: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.datatype.number({min: undefined, max: undefined}), progress: faker.random.word(), isCompleted: faker.datatype.boolean(), completedActions: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.random.word()))}))})

export const getChallengeMSW = () => [
rest.get('*/api/challenge/preference/overrides', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetGameSettingsOverridesMock()),
        )
      }),rest.get('*/api/challenge/preference', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetMyGamePreferencesMock()),
        )
      }),rest.put('*/api/challenge/preference', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getSetMyGamePreferencesMock()),
        )
      }),rest.get('*/api/challenge/lock', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetChallengeLocksMock()),
        )
      }),rest.post('*/api/challenge/analytics', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.get('*/api/challenge/:challengeId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetChallengeLevelInfoMock()),
        )
      }),rest.get('*/api/challenge/:challengeId/version/:versionNumber/progress', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetGameChallengeLevelProgressMock()),
        )
      }),rest.put('*/api/challenge/:challengeId/version/:versionNumber/progress', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),]