import { SelectLanguage } from "features/SelectLanguage";
import { SelectLanguages } from "features/SelectLanguages";

function App() {
  return (
    <div className="app">
      <div>
        Мультиселект
        <SelectLanguages />
      </div>
      <div>
        Обычный селект без иконок
        <SelectLanguage />
      </div>
    </div>
  );
}

export default App;
