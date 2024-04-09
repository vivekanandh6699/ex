//appError.js

// class createError extends Error {
//     constructor(message,statuscode) {
//         super(message);

//         this.statusCode = statusCode;
//         this.status = '${statuscode}'.startsWith('4') ? 'fail' : 'error';

//         Error.captureStackTrace(this,this.constructor);
//     }
// }

// module.exports = createError;

// utils/appError.js

const createError = (message, statusCode) => {
    const error = new Error(message);
    error.statusCode = statusCode;
    return error;
};

module.exports = createError;
