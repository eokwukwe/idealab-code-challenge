/**
 *  Format validation error message
 *
 * @param {string} message The error message
 * @param {string} errorCode The custom error code
 * @param {string} field The input field that failed validation
 * @returns {object} the formatted error message object
 * @method
 */
const errorFormatter = (message, errorCode, field) => ({
  message,
  code: errorCode,
  field,
  status: 400
});

/**
 * @description Validate User Input
 *
 * @param {object} inputData
 * @param {object} schema
 * @returns {object} true if no error | array of errors
 */
export default async (inputData, schema) => {
  try {
    const value = await schema.validateAsync(inputData, {
      abortEarly: false
    });
    return { hasError: false, fields: value };
  } catch ({ details }) {
    const errors = [];
    details.forEach(error => {
      const message = `${error.message.replace(/"/g, '')}`;
      const field = `${error.path[0]}`;
      errors.push(errorFormatter(message, 'USR_02', field));
    });
    return { hasError: true, errors };
  }
};
