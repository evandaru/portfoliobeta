import React from 'react';
import { Tooltip } from 'react-tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Skills({ Icon, title, deskripsi }) {
    return (
        <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content={title}
            data-tooltip-place="top"
        >
            <div className="border rounded-lg border-gray-300 ml-0 p-3 m-1 ">
                <div className='flex flex-row gap-2'>

                    <FontAwesomeIcon icon={Icon} className="size-5 text-gray-500" />
                    {/* <span className='border-b'>{title}</span> */}
                </div>
                <p className='font-thin'>{deskripsi}</p>

            </div >
        </a>
    );
}

export default Skills;
