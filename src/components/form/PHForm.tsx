import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";


type PHFormProps = {
 onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
};

const PHForm = ({ onSubmit, children }:PHFormProps) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PHForm;
