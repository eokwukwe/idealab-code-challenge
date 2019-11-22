/* eslint-disable no-console */
import db from '../database/models';

const sql = `
SELECT "permission", "description" FROM "Permissions"
INNER JOIN "RolePermissions"
ON "Permissions"."id" = "RolePermissions"."permissionId"
INNER JOIN "Roles"
ON "Roles"."id" = "RolePermissions"."roleId"
INNER JOIN "UserRoles"
ON "UserRoles"."roleId" = "Roles"."id"
INNER JOIN "Users"
ON "Users"."id" = "UserRoles"."userId"
WHERE "Users"."id" = (:id) `;

db.sequelize
  .authenticate()
  .then(() => {
    console.log('successfully connected');
  })
  .catch(error => {
    console.error('Error in connection', error);
  });

export default async id => {
  const permissions = await db.sequelize.query(sql, {
    replacements: { id },
    type: db.sequelize.QueryTypes.SELECT
  });
  return permissions;
};
