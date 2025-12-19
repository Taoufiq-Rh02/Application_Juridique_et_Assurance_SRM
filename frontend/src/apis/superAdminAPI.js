import API from './api';

export const superAdminAPI = {
  createProfil: (data) => API.post(`/profile`, data),

  getProfiles: (page = 1, limit = 10) =>
    API.get(`/profile/profiles?page=${page}&limit=${limit}`),

  getProfileById: (id) =>
    API.get(`/profile/profile/${id}`),

  updateProfile: (id, data) =>
    API.put(`/profile/profile/${id}`, data),

  // ✅ delete (soft delete)
  deleteProfile: (id) => API.delete(`/profile/profile/${id}`),


}
