import {Link} from 'react-router-dom'
function Navbar() {
    return (
    <nav className="bg-orange-500 text-white px-6 py-4">
        <div className='max-w-6xl mx-auto flex justify-between items-center'>
            <Link to="/" className='text-2xl font-bold'>
            Recipe Hub
            </Link>
            <div className='flex gap-6'>
            <Link to="/" className='hover:text-orange-200'>
            Home
            </Link>
            <Link to="/about" className='hover:text-orange-200'>
            About
            </Link>
            </div>
        </div>
    </nav>
    ); 
};
export default Navbar;