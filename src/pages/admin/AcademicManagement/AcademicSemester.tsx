import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagementApi";


const AcademicSemester = () => {
    const {data} = useGetAllSemesterQuery(undefined)
    console.log(data);
    return (
        <div>
            <h1>Academic Semester</h1>
        </div>
    );
};

export default AcademicSemester;