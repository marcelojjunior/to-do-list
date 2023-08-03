import logo from '../assets/images/to-do-list-logo.png'

export function Header() {
    return (
        <header
            className="bg-black flex justify-center items-center py-20"
        >
            <img 
                className="w-12"
                src={logo}
                alt="Logo To-Do List" 
            />
            <h1
                className='text-white font-bold text-3xl ml-4'
            >
                To-Do List
            </h1>
        </header>
    )
}