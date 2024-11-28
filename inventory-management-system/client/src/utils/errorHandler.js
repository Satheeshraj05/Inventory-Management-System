const errorHandler = (error, req, res, next) => {
    console.error(error.stack);

    const status = error.statusCode || 500;
    const message = error.message || 'Something went wrong';

    res.status(status).json({
        error: {
            message: message,
            status: status
        }
    });
};

module.exports = errorHandler;