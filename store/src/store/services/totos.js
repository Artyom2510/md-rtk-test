import { baseApi } from './api.endpoints';

export const todosApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getTodos: builder.query({
      query: ({limit = 3}) => `/todos?_limit=${limit}`,
    }),
    getTodoById: builder.query({
      query: ({ id }) => `/todos/${id}`,
    }),
  }),
});

export const {useGetTodosQuery, useGetTodoByIdQuery } = todosApi;
