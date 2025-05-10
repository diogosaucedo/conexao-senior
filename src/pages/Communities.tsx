import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Community } from "./Community";
import { communities } from "../mocks/communities";

export const Communities = () => {
  return (
    <>
      <NavBar />
      <div className="container max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 h-screen">
        <h1 className="text-4xl font-bold text-center mb-12 text-slate-900">
          Nossas Comunidades
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {communities.map((community) => (
            <Community key={community.name} {...community} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
