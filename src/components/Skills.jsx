import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Skills({ Icon, title, deskripsi }) {
    return (
        <div className="border rounded-lg border-gray-300 ml-0 p-4 m-2 ">
            <div className='flex flex-row gap-2'>

                <FontAwesomeIcon icon={Icon} className="size-5 text-gray-500" /> <span className='border-b'>{title}</span>
            </div>
            <p className='font-thin'>{deskripsi}</p>

        </div>
    );
}

export default Skills;
