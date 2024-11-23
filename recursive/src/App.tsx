import { RiOrganizationChart } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";

type Department = {
  name: string,
  departments?: Department[]
}

const App = () => {
  // department data
  const departments: Department[] = [
    {
      name: "Sales", departments: [
        { name: "Alice Johnson", departments: [] },
        { name: "Bob Smith", departments: [] },
        { name: "Charlie Brown", departments: [] },
      ]
    },
    {
      name: "Engineering", departments: [
        {
          name: "Frontend Team", departments: [
            { name: "David Lee", departments: [] },
            { name: "Eva White", departments: [] },
          ]
        },
        {
          name: "Backend Team", departments: [
            { name: "Frank Harris", departments: [{ name: "Node.js", departments: [] }] },
            { name: "Grace Kim", departments: [] },
          ]
        },
      ]
    },
    {
      name: "HR", departments: [
        {
          name: "Recruitment Team", departments: [
            { name: "Helen Adams", departments: [] }
          ]
        }
      ]
    },
  ];

  return (
    <>
      <div className="px-12 py-12 flex flex-col gap-6 cursor-default">
        <h1 className="text-2xl font-semibold">Recursive React Component</h1>
        <div className="flex flex-col gap-1 w-fit border rounded-lg px-4 py-2">
          {departments.map((department) => (
            <>
              <Department department={department} key={department.name} />
            </>
          ))}
        </div>
      </div>
    </>
  )
}

// recursive component
const Department = ({ department }: { department: Department }) => {
  return (
    <>
      <div className="flex gap-1 items-center">
        {department.departments?.length ? (
          <RiOrganizationChart className="text-blue-600 size-5" />
        ) : (
          <IoMdPerson className="text-green-600 size-5" />
        )}
        <p className="" key={department.name}>{department.name}</p>
      </div>

      {department.departments?.map((subdepartment: Department) => (
        <div className="ml-6 flex flex-col gap-1 w-fit">
          <Department department={subdepartment} key={subdepartment.name} />
        </div>
      ))}
    </>
  )
}

export default App