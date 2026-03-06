const ADMIN_ROLE = 'admin';
const DEFAULT_USER_ROLE = 'student';

const normalizeUserRole = (role) => (role === ADMIN_ROLE ? ADMIN_ROLE : DEFAULT_USER_ROLE);

const isAdminRole = (role) => normalizeUserRole(role) === ADMIN_ROLE;

module.exports = {
  ADMIN_ROLE,
  DEFAULT_USER_ROLE,
  normalizeUserRole,
  isAdminRole,
};
