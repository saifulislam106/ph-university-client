import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";


const CreateAcademicSemester = () => {
    const onSubmit :SubmitHandler<FieldValues> = (data) => {
        console.log(data);
    };
    return (
        <Flex justify="center" align="middle">
        <Col span={6}>
        <PHForm onSubmit={onSubmit}>
            <PHInput type="text" name="name" label="Name:" />
            <PHSelect label={name}/>
            <div>
            <Button htmlType="submit">Submit</Button>
            </div>
        </PHForm>
        </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;