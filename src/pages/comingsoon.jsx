import { faBackward } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";

function Comingsoon() {
    return (
        <div className="h-screen flex justify-center items-center flex-col">
            <img className="w-24" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmFibW9qMDE2ZWF3cG04Znd4MndxZmY1dHBkeDZsZWs0ODNzaDJ4ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/5eLDrEaRGHegx2FeF2/giphy.gif" alt="" />
            <p>
                sabar bang, masih otw coding
            </p>
            <Button link="/" Icon={faBackward} title="back" />
        </div>
    );
}

export default Comingsoon;
