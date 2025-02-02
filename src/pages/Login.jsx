export function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded shadow">
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <form>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="password"
            placeholder="Senha"
            className="w-full p-2 mb-4 border rounded"
          />
          <button className="w-full bg-blue-500 text-white p-2 rounded">Entrar</button>
        </form>
      </div>
    </div>
  );
}
