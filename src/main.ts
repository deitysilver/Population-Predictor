import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

window.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("predict").addEventListener("click", () => {
    console.log(document.getElementById("year").value);
  })
})

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="bg-blue-100 h-screen">
    <div class="flex flex-col justify-center pt-20 px-[35%]">
      <h1 class="text-xl font-semibold mx-[10%]">Year:</h1>
      <input type="number" id="year" class="text-xl px-3 py-1 mx-[10%]" minlength="4" maxlength="4" />
      <button id="predict" class="rounded-sm mx-[10%] text-white font-semibold px-3 py-1 text-xl bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-500 active:text-gray-200 mt-3">
        Predict
      </button>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
