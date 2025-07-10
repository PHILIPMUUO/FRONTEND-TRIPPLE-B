// src/hooks/useAuth.js
const useAuth = () => {
  const isLoggedIn = localStorage.getItem('adminAuth') === 'true';
  return isLoggedIn;
};

export default useAuth;
