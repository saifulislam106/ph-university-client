import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useAddAcademicDepartmentMutation } from "../../../redux/features/admin/academicManagementApi";
import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { zodResolver } from "@hookform/resolvers/zod";
import PHSelect from "../../../components/form/PHSelect";
import { academicDepartmentSchema } from "../../../schemas/academicManagement.schema";
import { departmentNameOptions } from "../../../constants/a.department";

const CreateAcademicDepartment = () => {
  const [addAcademicDepartment] = useAddAcademicDepartmentMutation(undefined);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.success("loading ...");

    const departmentData = {
      name: data.name,
      academicFaculty: data.academicFaculty,
    };

    try {
      const res = await addAcademicDepartment(departmentData);
      if (res?.error) {
        toast.error(res.error?.data?.message, { id: toastId });
      } else {
        toast.success(res.data.message, { id: toastId });
      }
      console.log(res);
    } catch {
      toast.error("something went wrong");
    }
  };
  return (
    <Flex justify="center" align="middle">
      <Col span={6}>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicDepartmentSchema)}
        >
          <PHSelect label="Name:" name="name" options={departmentNameOptions} />

          <div>
            <Button htmlType="submit">Submit</Button>
          </div>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicDepartment;
