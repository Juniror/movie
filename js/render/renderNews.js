
import { randomSlice } from "../util/random.js"

export function renderNews(){
      const ally = document.getElementById("ally")
      const acc = document.getElementById("accc")
      const mv = document.getElementById("movieee")
      const csr = document.getElementById("csrr")
    
    
      const usedIndices = []
      if (ally) {
        randomSlice(ally, usedIndices)
      }
    
      if (acc) {
        randomSlice(acc, usedIndices)
      }
    
      if (mv) {
        randomSlice(mv, usedIndices)
      }
    
      if (csr) {
        randomSlice(csr, usedIndices)
      }
}