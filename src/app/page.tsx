export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center w-screen h-screen bg-green-200">
        <div className="flex flex-col items-center gap-4 bg-cyan-100 w-[600px] h-[230px]">
          <h1 className="text-secondary font-extrabold text-4xl">
            Mi Portfolio
          </h1>
          <h3 className="text-green-400 font-black">Juan Carlos Muñoz Pabon</h3>
          <section className="flex flex-col items-center">
            <p className="text-red-200">Bienvenido a mi portafolio con next</p>
            <h2 className="text-accent font-light">Presentacion Personal</h2>
          </section>
          <section className="flex flex-col items-center">
            <p className="text-primay font-black">
              Sere Ingenierio de Software
            </p>
            <p className="text-primary font-extralight">
              Desarrollador Frontend y Desarrollador Backend
            </p>
            <footer className="text-sky-600 font-black">
              ©JuanCarlos 14-03-2025
            </footer>
          </section>
        </div>
      </div>
    </main>
  );
}
