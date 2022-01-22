import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col transition-colors duration-150">
      <Header />
      <div className="flex flex-1 pt-20">
        <aside className="shadow w-72 xl:w-76 hidden lg:block overflow-y-auto bg-white px-4 fixed start-0 bottom-0 h-full pt-22"></aside>
        <main className="w-full lg:pl-[18rem] xl:pl-[18rem] bg-blue-400">
          <div className="p-5 md:p-8 overflow-y-auto h-full bg-teal-700"></div>
        </main>
      </div>
    </div>
  );
}

export default App;

// lg:ps-72 xl:ps-76
