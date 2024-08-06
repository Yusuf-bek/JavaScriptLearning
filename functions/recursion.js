// Recursion

// function that does same thing as ** operator

function darajagaOshir(son, daraja){
    if(daraja == 0)
        return 1
   return son * darajagaOshir(son, daraja - 1)
}

console.log(darajagaOshir(3, 20))
// => 3486784401

