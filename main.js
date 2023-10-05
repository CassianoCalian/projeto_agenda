document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-atividade");
  const tabelaContatos = document.querySelector("tbody");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtenha os valores do nome e número do formulário
    const nome = document.getElementById("nome-atividade").value;
    const numero = document.getElementById("nota-atividade").value;

    // Crie um novo elemento <tr> para adicionar à tabela
    const newRow = document.createElement("tr");

    // Crie elementos <td> para as colunas
    const nomeCell = document.createElement("td");
    const numeroCell = document.createElement("td");

    // Defina o conteúdo dos elementos <td>
    nomeCell.textContent = nome;
    numeroCell.textContent = numero;

    // Adicione um emoji usando o código HTML
    const emoji = document.createElement("span");
    emoji.innerHTML = " &#128077;";
    numeroCell.appendChild(emoji);

    // Adicione as células à nova linha
    newRow.appendChild(nomeCell);
    newRow.appendChild(numeroCell);

    // Adicione a nova linha à tabela
    tabelaContatos.appendChild(newRow);

    // Limpe os campos de entrada do formulário
    document.getElementById("nome-atividade").value = "";
    document.getElementById("nota-atividade").value = "";
  });
});
