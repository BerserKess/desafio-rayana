import { Button } from "./Button";

export function Desafio(){
    const name = "Kesley Rainery";
    const challengeEvent = ()=>{
        alert("Verfique o console do navegador!")
        console.log(`Olá, eu sou ${name}`)
    }

    return (
       <Button event={challengeEvent} style="bg-red-500 border-2 border-amber-400 p-3 rounded-lg cursor-pointer  text-slate-200"/>
    )


}