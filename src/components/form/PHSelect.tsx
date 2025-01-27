import { Form, Select, } from "antd";
import { Controller } from "react-hook-form";


interface PHSelectProps {
  label: string;
  name: string;
  options: { label: string; value: string }[] | undefined;
  disabled?: boolean;
  
}

const PHSelect = ({ label , name , options , disabled }: PHSelectProps) => {
   
    return (
     <Controller
     name={name}
      render={({ field ,fieldState:{error} }) => (
        <Form.Item label= {label}>
        <Select
          style={{ width: "100%"}}
          {...field}
          options={options}
          disabled={disabled}
          size="large"
        />
        {error && <small style={{color:"red"}}>{error.message}</small>}
        </Form.Item>
      )}
    
   />
       
    )
};

export default PHSelect;