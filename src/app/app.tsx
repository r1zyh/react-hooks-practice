import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoute } from "../const";
import { HooksPage } from "../hooksPage";
import { UseStateExamplePage } from "../useState";
import { UseEffectExamplePage } from "../useEffect";
import { UseRefExamplePage } from "../useRef";

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Hooks} element={<HooksPage />} />
        <Route path={AppRoute.UseState} element={<UseStateExamplePage />} />
        <Route path={AppRoute.UseEffect} element={<UseEffectExamplePage />} />
        <Route path={AppRoute.UseRef} element={<UseRefExamplePage />} />
      </Routes>
    </BrowserRouter>
  );
}
