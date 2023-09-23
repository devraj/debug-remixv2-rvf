export default {
    harvest: {
        output: {
            mode: 'tags-split',
            target: 'api/harvest.ts',
            schemas: 'api/models',
            mock: true,
        },
        input: {
            target: 'http://localhost:8000/api/openapi.json',
        },
    },
};