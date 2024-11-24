import { IoChevronForward } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { RiOrganizationChart } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { useState } from "react";
import { data } from "./utils/data";

type Department = {
  name: string,
  departments?: Department[]
}

const App = () => {
  // assign department data
  const departments: Department[] = data;

  return (
    <div className="select-none px-12 py-12 flex flex-col gap-6 cursor-default">
      <h1 className="text-2xl font-semibold">Recursive React Component</h1>
      <div className="flex flex-col gap-1 w-96 border rounded-lg px-4 py-2">
        {departments.map((department) => (
          department.name && <Department department={department} key={department.name} />
        ))}
      </div>
    </div>
  )
}

// recursive component
const Department = ({ department }: { department: Department }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={() => setOpen(!open)} className={`flex gap-1 items-center ${department.departments?.length ? "cursor-pointer" : "cursor-default"}`}>
        {department.departments?.length ? (
          <>
            {!open ? <IoChevronForward className="size-4 text-gray-600" /> : <IoChevronDown className="size-4 text-gray-600" />}
            <RiOrganizationChart className="text-blue-600 size-6" />
          </>
        ) : (
          <IoMdPerson className="text-neutral-800 size-5" />
        )}
        <p key={department.name}>{department.name}</p>
      </div>

      {open && department.departments?.map((subdepartment: Department) => (
        <div className="ml-6 flex flex-col gap-1" key={subdepartment.name}>
          {subdepartment.name && <Department department={subdepartment} key={subdepartment.name} />}
        </div>
      ))}
    </>
  )
}

export default App