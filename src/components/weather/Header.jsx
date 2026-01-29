import React from 'react';
import { ArrowRight, Locate, Terminal } from 'lucide-react';

const Header = ({ 
  searchInput, 
  setSearchInput, 
  handleSubmit, 
  handleLocate, 
  unit, 
  setUnit, 
  showRaw, 
  setShowRaw 
}) => {
  return (
    <header className="flex flex-col md:flex-row justify-between border-b-2 border-stone-900">
      <div className="flex-1 flex flex-col md:flex-row">
        <div className="flex-1 border-b-2 md:border-b-0 md:border-r-2 border-stone-900 p-0 relative">
           <form onSubmit={handleSubmit} className="flex h-full">
             <input 
               type="text" 
               value={searchInput}
               onChange={(e) => setSearchInput(e.target.value.toUpperCase())}
               placeholder="CITY OR ZIP (US)..."
               className="w-full h-full p-4 outline-none uppercase placeholder-gray-500 bg-transparent text-xl font-bold"
             />
             <button type="submit" className="bg-yellow-400 border-l-2 border-stone-900 px-6 hover:bg-yellow-500 transition-colors flex items-center justify-center" aria-label="Search">
               <ArrowRight size={24} />
             </button>
           </form>
        </div>
        <div className="flex">
           <button onClick={handleLocate} className="p-4 border-r-2 border-stone-900 hover:bg-stone-200 transition-colors" title="Locate Me" aria-label="Locate Me">
             <Locate size={24} />
           </button>
           <button onClick={() => setUnit(unit === 'imperial' ? 'metric' : 'imperial')} className="p-4 border-r-2 border-stone-900 hover:bg-stone-200 w-24 font-bold" title="Toggle Units" aria-label="Toggle Units">
             {unit === 'imperial' ? '°F' : '°C'}
           </button>
           <button onClick={() => setShowRaw(!showRaw)} className={`p-4 hover:bg-stone-200 ${showRaw ? 'bg-stone-900 text-white hover:bg-stone-800' : ''}`} title="Raw Data View" aria-label="Toggle Raw Data">
             <Terminal size={24} />
           </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
