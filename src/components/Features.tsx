import { Card } from "primereact/card";

export const Features = () => {
  return (
    <section className=" bg-gradient-to-r from-indigo-50/90 to-purple-50/90 pt-24 pb-28">
      <h2 className="text-3xl font-bold text-center mb-16 max-w-2xl mx-auto">
        Descubra como o Conexão Sênior pode enriquecer sua vida
      </h2>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-5xl grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-stretch">
          <Card
            title="Conecte-se e Faça Amizades"
            className="p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border rounded-xl"
          >
            <div className="leading-relaxed space-y-4 pt-4">
              <strong>
                Combata o isolamento e expanda seu círculo social:
              </strong>
              <br />
              • Encontre pessoas com interesses em comum na região de Cuiabá.
              <br />
              • Compartilhe fotos, histórias e experiências em grupos
              acolhedores.
              <br />• Participe de atividades presenciais e online para conhecer
              novas pessoas.
            </div>
          </Card>
          <Card
            title="Atividades para Todos os Gostos"
            className="p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border rounded-xl"
          >
            <div className="leading-relaxed space-y-4 pt-4">
              <strong>Descubra novas paixões e mantenha-se ativo:</strong>
              <br />
              • Participe de eventos culturais, oficinas e passeios na região.
              <br />
              • Aprenda novas habilidades com tutoriais e atividades online
              acessíveis.
              <br />• Cuide da sua saúde e bem-estar com palestras e workshops
              especializados.
            </div>
          </Card>
          <Card
            title="Acessibilidade e Suporte"
            className="p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border rounded-xl"
          >
            <div className="leading-relaxed space-y-4 pt-4">
              <strong>Uma plataforma pensada para você:</strong>
              <br />
              • Interface fácil de usar com fonte ampliada e alto contraste.
              <br />
              • Tutoriais interativos e suporte por áudio para facilitar a
              navegação.
              <br />• Nossa equipe está sempre pronta para te ajudar com
              qualquer dúvida.
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
