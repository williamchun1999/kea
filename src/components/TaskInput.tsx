import { useState } from 'react'

interface TaskInputProps {
    title: string
    type: string
    htmlfor: string
    id: number
    onConfirm: (newState: boolean) => void
}

const TaskInput = ({ title, type, htmlfor, id, onConfirm }: TaskInputProps) => {

    const [currentName, setName] = useState('')
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);


    //logic needed for updating data when user edits some value
    function handleUpdate() {
        console.log(currentName)
    }


    //close the modals
    function handleConfirmDelete() {
        onConfirm(false)
    }


  return (
    <>
        {/* modal setup */}
        <input type="checkbox" id={htmlfor} className="modal-toggle" />


        <div className="modal bg-transparent">

            {/* modal for editing tasks */}
            <div className="modal-box ">

                {/* top elements (title, exit button) */}
                <div className="top flex flex-1 justify-between">

                    <h3 className="text-font-bold text-lg">{title} Task</h3>
                    <label className="btn btn-circle bg-transparent border-0" htmlFor={htmlfor}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </label>
                </div>
                
                {/* inputs */}
                <div className="editTask flex-1 flex-col">
                    <label htmlFor="taskName" className='block w-full'>Task Name:</label>
                    <input type="text" id="taskName" placeholder="Type here" className="input input-bordered w-full" onChange={(e) => setName(e.target.value)} />

                    {type === "progress" ? 
                    <><label htmlFor="taskProgress" className='block w-full'>Progress:</label><input type="text" id="taskProgress" placeholder="Type here" className="input input-bordered w-full" /></> : null
                        }
                    
                </div>

                {/* "period" select menu */}
                <div className="selectMenu flex flex-1 justify-between">
                    <label htmlFor="period" className=' flex flex-1 items-center'>Period</label>
                    <select className="select select-bordered w-9/12" id='period'>

                        <option disabled selected>1 Week</option>
                        <option>3 days</option>
                        <option>5 days</option>
                    </select>

                </div>
                
                {/* update & delete buttons */}
                <div className="modal-action flex-col space-x-0">
                    <label htmlFor={htmlfor} className='btn btn-block' onClick={handleUpdate}>Update</label>
                    <label htmlFor="deleteConfirmation" className='btn btn-block' onClick={() => setShowDeleteConfirmation(true)}>Delete</label>

                </div>
                
            </div>
        </div>


        {/* Confirm Delete modal */}
        {showDeleteConfirmation && (
            
            <>
                <input type="checkbox" id="deleteConfirmation" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">{`Are you sure you want to delete?`}</h3>
                        
                        <div className="modal-action w-full">
                        <label htmlFor="my-modal" className="btn w-full" onClick={handleConfirmDelete}>Delete</label>
                        </div>
                    </div>
                </div>
             </>
        )}


    </>
  )
}

export default TaskInput

