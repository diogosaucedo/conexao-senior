export const Hero = () => {
  return (
    <div
      className="w-full flex justify-center bg-gradient-to-r from-indigo-100 to-purple-100 py-16"
      role="banner"
    >
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 items-center">
        <div
          className="flex flex-col gap-8"
          role="region"
          aria-label="Apresentação do Conexão Sênior"
        >
          <h2 className="text-6xl font-bold tracking-wide text-slate-900 max-w-md leading-tight">
            Conectando Gerações, Celebrando a Vida.
          </h2>
          <p className="text-xl text-slate-800 leading-relaxed max-w-lg">
            O Conexão Sênior é uma rede social criada com carinho para idosos de
            Cuiabá e região. Nosso objetivo é diminuir o isolamento, promover a
            inclusão digital e proporcionar momentos de alegria e conexão
            através de eventos, atividades e um ambiente online seguro e
            acolhedor.
          </p>
        </div>
        <div
          className="relative group"
          role="img"
          aria-label="Demonstração do uso do aplicativo"
        >
          <img
            src="hero.png"
            alt="Homem negro idoso com sueter preto, óculos escuros, sentado em uma cadeira laranja com um tablet nas mãos"
            className="w-full h-auto rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
            loading="eager"
          />
          <div
            className="absolute inset-0 rounded-xl border-2 border-white/20 mix-blend-overlay"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};
