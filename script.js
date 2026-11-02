function envoyerQuestion() {
    const question = document.getElementById("question").value;

    if (question.trim() === "") {
        alert("Veuillez écrire une question.");
        return;
    }

    alert("Votre question a été envoyée : " + question);

    document.getElementById("question").value = "";
}
