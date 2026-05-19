const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-between px-10 py-4 bg-white text-black">

            <div className="flex items-center gap-3">
                <img src="/logo.png" alt="logo" className="h-10 w-16" />

            </div>

            <nav className="flex gap-10 text-lg font-bold ">
                <a href="#" className="hover:text-blue-500">Главная</a>
                <a href="#" className="hover:text-blue-500">Новости</a>
                <a href="#" className="hover:text-blue-500">Культурная карта района</a>
                <a href="#" className="hover:text-blue-500">Фотогалерея</a>
                <a href="#" className="hover:text-blue-500">Культурный диалог</a>
            </nav>

            <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                Регистрация
            </button>
        </header>
    );
};

export default Header;