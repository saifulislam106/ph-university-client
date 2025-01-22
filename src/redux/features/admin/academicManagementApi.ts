import { TData } from "../../../types/academicManagement.type";
import {  TResponseRedux } from "../../../types/global.type";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
    endpoints :(builder)=>({
        getAllSemester:builder.query({
            query:()=>({
                url:"/academic-semesters",
                method:"GET"
            }),
            transformResponse:(response :TResponseRedux<TData[]>)=>{
               console.log(response);
                return {
                    data: response.data,
                    meta :response.meta
                };
            }
        
        }),
        addAcademivSemester:builder.mutation({
            query:(data)=>({
                url:"/academic-semesters/create-academic-semester",
                method:"POST",
                body:data
            })
        })
    })
})

export const {useGetAllSemesterQuery ,useAddAcademivSemesterMutation}= academicManagementApi