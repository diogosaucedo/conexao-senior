import { NavBar } from "../components/NavBar";
import { Button } from "primereact/button";
import { Footer } from "../components/Footer"; // Adicionar import do Footer

export const Event = () => {
  return (
    <>
      <NavBar />
      <section className="bg-gradient-to-r from-indigo-50/90 to-purple-50/90 py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-slate-900">
            Caminhe para uma Vida Mais Saudável e Feliz!
          </h1>
          <img
            src="./public/training.png" // Assuming this is the relevant image based on Events.tsx
            alt="Pessoas caminhando no parque"
            className="w-full h-64 object-cover rounded-lg mb-8 shadow-md"
          />
          <div className="text-lg text-slate-700 leading-relaxed space-y-6">
            <p>
              Junte-se a nós para uma manhã revigorante no Parque das Águas! O
              Conexão Sênior convida você para uma experiência que vai além de
              uma simples caminhada. Desfrute de um passeio leve e orientado por
              profissionais de educação física, projetado para todos os níveis
              de condicionamento.
            </p>
            <p>
              Após a caminhada, participe de uma conversa inspiradora com uma
              nutricionista experiente, que compartilhará dicas práticas e
              valiosas sobre como nutrir seu corpo e mente na melhor fase da
              vida. Aprenda a fazer escolhas alimentares inteligentes, saborosas
              e que contribuam para o seu bem-estar geral.
            </p>
            <p>
              Este evento é uma oportunidade perfeita para cuidar da sua saúde,
              fazer novos amigos e aproveitar a beleza da natureza em Cuiabá.
            </p>
          </div>

          {/* Botão de Registro Duplicado */}
          <div className="mt-12 text-center bg-indigo-100 p-6 rounded-lg border border-indigo-200">
            <p className="text-lg font-semibold text-indigo-800">
              Vagas limitadas! Garanta sua participação registrando-se agora
              mesmo.
            </p>
            <p className="text-indigo-700 mt-2">
              Não perca esta oportunidade de cuidar de você e desfrutar de um
              dia agradável em companhia de amigos!
            </p>
            <Button
              label="Registrar Agora"
              icon="pi pi-check-circle"
              className="mt-4 p-button-lg"
            />
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">
              Benefícios do Evento:
            </h2>
            <ul className="space-y-4 text-slate-700 list-none pl-0">
              <li className="flex items-start">
                <span className="text-2xl mr-3 text-indigo-600">🚶‍♀️</span>
                <div>
                  <strong>
                    Movimente-se com segurança e acompanhamento profissional:
                  </strong>
                  Nossa equipe de educação física irá orientá-lo durante toda a
                  caminhada, garantindo que você se exercite de forma segura e
                  eficaz, respeitando seus limites e necessidades individuais.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3 text-indigo-600">🍎</span>
                <div>
                  <strong>
                    Descubra dicas práticas para uma alimentação equilibrada e
                    saborosa:
                  </strong>
                  A nutricionista compartilhará informações valiosas sobre como
                  montar um prato saudável, escolher os alimentos certos e
                  adaptar sua dieta às suas necessidades específicas.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3 text-indigo-600">🤝</span>
                <div>
                  <strong>
                    Conecte-se com outras pessoas que valorizam a saúde e o
                    bem-estar:
                  </strong>
                  Este evento é uma ótima oportunidade para conhecer pessoas com
                  interesses semelhantes, compartilhar experiências e construir
                  novas amizades.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3 text-indigo-600">🌳</span>
                <div>
                  <strong>
                    Aproveite a natureza e respire ar puro no Parque das Águas:
                  </strong>
                  Desfrute da beleza e tranquilidade do Parque das Águas, um
                  ambiente perfeito para relaxar, recarregar as energias e
                  conectar-se com a natureza.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3 text-indigo-600">✨</span>
                <div>
                  <strong>
                    Sinta-se mais energizado e motivado para cuidar de si mesmo:
                  </strong>
                  Ao participar deste evento, você estará investindo na sua
                  saúde e bem-estar, e se sentirá mais motivado a adotar hábitos
                  saudáveis em sua vida diária.
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-12 text-center bg-indigo-100 p-6 rounded-lg border border-indigo-200">
            <p className="text-lg font-semibold text-indigo-800">
              Vagas limitadas! Garanta sua participação registrando-se agora
              mesmo.
            </p>
            <p className="text-indigo-700 mt-2">
              Não perca esta oportunidade de cuidar de você e desfrutar de um
              dia agradável em companhia de amigos!
            </p>
            <Button
              label="Registrar Agora"
              icon="pi pi-check-circle"
              className="mt-4 p-button-lg"
            />
          </div>
        </div>
      </section>
      <Footer /> {/* Adicionar Footer */}
    </>
  );
};
