import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";

export default async function InterceptedImagePage({ params }) {

    const newsItemSlug = params.slug;
    const newsItem = await getNewsItem(newsItemSlug);

    if (!newsItem) {
        return null; // Prevents rendering if newsItem is not found
    }

    return (<>
        <ModalBackdrop>
            <div className="fullscreen-image">
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            </div>
        </ModalBackdrop>
    </>
    );
}
