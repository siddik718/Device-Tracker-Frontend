import axios from "axios";
import { clear, retrive, store } from "./storage";

export const POST = async (endpoint, values = {}) => {
  console.log("Insdie POST : ", endpoint);
  let { accessToken, refreshToken } = retrive();
  try {
    const res = await axios.post(endpoint, values, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res;
  } catch (err) {
    if (err.response && err.response.status === 401) {
      try {
        const refreshResponse = await axios.post(
          import.meta.env.VITE_SERVER + "auth/access-by-refresh-token",
          {
            refreshToken,
          }
        );
        store(refreshResponse.data.payload);
        accessToken = refreshResponse.data.payload.accessToken;
        const res = await axios.post(endpoint, values, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        return res;
      } catch (refreshTokenErr) {
        clear();
        return refreshTokenErr;
      }
    } else {
      return err;
    }
  }
};

export const GET = async (endpoint, query = {}) => {
  console.log("Inside Get : ", endpoint);
  let { accessToken, refreshToken } = retrive();
  try {
    const res = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: query,
    });
    return res;
  } catch (err) {
    if (err.response && err.response.status === 401) {
      try {
        const refreshResponse = await axios.post(
          import.meta.env.VITE_SERVER + "auth/access-by-refresh-token",
          {
            refreshToken,
          }
        );
        store(refreshResponse.data.payload);
        accessToken = refreshResponse.data.payload.accessToken;
        const res = await axios.get(endpoint, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        return res;
      } catch (refreshTokenErr) {
        clear();
        return refreshTokenErr;
      }
    } else {
      return err;
    }
  }
};

export const PATCH = async (endpoint, values = {}) => {
  console.log("Inside Patch: ", endpoint);
  let { accessToken, refreshToken } = retrive();
  try {
    const res = await axios.patch(endpoint, values, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res;
  } catch (err) {
    if (err.response && err.response.status === 401) {
      try {
        const refreshResponse = await axios.post(
          import.meta.env.VITE_SERVER + "auth/access-by-refresh-token",
          {
            refreshToken,
          }
        );
        store(refreshResponse.data.payload);
        accessToken = refreshResponse.data.payload.accessToken;
        const res = await axios.patch(endpoint, values, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        return res;
      } catch (refreshTokenErr) {
        clear();
        return refreshTokenErr;
      }
    } else {
      return err;
    }
  }
};

export const DELETE = async (endpoint) => {
  // console.log('Inside Delete API: ',endpoint);
  let { accessToken, refreshToken } = retrive();
  try {
    const res = await axios.delete(endpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    alert(res.data.message);
    return res;
  } catch (err) {
    if (err.response && err.response.status === 401) {
      try {
        const refreshResponse = await axios.post(
          import.meta.env.VITE_SERVER + "auth/access-by-refresh-token",
          {
            refreshToken,
          }
        );
        store(refreshResponse.data.payload);
        accessToken = refreshResponse.data.payload.accessToken;
        const res = await axios.delete(endpoint, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        alert(res.data.message);
      } catch (refreshTokenErr) {
        clear();
        return refreshTokenErr;
      }
    } else {
      return err;
    }
  }
};
