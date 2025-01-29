import { useState } from "react";
import { TQueryParams } from "../../../types";
import { useGetAcademicDepartmentsQuery } from "../../../redux/features/admin/academicManagementApi";
import { Table, TableColumnsType, TableProps } from "antd";

type TTableData = {
  name: string;
  academicFaculty: React.ReactNode
};

const AcademicDepartment = () => {
  const [params, setParams] = useState<TQueryParams[] | undefined>(undefined);

  const { data: facultyData, isFetching } =
    useGetAcademicDepartmentsQuery(params);

  const tableData = facultyData?.data?.map(({ name, academicFaculty }) => ({
    key: name,
    name,
    academicFaculty: academicFaculty as unknown as React.ReactNode
  }));

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "department of engineering",
          value: "department of engineering",
        },
        {
          text: "department of science",
          value: "department of science",
        },
        {
          text: "department of art",
          value: "department of art",
        },
        {
          text: "department of business",
          value: "department of business",
        },
        {
          text: "department of law",
          value: "department of law",
        },
      ],
      
      
      
      
      
    },
  ];
  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParams[] = [];

      filters?.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );
      console.log(filters);
      setParams(queryParams);
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

export default AcademicDepartment;
