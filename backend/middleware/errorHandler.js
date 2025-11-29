/**
 * Custom error handling middleware
 */
const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);

    if (err.response?.status === 404) {
        return res.status(404).json({ 
            error: 'City not found',
            statusCode: 404 
        });
    }

    if (err.response?.status === 401) {
        return res.status(401).json({ 
            error: 'Invalid API key',
            statusCode: 401 
        });
    }

    if (err.code === 'ECONNREFUSED') {
        return res.status(503).json({ 
            error: 'Weather API service unavailable',
            statusCode: 503 
        });
    }

    res.status(500).json({ 
        error: 'Internal server error',
        statusCode: 500,
        message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
};

module.exports = errorHandler;
