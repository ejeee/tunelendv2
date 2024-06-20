import Role from '../models/role.js';
import Permissions from '../models/permission.js';

function checkPermission(permission) {
  return (req, res, next) => {
    const userRole = req.user ? req.user.role : 'anonymous';
    const userPermissions = new Permissions().getPermissionsByRoleName(userRole);

    if (userPermissions.includes(permission)) {
      return next();
    } else {
      return res.status(403).json({ error: 'Access denied' });
    }
  };
}

function checkRole(roleName) {
  return (req, res, next) => {
    const userRole = req.user ? req.user.role : 'anonymous';

    if (userRole === roleName) {
      return next();
    } else {
      return res.status(403).json({ error: 'Access denied' });
    }
  };
}

export { checkPermission, checkRole };