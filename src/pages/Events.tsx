import { Card } from "primereact/card";
import { Button } from "primereact/button"; // Adicionar import do Button
import { NavBar } from "../components/NavBar";
import { useNavigate } from "react-router"; // Adicionar import
import { Footer } from "../components/Footer"; // Adicionar import do Footer

export const Events = () => {
  const navigate = useNavigate(); // Adicionar hook

  const events = [
    {
      title: "Recordando os Bons Tempos",
      description:
        "Uma tarde agradável com chá, bolos caseiros e música regional ao vivo para relembrar momentos especiais e criar novas memórias.",
      icon: "pi pi-calendar-plus",
      location: "Shopping Estação",
      date: "25 de Agosto de 2025", // Adicionar data
      time: "15:00", // Adicionar hora
      imageUrl: "talking.png", // Adicionar URL da imagem
    },
    {
      title: "Primeiros Passos no Mundo Digital",
      description:
        "Aprenda a usar seu smartphone para se conectar com a família, acessar redes sociais e descobrir aplicativos úteis no dia a dia.",
      icon: "pi pi-mobile",
      location: "Biblioteca Municipal",
      date: "05 de Setembro de 2025", // Adicionar data
      time: "09:30", // Adicionar hora
      imageUrl: "learning.png", // Adicionar URL da imagem
    },
    {
      title: "Saúde Ativa",
      description:
        "Participe de uma caminhada leve e revigorante no parque, seguida por uma conversa informativa com uma nutricionista sobre alimentação saudável.",
      icon: "pi pi-heart-fill",
      location: "Parque das Águas",
      date: "18 de Setembro de 2025", // Adicionar data
      time: "08:00", // Adicionar hora
      imageUrl: "training.png", // Adicionar URL da imagem
    },
    {
      title: "Oficina de Artesanato Criativo",
      description:
        "Solte sua imaginação em nossa oficina de artesanato! Crie peças únicas, aprenda novas técnicas e compartilhe momentos de descontração.",
      icon: "pi pi-palette",
      location: "Centro Cultural",
      date: "30 de Setembro de 2025",
      time: "14:00",
      imageUrl: "creating.png", // Adicionar URL da imagem
    },
  ];

  return (
    <>
      <NavBar />
      <section
        className="bg-gradient-to-r from-indigo-50/90 to-purple-50/90 pt-16 pb-20"
        role="main"
        aria-labelledby="eventos-titulo"
      >
        <h1
          id="eventos-titulo"
          className="text-5xl font-bold text-center mb-12 text-slate-900"
        >
          Próximos Eventos
        </h1>
        <div className="w-full flex justify-center px-4">
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {events.map((event, index) => (
              <Card
                key={index}
                header={
                  <img
                    alt={event.title}
                    src={event.imageUrl}
                    className="w-full h-48 object-cover rounded-t-xl shadow-md"
                  />
                }
                title={
                  <div className="flex items-center gap-3">
                    <i className={`${event.icon} text-2xl text-indigo-600`}></i>
                    <span className="text-xl font-semibold text-slate-800">
                      {event.title}
                    </span>
                  </div>
                }
                className="w-full p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border rounded-xl bg-white"
              >
                <p className="text-slate-800 text-lg leading-relaxed mt-3 mb-4">
                  {" "}
                  {/* Ajustar margem inferior */}
                  {event.description}
                </p>
                <div className="text-base text-slate-600 mt-4 space-y-2">
                  {" "}
                  {/* Agrupar informações */}
                  <p className="font-medium">
                    <i className="pi pi-calendar mr-1"></i> Data: {event.date}
                  </p>
                  <p className="font-medium">
                    <i className="pi pi-clock mr-1"></i> Hora: {event.time}
                  </p>
                  <p className="font-medium">
                    <i className="pi pi-map-marker mr-1"></i> Local:{" "}
                    {event.location}
                  </p>
                </div>
                <div className="mt-6 flex justify-end">
                  {" "}
                  {/* Adicionar botão */}
                  <Button
                    label="Saiba Mais"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                    onClick={() => navigate("/evento")}
                    className="p-button-lg font-semibold"
                    aria-label={`Ver mais detalhes sobre o evento ${event.title}`}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer /> {/* Adicionar Footer */}
    </>
  );
};
