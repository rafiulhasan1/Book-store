import { Link } from "react-router-dom";


const Book = ({ book }) => {

    const { bookName, author, image, category, rating, tags, bookId } = book;

    return (
        <Link to={`books/${bookId}`}>
            <div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="bg-blue-300 rounded-2xl m-6">
                        <img
                            src={image}
                            className="h-41.5 my-8"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className="flex justify-center gap-3">
                            {
                                tags.map((tag, index) => <button key={index} className="btn btn-outline btn-xs">{tag}</button>)
                            }
                        </div>
                        <h2 className="card-title">
                            {bookName}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <h2>By : {author}</h2>
                        <div className="border-t-2 border-dashed my-4"></div>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">{category}</div>
                            <div className="badge badge-outline">{rating} star </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;