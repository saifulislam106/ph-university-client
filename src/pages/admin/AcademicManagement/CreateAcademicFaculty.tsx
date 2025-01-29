import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicManagementApi";
import { toast } from "sonner";
import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicFacultySchema } from "../../../schemas/academicManagement.schema";
import { facultyNameOptions } from "../../../constants/a.faculty";

const CreateAcademicFaculty = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation(undefined);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.success("loading ...");

    const facultyData = {
      name: data.name,
    };

    try {
      const res = await addAcademicFaculty(facultyData);
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
          resolver={zodResolver(academicFacultySchema)}
        >
          <PHSelect label="Name:" name="name" options={facultyNameOptions} />

          <div>
            <Button htmlType="submit">Submit</Button>
          </div>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicFaculty;
