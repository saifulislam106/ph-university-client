import { baseApi } from "../../api/baseApi";

const academicSemestersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAcademicSemesters :builder.query({
            query:()=>({
                url:'academic-semesters',
                method:'GET',
            })
        })
    }),
})

export const {useGetAcademicSemestersQuery} = academicSemestersApi;