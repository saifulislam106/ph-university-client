/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFromConfig = Record<string, any>;

type PHFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFromConfig;

const PHForm = ({ onSubmit, children, defaultValues }: PHFormProps) => {
  const formConfig :TFromConfig = {};
  formConfig["defaultValues"] = defaultValues;
  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>{children}</Form>
    </FormProvider>
  );
};

export default PHForm;
