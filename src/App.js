import Header from "./Page/Header";
import Footer from "./Page/Footer";
import MenuKontak from "./Page/MenuKontak";
import MenuMakanan from "./Page/MenuMakanan";
import MenuTentangKami from "./Page/MenuTentangKami";

function App() {
  return (
    <div>
      <Header />
      <MenuMakanan />
      <MenuTentangKami />
      <MenuKontak />
      <Footer />
    </div>
  );
}

export default App;
