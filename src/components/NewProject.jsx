import Input from "./Input"
import { useRef } from "react"
export default function NewProject({onAdd}) {
    const refTitle = useRef()
    const refDesc = useRef()
    const refDueDate = useRef()
    function handleSaveProject() {

        onAdd({
            title:refTitle.current.value,
            description:refDesc.current.value,
            dueDate:refDueDate.current.value
        })
    }
    return <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li>
                <button onClick={handleSaveProject} 
                className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
                    Save
                </button>
            </li>
        </menu>
        <div>
            <Input type='text' ref={refTitle} label="Title" isTextarea={false} />
            <Input ref={refDesc} label="Descriptions" isTextarea={true} />
            <Input type='date' ref={refDueDate} label="Due Date" isTextarea={false} />
        </div>

    </div>

}