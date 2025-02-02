
const HomePage = () => {
  return (
    <div className="bg-white"> {/* Fundo branco */}
      {/* Cabeçalho */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Mundo das Olimpíadas</h1>
          <nav className="flex space-x-4">
            <a href="#" className="hover:text-blue-200">Home</a>
            <a href="#" className="hover:text-blue-200">Olimpíadas</a>
            <a href="#" className="hover:text-blue-200">Sobre</a>
          </nav>
        </div>
      </header>

      {/* Banner */}
      <div className="bg-green-50 py-16"> {/* Fundo verde claro */}
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Descubra as Olimpíadas Científicas</h2>
          <p className="text-lg text-gray-700">Encontre competições por área, data ou nível escolar.</p>
        </div>
      </div>

      {/* Filtros */}
      <div className="container mx-auto my-8 p-4 bg-gray-100 rounded-lg">
        <div className="flex space-x-4">
          <select className="p-2 border rounded text-blue-800">
            <option>Área de Estudo</option>
            <option>Matemática</option>
            <option>Física</option>
          </select>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            Buscar
          </button>
        </div>
      </div>

      {/* Cards de Olimpíadas */}
      <div className="container mx-auto my-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Olimpíada Brasileira de Matemática</h3>
            <p className="text-gray-700 mb-4">Competição nacional para estudantes.</p>
            <a href="#" className="text-green-600 hover:underline">Saiba mais</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;