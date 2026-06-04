const Book = ({ book }) => {

    const { bookName, author, image } = book;

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="bg-blue-300 rounded-2xl m-6">
                    <img
                        src={image}
                        className="h-[166px] my-8"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <h2>By : {author}</h2>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;