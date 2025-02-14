'use client';

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function ModalBackdrop({ children }) {
    const router = useRouter();
    const dialogRef = useRef(null);

    useEffect(() => {
        if (dialogRef.current && !dialogRef.current.open) {
            dialogRef.current.showModal(); // ✅ Only open if it's not already open
        }
    }, []);

    const closeModal = () => {
        if (dialogRef.current) {
            dialogRef.current.close(); // ✅ Close modal properly before navigation
        }

        if (window.history.length > 1) {
            router.back(); // ✅ Go back if history exists
        } else {
            router.replace('/'); // ✅ Redirect to home if no history
        }
    };

    return (
        <div className="modal-backdrop" onClick={closeModal}>
            <dialog className="modal" ref={dialogRef}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    {children}
                    <button onClick={closeModal}>Close</button> {/* ✅ Close button */}
                </div>
            </dialog>
        </div>
    );
}
