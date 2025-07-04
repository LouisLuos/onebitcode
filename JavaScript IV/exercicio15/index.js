import dayjs from "dayjs"
function aniversario (data) {
    const aniversario = dayjs(data)
    const hoje = dayjs()
    const ageHoje = hoje.diff(aniversario, "year")
    const proximoNiver = aniversario.add(ageHoje + 1, "year")

    console.log(`proximo aniversario ${proximoNiver.format("DD/MM/YYYY")}`)
    console.log(`idade: ${ageHoje}`)
}

aniversario("2005-07-25")