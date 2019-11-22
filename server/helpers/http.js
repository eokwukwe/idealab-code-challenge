export default {
  /**
   * @description This method returns a server respone object for a
   *    single record and caches the record is cache is true
   *
   * @param {object} res HTTP respone object
   * @param {object} data The record to send in the response
   * @param {number} statusCode HTTP status code
   * @return {object} server reponse
   */
  httpSingleRecordResponse(res, data, statusCode) {
    return res.status(statusCode || 200).json({ ...data });
  },

  /**
   * @description This method returns a server respone object for a
   *    collection of records and caches the record is cache is true
   *
   * @param {object} res HTTP respone object
   * @param {object} data The record to send in the response
   * @return {object} server reponse
   */
  httpCollectionRecordResponse(res, data) {
    return res.status(200).json({ ...data });
  },

  /**
   * @description This method returns error respone object
   *
   * @param {object} res HTTP respone object
   * @param {object} options The info about the error (code, field, message )
   * @param {number} statusCode
   * @return {object} server reponse
   */
  httpErrorResponse(res, options, statusCode) {
    const error = {
      status: statusCode,
      code: options.errorCode,
      message: options.message,
      field: options.field
    };
    return res.status(statusCode).json({ error });
  }
};
