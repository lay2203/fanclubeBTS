
function showModal(nome, preco) {
    const modal = document.getElementById('modal');
    document.getElementById('modal-title').innerText = '💜 ' + nome;
    document.getElementById('modal-desc').innerText = 'Você escolheu o ' + nome + ' por ' + preco + '. Em breve nossa equipe entrará em contato para finalizar seu pedido! Borahae! 💜';
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

// Fechar ao clicar fora do modal
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}
