import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Tag(title, color, icon) {
    return (<div>
        <div className={`flex bg${color} `}>
            <FontAwesomeIcon icon={icon} /> | {title}
        </div>
    </div>)
}
export default Tag