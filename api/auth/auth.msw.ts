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

export const getSignupUserMock = () => ({success: faker.datatype.boolean(), email: faker.internet.email()})

export const getLoginForAuthTokenMock = () => ({access_token: faker.random.word(), token_type: faker.random.word()})

export const getRefreshJwtTokenMock = () => ({access_token: faker.random.word(), token_type: faker.random.word()})

export const getGetMeMock = () => ({createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`, updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`, id: faker.datatype.uuid(), firstName: faker.helpers.arrayElement([faker.random.word(),{}]), lastInitial: faker.helpers.arrayElement([faker.random.word(),{}]), displayableName: faker.helpers.arrayElement([faker.random.word(),{}]), avatarUrl: faker.helpers.arrayElement([faker.random.word(),{}])})

export const getAuthMSW = () => [
rest.post('*/api/signup', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getSignupUserMock()),
        )
      }),rest.post('*/api/password/reset', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.post('*/api/initiate/otp/email', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.post('*/api/initiate/otp/sms', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.post('*/api/initiate/password/reset', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.post('*/api/initiate/verify', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.post('*/api/verify/account', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.post('*/api/verify/otp', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.post('*/api/token', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getLoginForAuthTokenMock()),
        )
      }),rest.post('*/api/refresh', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getRefreshJwtTokenMock()),
        )
      }),rest.post('*/api/logout', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.get('*/api/me', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetMeMock()),
        )
      }),]
