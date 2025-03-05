import { BrowserRouter} from "react-router-dom";
import { AppRoutes } from "./routes";

export const App = () => {
  return (
    <BrowserRouter basename="/arquetipo_portfolio">
      <AppRoutes />
    </BrowserRouter>
  );
};
