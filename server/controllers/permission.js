import http from '../helpers/http';
import permissionQuery from '../helpers/query';

export default class PermissionController {
  static async permissions(req, res, next) {
    try {
      const { userId } = req.user;
      const userPermissions = await permissionQuery(userId);
      const data = {
        userPermissions
      };
      return http.httpCollectionRecordResponse(res, data);
    } catch (error) {
      return next(error);
    }
  }
}
