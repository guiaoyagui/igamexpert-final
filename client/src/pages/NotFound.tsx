import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B3D2C] p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#00D9A3] mb-4">404</h1>
        <p className="text-xl text-white/70 mb-8 font-poppins">
          Ops! Esta página não foi encontrada.
        </p>
        <Link href="/">
          <a className="inline-block px-8 py-3 bg-[#00D9A3] text-[#0B3D2C] font-bold rounded-xl hover:bg-white transition-all shadow-lg">
            Voltar para a Home
          </a>
        </Link>
      </div>
    </div>
  );
}