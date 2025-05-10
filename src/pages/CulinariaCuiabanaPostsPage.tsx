import { CulinariaCuiabanaFeed } from "../components/CulinariaCuiabanaFeed";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { CommunityMembersSidebar } from "../components/CommunityMembersSidebar";

export const CulinariaCuiabanaPostsPage = () => {
  return (
    <>
      <NavBar />
      <div className="flex pt-16">
        <CommunityMembersSidebar />
        <main className="flex-grow p-4" aria-labelledby="page-title">
          <h1
            id="page-title"
            className="text-4xl font-bold text-center my-8 text-slate-900"
          >
            Feed da Comunidade Culinária Cuiabana
          </h1>
          <CulinariaCuiabanaFeed />
        </main>
      </div>
      <Footer />
    </>
  );
};
