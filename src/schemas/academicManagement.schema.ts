import { z } from "zod";

export  const academicSemesterSchema= z.object({
    name:z.string({required_error:"This feild is required"}),
    year:z.string({required_error:"This feild is required"}),
    startMonth:z.string({required_error:"This feild is required"}),
    endMonth:z.string({required_error:"This feild is required"})
  })

export  const academicFacultySchema= z.object({
    name:z.string({required_error:"This feild is required"}),
  })