import { TQueryParams } from './../../../types/global.type';

import { TData } from "../../../types/academicManagement.type";
import {  TResponseRedux } from "../../../types/global.type";
import { baseApi } from "../../api/baseApi";


const academicManagementApi = baseApi.injectEndpoints({
    endpoints :(builder)=>({
        getAllSemester:builder.query({
            query:(args)=>{
                const params = new URLSearchParams()
                if(args){
                    args.forEach((item: TQueryParams) => {
                        params.append(item.name , item.value as string)
                    });
                }

                
                return{
                url:"/academic-semesters",
                method:"GET",
                params:params
            }},
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