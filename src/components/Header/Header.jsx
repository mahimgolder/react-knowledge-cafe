import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-4 border-b border-custom-rgba max-w-7xl mx-auto '>
            <h1 className='text-4xl font-bold'>Knowlende Cafe</h1>
            <img src={profile} alt="" />
        </header>

        
    );
};

export default Header;