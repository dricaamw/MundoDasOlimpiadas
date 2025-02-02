
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-6 px-9">
        {/* Logo e Nome do site */}
        <div className="flex items-center">
          <img src={logo} alt="Logo Mundo das Olimpíadas" className="h-12 mr-4" />
          <h1 className="text-2xl font-bold text-blue-900">Mundo das Olimpíadas</h1>
        </div>

        {/* Menu e ícones */}
        <nav className="flex items-center space-x-8">
          <a href="#" className="text-blue-900 hover:text-orange-500 focus:font-bold focus:text-orange-500">Início</a>
          <a href="#" className="text-blue-900 hover:text-orange-500 focus:font-bold focus:text-orange-500">Olimpíadas</a>
          <a href="#" className="text-blue-900 hover:text-orange-500 focus:font-bold focus:text-orange-500">Notícias</a>
          <a href="#" className="text-blue-900 hover:text-orange-500 focus:font-bold focus:text-orange-500">Contatos</a>
          <a href="#" className="text-blue-900 hover:text-orange-500 focus:font-bold focus:text-orange-500">Sobre</a>
          
          {/* Ícones */}
          <div className="flex space-x-4">
            <button className="text-gray-700 hover:text-blue-600">
              🔍
            </button>
            <button className="text-gray-700 hover:text-blue-600">
              ⭐
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;