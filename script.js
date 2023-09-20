function exibirMensagemDeBoasVindas() {
  alert("Bem-vindo ao meu blog pessoal!");
}

function rolarParaAprendizados(event) {
  event.preventDefault();
  const aprendizadosElement = document.getElementById('aprendizados');
  aprendizadosElement.scrollIntoView({ behavior: 'smooth' });
};

function toggleContent(contentId) {
  const content = document.getElementById(contentId);
  const button = event.target;
  
  if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
      button.textContent = 'Ocultar';
  } else {
      content.style.display = 'none';
      button.textContent = 'Mostrar';
  }
};

function adicionarComentario() {
  const comentarioInput = document.getElementById('comment-input');
  const comentarioTexto = comentarioInput.value.trim();

  if (comentarioTexto !== '') {
      const listaComentarios = document.getElementById('lista-comentarios');
      const novoComentario = document.createElement('li');
      novoComentario.textContent = comentarioTexto;
      listaComentarios.appendChild(novoComentario);

      comentarioInput.value = '';
  }
}

window.onload = exibirMensagemDeBoasVindas;