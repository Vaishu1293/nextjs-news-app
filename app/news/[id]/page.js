export default function NewsDetailPage({ params }) {
    return (<>
        <h1>News Details Page</h1>
        <p>{params.id}</p>
    </>);
}