import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Button({ title, Icon, link }) {
    return (
        <a className='text-sm' href={link} target='_blank'>
            <div className="border rounded-lg border-gray-300 ml-0 p-3 m-2 flex flex-row gap-2 items-center max-sm:w-80">
                <FontAwesomeIcon icon={Icon} className="size-4 text-gray-500" /> <span className='border-b'>{title}</span>
            </div>
        </a>
    );
}

export default Button