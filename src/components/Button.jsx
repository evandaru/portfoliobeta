import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Button({ title, Icon, link }) {
    return (
        <a className='font-bold' href={link}>
            <div className="border rounded-lg border-gray-300 ml-0 p-4 m-2 flex flex-row gap-2">
                <FontAwesomeIcon icon={Icon} className="size-5 text-gray-500" /> <span className='border-b'>{title}</span>
            </div>
        </a>
    );
}

export default Button