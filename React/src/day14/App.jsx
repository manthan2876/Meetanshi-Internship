import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

export default function App() {
  return (
    <div className="min-h-screen flex bg-gray-100 gap-4 p-4">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-white rounded-xl shadow overflow-hidden">
        <Header name="Rashford" active/>
        <Content />
      </div>
    </div>
  );
}