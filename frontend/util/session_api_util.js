
export const login = (user) => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {user: user}
  })
);

export const signup = (user) => (
  $.ajax({
    method: 'POST',
    url: '/api/user',
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

export const demoLogin = () => (
  $.ajax({
    method: 'POST', 
    url: '/api/session', 
    data: { user: {username: "Guest", password: "password"} }
  })
);
