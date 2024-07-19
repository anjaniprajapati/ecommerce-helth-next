const Header = () => {
    return (
        <>
           <nav className="navbar  bg-transparent fixed text-wite top-0 letf-0 z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <button className= " nav-brand btn-circle  mx-2 ">
                            <i class="fa-solid fa-bars"></i>
                        </button>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow text-black bg-gray-50 rounded-box w-52">
                            <li>
                                <a href="/">Homepage</a>
                            </li>
                            <li>
                                <a href="/">Shop</a>
                            </li>
                            <li>
                                <a href="/order/view-orders">My Orders</a>
                            </li>
                            <li>
                                <a href="/Dashboard">Dashboard</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="flex-none">
                        <div className="flex items-center justify-center  min-h-full">
                            <button className="nav-brand  mx-2 loginlogout">Logout</button>
                            <button className="nav-brand btn-circle  mx-2 ">
                                <i className="fa-solid fa-cart-plus"></i>
                            </button>
                            <button className="nav-brand btn-circle  mx-2 ">
                                <i className="fa-solid fa-heart"></i>
                            </button>
                            <button className="nav-brand btn-circle  mx-2 ">
                                <i className="fa-sharp-duotone fa-solid fa-book-open"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="intro-div">
                <img src="intro.jpg" alt="img" className="intro-img"/>
            </div>
        </>
    );
};

export default Header;


