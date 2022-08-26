export const Card = () => {
    return (
        <div
            className={`card card-ecommerce`}
        >
            {/* <Badge fastDelivery={fastDelivery} /> */}


            <div

            >
                <div className="card-image-wrapper">
                    <img
                        src={
                            ``
                        }
                        className="card-image-ecommerce"
                        alt={`name`}
                        style={{ pointerEvents: "none" }}
                    />
                </div>
                <div className="card-content-ecommerce">
                    <div className="card-title header header-tertiary">
                        <span className="text-black">{`brand`}</span>
                        <span className="card-subtitle text-black ml-md">{`category`}</span>
                        <span className="card-subtitle text-black ml-small">
                            ({`subcategory`})
                        </span>
                    </div>

                    <div className="product-price-details">
                        <div className="product-price">
                            <span>₹{`sellingPrice`}</span>
                        </div>
                        <div className="product-mrp">₹{`price`}</div>
                        <div className="product-discount">({`offer`})</div>
                    </div>
                </div>
            </div>
            <div className="px-1">
               
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                           
                        }}
                    >
                        {`${"goto Cart".toUpperCase()}`}
                    </button>
               
                    <button
                        className={`btn btn-primary`}

                    >

                    </button>
               
            </div>
        </div>
    );
};
