let objDevInHouse= {
plataforma: "DevInHouse",
cursos: {dados: ["SQL"],
backend: ["Java", "Spring"],
frontend: ["Javascript", "React"]},
inovacao_constante: true,
};

let objUser= {
    nome: "Elisa",
    idade: 27,
    cidade: "São José"
}

objDevInHouse["usuário"] = objUser;

objUser["nome"] = "Elisa Cristina Santos de Souza";

objUser["idade"] = "27";

console.table(objDevInHouse);