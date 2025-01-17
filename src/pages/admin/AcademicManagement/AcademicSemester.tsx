import { useGetAcademicSemestersQuery } from "../../../redux/features/academicSemester/academicSemester";


const AcademicSemester = () => {
    const {data} = useGetAcademicSemestersQuery(undefined)
    console.log(data);
    return (
        <div>
            <h1>Academic Semester</h1>
        </div>
    );
};

export default AcademicSemester;