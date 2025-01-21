import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { monthOptions, nameOptions, yearOptions } from "../../../constants/semester";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/academicManagement.schema";
import { useAddAcademivSemesterMutation } from "../../../redux/features/admin/academicManagementApi";
import { toast } from "sonner";



const CreateAcademicSemester = () => {
  const [addAcademicSemester] =useAddAcademivSemesterMutation(undefined)

  const onSubmit: SubmitHandler<FieldValues> = async(data) => {
    const name = nameOptions[Number(data?.name)-1]?.label
    const semesterDate = {
        name,
        code: data.name,
        year:data.year,
        startMonth: data.startMonth,
        endMonth: data.endMonth,
    }
    
    try{
      console.log(semesterDate);
      const res = await addAcademicSemester(semesterDate)
      console.log(res);
    }catch(err){
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
