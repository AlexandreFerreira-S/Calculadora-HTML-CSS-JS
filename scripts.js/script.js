function calcular(n1,n2){
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)

    selector = document.getElementById("selector").value

    switch(selector){
        case "+":
            calculo = (n1 + n2)
            document.getElementById("resultado").innerHTML = `O Resultao da soma de ${n1} + ${n2} eh = ${calculo}`
            break

        case "-":
            calculo = (n1 - n2)
            document.getElementById("resultado").innerHTML = `O Resultao da subtracao de ${n1} - ${n2} eh = ${calculo}`
            break

            case "/":
                calculo = Math.round((n1 / n2))
                if(Number.isNaN(calculo)){
                    document.getElementById("resultado").innerHTML = 'insira um divisor valido'
                }
                document.getElementById("resultado").innerHTML = `O Resultao da divisao eh de ${n1} / ${n2} eh = ${calculo}`
                break
            
    }
    
}