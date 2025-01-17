/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin123",
    },
  });

  const [login] = useLoginMutation();
  // console.log(data);


  const onSubmit = async (data:FieldValues) => {
    const toastId =toast.loading("Loading...");
    try{
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    const res =await login(userInfo).unwrap();
    const user = verifyToken(res.data.accessToken) as TUser;
    dispatch(setUser({ user: user, token: res.data.accessToken }));
    toast.success("login successful",{id:toastId ,duration:2000});
    navigate(`/${user.role}/dashboard`); 
  }catch(err){
    toast.error("login failed" , {id:toastId ,duration:2000});
  }
    
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">Id</label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Submit</Button>
    </form>
  );
};

export default Login;
