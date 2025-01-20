import { Form, Select, } from "antd";


interface PHSelectProps {
  label: string;
}

const PHSelect = ({ label }: PHSelectProps) => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };
      
    return (
       <Form.Item label= {label}>
        <Select
          defaultValue="lucy"
          style={{ width: "100%"}}
          onChange={handleChange}
          options={[
            { value: '01', label: 'Summer' },
            { value: '02', label: 'Autumn' },
            { value: '03', label: 'Fall' },
            
          ]}
        />
        </Form.Item>
       
    );
};

export default PHSelect;