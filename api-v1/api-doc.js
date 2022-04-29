const apiDoc = {
    openapi: '3.0.0',
    servers: [{url: 'http://localhost:3000'}],
    info: {
        title: 'A getting started API.',
        version: '1.0.0'
    },
    paths: {},
    components: {
        schemas: {
            World: {
                type: 'object',
                properties: {
                    name: {
                        description: "The Name of this world",
                        type: 'string'
                    },
                    age: {
                        description: "Age of the world",
                        type: "number"
                    }
                },
                required: ['name']
            }
        }
    },
};

module.exports = apiDoc;