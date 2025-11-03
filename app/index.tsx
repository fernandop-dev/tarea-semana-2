import { registerRootComponent } from "expo";
import EjerciciosCompletos from "./screens/EjerciciosCompletos";

export default function App() {
  return <EjerciciosCompletos />;
}

registerRootComponent(App);
