

const Header = () => {
    return (
        <div>
            <div className=" navbar flex lg:flex-row flex-col">
                <div className="lg:navbar-start ">
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
        <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>      
        <li><a>Recipes</a></li>
        <li><a>About</a></li>         
        <li><a>Search</a></li>
        </ul>
    </div>
    <a className="btn btn-ghost text-4xl">Healthy Foods</a>
    </div>
    <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li><a>Home</a></li>      
        <li><a>Recipes</a></li>
        <li><a>About</a></li>         
        <li><a>Search</a></li>
    </ul>
    </div>
    <div className="navbar-end gap-6 ">
    <div className="form-control ">
        <div className="relative mt-6 lg:mt-0 ">
        <input type="text" placeholder="Search" className="input input-bordered w-32 lg:w-42 md:w-auto pl-10"/>
        <span className="absolute left-2 top-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 20.9998L15.803 15.8028M15.803 15.8028C17.2096 14.3962 17.9998 12.4885 17.9998 10.4993C17.9998 8.51011 17.2096 6.60238 15.803 5.19581C14.3964 3.78923 12.4887 2.99902 10.4995 2.99902C8.51029 2.99902 6.60256 3.78923 5.19599 5.19581C3.78941 6.60238 2.99921 8.51011 2.99921 10.4993C2.99921 12.4885 3.78941 14.3962 5.19599 15.8028C6.60256 17.2094 8.51029 17.9996 10.4995 17.9996C12.4887 17.9996 14.3964 17.2094 15.803 15.8028Z" stroke="#150B2B" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg></span>
        </div>
        </div>
        <svg className="mt-6 lg:mt-0" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="#0BE58A"/>
<path d="M31.9761 32.9668C31.0444 31.7333 29.8391 30.7329 28.455 30.0446C27.0709 29.3562 25.5459 28.9987 24.0001 29.0001C22.4543 28.9987 20.9292 29.3562 19.5451 30.0446C18.1611 30.7329 16.9557 31.7333 16.0241 32.9668M31.9761 32.9668C33.7941 31.3497 35.0762 29.2182 35.655 26.8549C36.2337 24.4916 36.0804 22.0082 35.2153 19.7341C34.3503 17.4599 32.8144 15.5025 30.8113 14.1213C28.8081 12.7401 26.4325 12.0005 23.9994 12.0005C21.5663 12.0005 19.1906 12.7401 17.1875 14.1213C15.1844 15.5025 13.6485 17.4599 12.7834 19.7341C11.9184 22.0082 11.7651 24.4916 12.3438 26.8549C12.9226 29.2182 14.2061 31.3497 16.0241 32.9668M31.9761 32.9668C29.7814 34.9243 26.9409 36.0043 24.0001 36.0001C21.0588 36.0046 18.219 34.9246 16.0241 32.9668M28.0001 21.0001C28.0001 22.061 27.5786 23.0784 26.8285 23.8285C26.0783 24.5787 25.0609 25.0001 24.0001 25.0001C22.9392 25.0001 21.9218 24.5787 21.1716 23.8285C20.4215 23.0784 20.0001 22.061 20.0001 21.0001C20.0001 19.9392 20.4215 18.9218 21.1716 18.1717C21.9218 17.4215 22.9392 17.0001 24.0001 17.0001C25.0609 17.0001 26.0783 17.4215 26.8285 18.1717C27.5786 18.9218 28.0001 19.9392 28.0001 21.0001Z" stroke="#150B2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    
    </div>
</div>
                    {/* this is banner */}
<div className="hero min-h-screen bg-[url(https://i.ibb.co/qpn8yh0/Rectangle-1.png)] mt-8 " >

  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5">Savor the essence of Ramadan with our delicious iftar platters! Let our culinary creations add joy and warmth to your iftar gatherings</p>
      <button className="btn border-none px-6 bg-green-400 rounded-3xl">Explore Now</button>
      <button className="btn btn-outline ml-6 px-5 text-white rounded-3xl">Our Feedback</button>
    </div>
  </div>
</div> 

        </div>
    );
};

export default Header;