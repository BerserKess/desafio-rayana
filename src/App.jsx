import { Desafio } from "./assets/components/Desafio"

export function App() {

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900">
      <div className="flex flex-col items-center gap-6 border p-4">
        <div>
          <h1 className="text-3xl text-slate-100">Desafio.jsx</h1>
        </div>
        <Desafio/>
      </div>
    </div>
  )
}

