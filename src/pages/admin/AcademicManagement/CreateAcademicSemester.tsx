import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { monthOptions, nameOptions, yearOptions } from "../../../constants/semester";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/academicManagement.schema";

import { toast } from "sonner";
import { TResponse } from "../../../types/global.type";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagementApi";



const CreateAcademicSemester = () => {
  const [addAcademicSemester] =useAddAcademicSemesterMutation(undefined)

  const onSubmit: SubmitHandler<FieldValues> = async(data) => {
    const toastId = toast.success("loading ...")
    const name = nameOptions[Number(data?.name)-1]?.label
    const semesterDate = {
        name,
        code: data.name,
        year:data.year,
        startMonth: data.startMonth,
        endMonth: data.endMonth,
    }
    
    try{
      
      const res = await addAcademicSemester(semesterDate) as TResponse;
      if(res?.error){
        toast.error(res.error?.data?.message ,{id: toastId})
      }else{
        toast.success(res.data.message , {id:toastId})
      }
      console.log(res);
    }catch{
      toast.error("something went wrong")
    }
   
  };
  
  return (
    <Flex justify="center" align="middle">
      <Col span={6}>
        <PHForm onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema)} >
          <PHSelect label="Name:" name="name" options={nameOptions} />
          <PHSelect label="Year:" name="year" options={yearOptions} />
          <PHSelect label="Start Month:" name="startMonth" options={monthOptions} />
          <PHSelect label="End Month:" name="endMonth" options={monthOptions} />
          <div>
            <Button htmlType="submit">Submit</Button>
          </div>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
