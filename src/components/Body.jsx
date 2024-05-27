import { ProductsList } from "../products/ProductsList";

export default function Body() {
    return (
        <>
            <h1 align="center" className="m-5"><u>Featured Products</u></h1>
            <div className="container">
                <div className="row">
                    { ProductsList.slice(0, 6).map((v) => {
                        return(
                            <Products data={v} key={v.id}/>
                        );
                    }) }
                </div>
            </div>
        </>
    );
}

function Products({data}) {
    return (
        <>
            <div className="col-sm-4 mb-3 mb-sm-0 mt-2">
                <div className="card">
                    <div className="card-body">
                    <img src={data.featuredImage} class="card-img-top" alt="..." />
                        <h5 className="card-title">{data.name}</h5>
                        <p className="card-text">{data.description}</p>
                        <p className="card-text">Price: <b>₹{data.basePrice}</b></p>
                        {
                            (data.inStock) ? <p className='text-success'>In Stock({data.stock})</p> : <p className='text-danger'>Not Available!</p>
                        }
                        Storage Options:<br />
                        {data.storageOptions.map((v) => {
                            return(
                                <>
                                <div className="btn text-danger m-1">{v}</div>
                                </>
                            );
                        })}<br />
                        Color Options:<br />
                        {data.colorOptions.map((v) => {
                            return(
                                <>
                                <div className="btn text-warning m-1">{v}</div>
                                </>
                            );
                        })}<br />
                        <a href="#" className="btn btn-secondary m-2">Buy Now</a>
                        <a href="#" className="btn btn-warning m-2">Add To Cart</a>
                    </div>
                </div>
            </div>
        </>
    );
}