import { useState } from "react";
import Modal from "../components/Modal";

export default function ModalPage() {
    const [showModal, setShowModal] = useState(false);
    const handleClick = () => {
        setShowModal(true);
    };
    
    return (
        <div>
            <h2>A modal demonstration</h2>
            <button onClick={handleClick}>Open modal text</button>
            {showModal && <Modal />}
        </div>
    )
}   