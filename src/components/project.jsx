import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Project({ title, deskripsi, link }) {
    return (
        <a className='font-bold' href={link}>
            <div className="border rounded-lg border-gray-300 ml-0 p-4 m-2">
                <FontAwesomeIcon icon={faGithub} /> <span className='border-b'>{title}</span>
                <br />
                <p className='font-thin'>{deskripsi}</p>

            </div>
        </a>
    );
}

export default Project;
