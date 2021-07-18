const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>MyBlog</h1>
            <div className="links">
                
                <a href="/">Home</a>
                {/* styling insidenavbar */}
                <a href="/create" style={{
                    color:'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>
                New Blog
            </a>
            </div>
        </nav>
    );
}
 
export default Navbar ;