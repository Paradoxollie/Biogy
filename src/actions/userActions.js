/**
 * Mock user actions for build compatibility 
 * This is a placeholder to avoid build errors related to missing imports
 */

export const logout = () => {
  // This is a mock function that does nothing
  // The actual logout is handled by the AuthContext
  return { type: 'USER_LOGOUT' };
}; 