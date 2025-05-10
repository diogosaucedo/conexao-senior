import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import { PrimeReactProvider } from "primereact/api";
import { twMerge } from "tailwind-merge";
import "./index.css";
import App from "./App.tsx";
import { Events } from "./pages/Events.tsx";
import { Event } from "./pages/Event.tsx";
import { Communities } from "./pages/Communities.tsx";

import { CulinariaCuiabanaPostsPage } from "./pages/CulinariaCuiabanaPostsPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider
      value={{
        ptOptions: {
          mergeSections: true,
          mergeProps: true,
          classNameMergeFunction: twMerge,
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="eventos" element={<Events />} />
          <Route path="evento" element={<Event />} />
          <Route path="comunidades" element={<Communities />} />
          <Route
            path="/comunidade/postagens"
            element={<CulinariaCuiabanaPostsPage />}
          />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  </StrictMode>
);
