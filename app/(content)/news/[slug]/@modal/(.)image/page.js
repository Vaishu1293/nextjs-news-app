'use client';

import { DUMMY_NEWS } from "@/dummy-news";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function InterceptedImagePage({ params }) {
    const router = useRouter();
    const dialogRef = useRef(null);

    const newsItemSlug = params.slug;
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsItemSlug);

    useEffect(() => {
        if (!newsItem) {
            router.replace('/'); // Redirect instead of breaking with `notFound()`
        } else if (dialogRef.current) {
            dialogRef.current.showModal(); // Open modal when component mounts
        }
    }, [newsItem, router]);

    if (!newsItem) {
        return null; // Prevents rendering if newsItem is not found
    }

    const closeModal = () => {
        if (window.history.length > 1) {
            router.back(); // Go back only if history exists
        } else {
            router.replace('/'); // If no history, redirect to home
        }
    };

    return (
        <div className="modal-backdrop" onClick={closeModal}>
            <dialog className="modal" ref={dialogRef}>
                <div className="fullscreen-image">
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                </div>
            </dialog>
        </div>
    );
}
