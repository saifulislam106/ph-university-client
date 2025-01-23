import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagementApi";
import { TData } from "../../../types/academicManagement.type";
import { useState } from "react";
import { TQueryParams } from "../../../types";

type TTableData = Pick<
  TData,
  "_id" | "name" | "year" | "startMonth" | "endMonth"
>;

const AcademicSemester = () => {
  const [params ,setParams]= useState<TQueryParams[] |undefined>(undefined)
  const { data: semesterDate ,  isFetching} = useGetAllSemesterQuery(params);

  // console.log(semesterDate);
  const tableData = semesterDate?.data?.map(
    ({ _id, name, year, startMonth, endMonth }) => ({
      key:_id,
      _id,
      name,
      year,
      startMonth,
      endMonth,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Summer",
          value: "Summer",
        },
        {
          text: "Fall",
          value: "Fall",
        },
      ],
    },
    {
      title: "Year",
      dataIndex: "year",
      filters: [
        {
          text: "2025",
          value: "2025",
        },
        {
          text: "2026",
          value: "2026",
        },
        {
          text: "2027",
          value: "2027",
        },
      ],
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
    },
  ];
  const onChange: TableProps<TTableData>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    if(extra.action==="filter"){
      const queryParams :TQueryParams[] = []

      filters?.name?.forEach((item) =>
        queryParams.push ({name:"name" ,value:item}),   
     ) 
      filters?.year?.forEach((item) =>
        queryParams.push ({name:"year" ,value:item}),   
     ) 
     setParams(queryParams)
    }
  };

  return (
    <Table<TTableData>
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicSemester;
