import React from "react";
import UrlForm from "./components/UrlForm.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-violet-50 flex items-center justify-center px-4">
      <div className="w-full max-w-xl">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
          {/* Header */}
          <div className="mb-8 text-center">
            
            <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
              URL Shortener
            </h1>
            <p className="mt-2 text-slate-500 text-sm">
              Paste any long link and get a clean, shareable URL instantly.
            </p>
          </div>

          <UrlForm />
        </div>

        <p className="mt-5 text-center text-xs text-slate-400">
          Links are generated instantly · No account required
        </p>
      </div>
    </div>
  );
};

export default App;

