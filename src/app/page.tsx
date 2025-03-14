export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen bg-green-200">
        <div className="flex flex-col items-center gap-4 bg-cyan-100 w-[600px] h-[210px]">
          <h1 className="text-secondary font-extrabold text-4xl">
            Mi Portfolio
          </h1>
          <h3 className="text-green-400 font-black">Juan Carlos Muñoz Pabon</h3>
          <section className="flex flex-col items-center">
            <p className="text-primary font-extralight">
              Desarrollador Frontend
            </p>
            <h2 className="text-accent font-light">Este es mi portafolio</h2>
          </section>
          <section className="flex flex-col items-center">
            <p className="text-primay font-black">
              Sere Ingenierio de Software
            </p>
            <footer className="text-sky-600 font-black">
              ©JuanCarlos 2025
            </footer>
          </section>
        </div>
      </div>
    </>
  );
}
