import { adminRoutes } from "./../../routes/admin.routes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", ` ${token}`);
    }

    return headers;
  },
});

const baseQueryWithToken = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  console.log(result);
  // console.log(result);
  if (result.error?.status === 401) {
    console.log("adminRoutes");
    const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();
    const user = (api.getState() as RootState).auth.user;
    api.dispatch(
        setUser({
            user:user,
            token:data.data.accessToken
        })
    )
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithToken,
  endpoints: () => ({}),
});
