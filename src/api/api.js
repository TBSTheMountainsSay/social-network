import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '38c3d0b0-b577-49ea-8de7-6a56d2e979f6',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 30) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  follow(id) {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },

  unfollow(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get('profile/' + userId);
  },

  getStatus(userId) {
    return instance.get('profile/status/' + userId);
  },

  updateStatus(status) {
    return instance.put('profile/status', { status: status });
  },
};

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`);
  },

  login(email, password, rememberMe = false) {
    return instance.post('auth/login', { email, password, rememberMe });
  },

  logout() {
    return instance.delete('auth/login');
  },
};
