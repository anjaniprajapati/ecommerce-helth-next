const TopProducts=()=>{
    return(
        <>
            <div className="topCategoriesDiv">
                <h1 className="topCategories">Top Products</h1>
            </div>
            <div className="container">
                <div className="card">
                    <div className="image"></div>
                    <div className="card-body">
                        <h2 className="card-title">Supplements</h2>
                        <p className="font-semibold">Rs 1000</p>
                        <div className="card-action justify-end z-20">
                            <button className="btn btn-circle btn-ghost">
                                <i className="fa-solid fa-cart-plus"></i>
                            </button>
                            <button className="btn btn-circle btn-ghost absolute top-0 right-0">
                                <i className="fa-solid fa-heart" ></i>
                            </button>
                        </div>

                    </div>
                </div>  
            </div>
        </>
    )
}
export default TopProducts;