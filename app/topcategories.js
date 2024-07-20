const TopCategories = () => {
    return (
        <>
            <div className="topCategoriesDiv">
                <h1 className="topCategories">Top Categories</h1>
            </div>
            <div className="container">
                <div className="card">
                    <div className="image"></div>
                    <div className="card-body">
                        <h2 className="card-title">Supplements</h2>
                        <button className="view-btn">VIEW PRODUCTS</button>
                    </div>
                </div>
                <div className="card">
                    <div className="image"></div>
                    <div className="card-body">
                        <h2 className="card-title">Equipments</h2>
                        <button className="view-btn">VIEW PRODUCTS</button>
                    </div>
                </div> 
                <div className="card">
                    <div className="image"></div>
                    <div className="card-body">
                        <h2 className="card-title">Accessories</h2>
                        <button className="view-btn">VIEW PRODUCTS</button>
                    </div>
                </div>    
            </div>
            
        </>
    );
};

export default TopCategories;
