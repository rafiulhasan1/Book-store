import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId)
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id)

    //console.log(bookId, data, book)

    const { bookName, author, image, review, category, tags, rating, publisher, yearOfPublishing, totalPages } = book;

    return (
        <div className="hero bg-base-200 min-h-screen my-14">
            <div className="hero-content flex-col lg:flex-row">
                <img className="mx-16 h-141"
                    src={image}
                />
                <div>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <h3 className="text-xl mt-4"><span className="font-bold">By : </span> {author}</h3>
                    <div className="border-b mt-3"></div>
                    <h3 className="text-xl mt-3">{category}</h3>
                    <div className="border-b mt-3"></div>
                    <p className="pt-6">
                        <span className="font-bold">Review : </span> {review}
                    </p>
                    <div className="py-4 font-bold">
                        <span className="font-bold">Tags </span>
                        {
                            tags.map((tag, index) => <button key={index} className="btn btn-outline btn-xs mr-3">{tag}</button>)
                        }
                    </div>
                    <div className="border-b mt-3"></div>
                    <h3 className="text-lg mt-4">Number of Pages : {totalPages}</h3>
                    <h3 className="text-lg mt-4">Publisher : {publisher}</h3>
                    <h3 className="text-lg mt-4">Year of Publishing : {yearOfPublishing}</h3>
                    <h3 className="text-lg my-4">Rating : {rating}</h3>
                    <button className="btn btn-outline btn-primary mr-4">Read</button>
                    <button className="btn btn-primary">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;