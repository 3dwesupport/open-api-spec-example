module.exports = function (worldsService) {
    let operations = {
        GET
    };

    function GET(req, res, next) {
        res.status(200).json(worldsService.getWorlds(req.query.worldName));
    }

    // NOTE: We could also use a YAML string here.
    GET.apiDoc = {
        summary: 'Returns worlds by name.',
        operationId: 'getWorlds',
        parameters: [
            {
                in: 'query',
                name: 'worldName',
                required: true,
                schema: {
                    type: 'string'
                }
            }
        ],
        responses: {
            200: {
                description: 'A list of worlds that match the requested name.',
                content: {
                    "application/json": {
                        schema: {
                            type: 'array',
                            items: {
                                $ref: '#/components/schemas/World'
                            }
                        }
                    }
                }
            },
            403: {
                description: 'ERROR in Authentication',
                content: {
                    "application/json": {
                        schema: {
                            type: 'string'
                        }
                    }
                }
            },
            default: {
                description: 'An error occurred',
                content: {
                    "application/json": {
                        schema: {
                            additionalProperties: true
                        }
                    }
                }
            }
        }
    };

    return operations;
}