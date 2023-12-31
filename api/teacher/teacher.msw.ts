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

export const getGetAllTeacherClassesMock = () => (Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`, updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`, id: faker.datatype.uuid(), active: faker.datatype.boolean(), startDate: `${faker.date.past().toISOString().split('.')[0]}Z`, endDate: faker.helpers.arrayElement([`${faker.date.past().toISOString().split('.')[0]}Z`,{}]), teacherId: faker.datatype.uuid(), userId: faker.datatype.uuid(), schoolId: faker.datatype.uuid(), schoolClassId: faker.datatype.uuid(), schoolName: faker.random.word(), schoolClassName: faker.random.word(), logoUrl: faker.random.word()})))

export const getGetTeacherClassByIdMock = () => ({createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`, updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`, id: faker.datatype.uuid(), name: faker.random.word(), symbol: faker.random.word(), avatarAssetId: faker.helpers.arrayElement([faker.random.word(),{}]), active: faker.datatype.boolean(), calendarYear: faker.datatype.number({min: undefined, max: undefined}), schoolYearId: faker.datatype.uuid(), teachableContentVersionId: faker.datatype.uuid(), schoolYearName: faker.random.word(), logoUrl: faker.random.word()})

export const getGetTeacherClassTocMock = () => ({createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`, updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`, id: faker.datatype.uuid(), number: faker.datatype.number({min: undefined, max: undefined}), teachableUnits: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`, updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`, id: faker.datatype.uuid(), number: faker.datatype.number({min: undefined, max: undefined}), title: faker.random.word(), unitVideos: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`, updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`, id: faker.datatype.uuid(), title: faker.random.word(), description: faker.random.word(), duration: faker.datatype.number({min: undefined, max: undefined}), thumbnailUrl: faker.random.word()}))}))})

export const getGetProfessionalDevelopmentVideoMock = () => ({createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`, updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`, id: faker.datatype.uuid(), title: faker.random.word(), description: faker.random.word(), duration: faker.datatype.number({min: undefined, max: undefined}), thumbnailUrl: faker.random.word(), unitVideoMetas: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`, updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`, id: faker.datatype.uuid(), language: faker.random.word(), metaUrl: faker.random.word(), trackKind: faker.random.word()})), videoUrl: faker.random.word()})

export const getGetTeacherClassStudentsSummaryMock = () => (Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`, updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`, id: faker.datatype.uuid(), active: faker.datatype.boolean(), startDate: `${faker.date.past().toISOString().split('.')[0]}Z`, endDate: faker.helpers.arrayElement([`${faker.date.past().toISOString().split('.')[0]}Z`,{}]), studentId: faker.datatype.uuid(), userId: faker.datatype.uuid(), schoolId: faker.datatype.uuid(), schoolClassId: faker.datatype.uuid(), firstName: faker.random.word(), lastName: faker.random.word(), avatarUrl: faker.random.word()})))

export const getGetTeacherClassStudentDetailsMock = () => ({createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`, updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`, id: faker.datatype.uuid(), active: faker.datatype.boolean(), startDate: `${faker.date.past().toISOString().split('.')[0]}Z`, endDate: faker.helpers.arrayElement([`${faker.date.past().toISOString().split('.')[0]}Z`,{}]), studentId: faker.datatype.uuid(), userId: faker.datatype.uuid(), schoolId: faker.datatype.uuid(), schoolClassId: faker.datatype.uuid(), firstName: faker.random.word(), lastName: faker.random.word(), avatarUrl: faker.random.word()})

export const getGetAllUnitsSummaryForClassMock = () => (Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.datatype.uuid(), number: faker.datatype.number({min: undefined, max: undefined}), title: faker.random.word(), learningIntention: faker.helpers.arrayElement([faker.random.word(),{}]), schoolTermId: faker.datatype.uuid(), schoolYearId: faker.datatype.uuid(), schoolYearName: faker.random.word(), schoolTermName: faker.random.word(), weeklyTopics: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.datatype.uuid(), number: faker.datatype.number({min: undefined, max: undefined}), title: faker.random.word(), challengeTitle: faker.helpers.arrayElement([faker.random.word(),{}]), thumbnailUrl: faker.random.word()})), bannerUrl: faker.random.word()})))

export const getGetClassUnitDetailForClassMock = () => ({createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`, updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`, id: faker.datatype.uuid(), number: faker.datatype.number({min: undefined, max: undefined}), title: faker.random.word(), learningIntention: faker.helpers.arrayElement([faker.random.word(),{}]), stemCurriculumOutlines: faker.helpers.arrayElement([faker.random.word(),{}]), coreContent: faker.helpers.arrayElement([faker.random.word(),{}]), stemPractices: faker.helpers.arrayElement([faker.random.word(),{}]), teacherNotes: faker.helpers.arrayElement([faker.random.word(),{}]), learningProgressions: faker.helpers.arrayElement([faker.random.word(),{}]), learningSuccessCriteria: faker.helpers.arrayElement([faker.random.word(),{}]), resources: faker.helpers.arrayElement([faker.random.word(),{}]), weeklyTopics: Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.datatype.uuid(), number: faker.datatype.number({min: undefined, max: undefined}), title: faker.random.word(), challengeTitle: faker.helpers.arrayElement([faker.random.word(),{}]), thumbnailUrl: faker.random.word()})), bannerUrl: faker.random.word()})

export const getGetTopicsSummaryForUnitAndClassMock = () => (Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.datatype.uuid(), number: faker.datatype.number({min: undefined, max: undefined}), title: faker.random.word(), challengeTitle: faker.helpers.arrayElement([faker.random.word(),{}]), thumbnailUrl: faker.random.word()})))

export const getGetTopicDetailForUnitAndClassMock = () => ({createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`, updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`, id: faker.datatype.uuid(), number: faker.datatype.number({min: undefined, max: undefined}), title: faker.random.word(), experience: faker.random.word(), represent: faker.random.word(), apply: faker.random.word(), learningIntention: faker.helpers.arrayElement([faker.random.word(),{}]), bannerUrl: faker.random.word()})

export const getTeacherMSW = () => [
rest.get('*/api/school/teacher/class', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetAllTeacherClassesMock()),
        )
      }),rest.get('*/api/school/teacher/class/:classId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetTeacherClassByIdMock()),
        )
      }),rest.get('*/api/school/teacher/class/:classId/learn', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetTeacherClassTocMock()),
        )
      }),rest.get('*/api/school/teacher/class/:classId/learn/video/:videoId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetProfessionalDevelopmentVideoMock()),
        )
      }),rest.get('*/api/school/teacher/class/:classId/student', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetTeacherClassStudentsSummaryMock()),
        )
      }),rest.post('*/api/school/teacher/class/:classId/student', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.get('*/api/school/teacher/class/:classId/student/:studentId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetTeacherClassStudentDetailsMock()),
        )
      }),rest.put('*/api/school/teacher/class/:classId/student/:studentId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.delete('*/api/school/teacher/class/:classId/student/:studentId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.get('*/api/school/teacher/class/:classId/lesson', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetAllUnitsSummaryForClassMock()),
        )
      }),rest.get('*/api/school/teacher/class/:classId/lesson/unit/:unitId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetClassUnitDetailForClassMock()),
        )
      }),rest.get('*/api/school/teacher/class/:classId/lesson/unit/:unitId/topic', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetTopicsSummaryForUnitAndClassMock()),
        )
      }),rest.get('*/api/school/teacher/class/:classId/lesson/unit/:unitId/topic/:topicId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetTopicDetailForUnitAndClassMock()),
        )
      }),]
