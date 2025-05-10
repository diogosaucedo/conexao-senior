import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useNavigate } from "react-router";

interface CommunityInterface {
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  members: number;
}

export const Community = (props: CommunityInterface) => {
  const navigate = useNavigate();

  const header = (
    <img
      alt={props.imageAlt}
      src={props.imageUrl}
      className="w-full h-48 sm:h-64 object-cover"
      aria-label={`Imagem da comunidade ${props.name}`}
    />
  );

  const footer = (
    <div
      className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200 min-h-[48px]"
      role="region"
      aria-label="Informações da comunidade"
    >
      <Button
        label="Acessar"
        icon="pi pi-sign-in"
        className="p-button-sm flex-shrink-0 min-w-[100px]"
        aria-label={`Acessar comunidade ${props.name}`}
        onClick={() => navigate(`/comunidade/postagens`)}
      />
      <span
        className="text-sm text-gray-600 ml-4 flex items-center"
        aria-label={`${props.members} membros`}
      >
        {props.members} membros
      </span>
    </div>
  );

  return (
    <Card
      title={props.name}
      subTitle="Comunidade"
      footer={footer}
      header={header}
      className="w-full sm:max-w-sm mx-auto shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      role="region"
      aria-label={`Cartão da comunidade ${props.name}`}
    >
      <p
        className="m-0 text-gray-700 text-sm sm:text-base"
        aria-label={`Descrição da comunidade ${props.name}`}
      >
        {props.description}
      </p>
    </Card>
  );
};
