import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Tag from './tag';


function Project({ title, shortDescription, fullDescription, link ,tag}) {
    return (
        <a className="font-bold" href={link} target='_blank'>
            <div className="border rounded-lg border-gray-300 p-4 m-2 transition-all duration-300 overflow-hidden max-h-14  group hover:max-h-96  delay-300 max-sm:max-h-16">
                <FontAwesomeIcon icon={faGithub} /> <span className="border-b">{title}</span>
                <span className="font-thin transition-all duration-300 ease-in-out delay-300 opacity-100 group-hover:opacity-0">  {shortDescription}</span>
                <br />
                <p className="font-thin transition-all duration-300 ease-in-out delay-300 opacity-0 group-hover:opacity-100">{fullDescription}</p>
                <div>
                    {tag}

                </div>
            </div>

        </a>
    );
}

export default Project;
