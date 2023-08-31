import { Navbar } from "./assets/components/navbar/Navbar";
import { Footer } from "./assets/components/footer/Footer";
import { PasswordDisplay } from "./assets/components/PasswordDisplay/PasswordDisplay";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <PasswordDisplay />
      </main>
      <Footer />
    </>
  );
}

export default App;
