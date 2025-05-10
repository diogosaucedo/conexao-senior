import { Card } from "primereact/card";

export const Features = () => {
  return (
    <section
      className="bg-gradient-to-r from-indigo-50/90 to-purple-50/90 pt-24 pb-28"
      role="region"
      aria-labelledby="features-title"
    >
      <h2
        id="features-title"
        className="text-5xl font-bold text-center mb-16 max-w-2xl mx-auto text-slate-900"
      >
        Descubra como o Conexão Sênior pode enriquecer sua vida
      </h2>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-5xl grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-stretch">
          <Card
            title="Conecte-se e Faça Amizades"
            className="p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-2 rounded-xl bg-white"
            role="article"
            aria-labelledby="card-title-1"
          >
            <div className="leading-relaxed space-y-6 pt-4 text-lg text-slate-800">
              <strong id="card-title-1" className="block text-xl mb-4">
                Combata o isolamento e expanda seu círculo social:
              </strong>
              <ul
                className="list-none space-y-4"
                aria-label="Benefícios de conexão"
              >
                <li>
                  • Encontre pessoas com interesses em comum na região de
                  Cuiabá.
                </li>
                <li>
                  • Compartilhe fotos, histórias e experiências em grupos
                  acolhedores.
                </li>
                <li>
                  • Participe de atividades presenciais e online para conhecer
                  novas pessoas.
                </li>
              </ul>
            </div>
          </Card>
          <Card
            title="Atividades para Todos os Gostos"
            className="p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-2 rounded-xl bg-white"
            role="article"
            aria-labelledby="card-title-2"
          >
            <div className="leading-relaxed space-y-6 pt-4 text-lg text-slate-800">
              <strong id="card-title-2" className="block text-xl mb-4">
                Descubra novas paixões e mantenha-se ativo:
              </strong>
              <ul
                className="list-none space-y-4"
                aria-label="Lista de atividades disponíveis"
              >
                <li>
                  • Participe de eventos culturais, oficinas e passeios na
                  região.
                </li>
                <li>
                  • Aprenda novas habilidades com tutoriais e atividades online
                  acessíveis.
                </li>
                <li>
                  • Cuide da sua saúde e bem-estar com palestras e workshops
                  especializados.
                </li>
              </ul>
            </div>
          </Card>
          <Card
            title="Acessibilidade e Suporte"
            className="p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-2 rounded-xl bg-white"
            role="article"
            aria-labelledby="card-title-3"
          >
            <div className="leading-relaxed space-y-6 pt-4 text-lg text-slate-800">
              <strong id="card-title-3" className="block text-xl mb-4">
                Uma plataforma pensada para você:
              </strong>
              <ul
                className="list-none space-y-4"
                aria-label="Recursos de acessibilidade e suporte"
              >
                <li>
                  • Interface fácil de usar com fonte ampliada e alto contraste.
                </li>
                <li>
                  • Tutoriais interativos e suporte por áudio para facilitar a
                  navegação.
                </li>
                <li>
                  • Nossa equipe está sempre pronta para te ajudar com qualquer
                  dúvida.
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
