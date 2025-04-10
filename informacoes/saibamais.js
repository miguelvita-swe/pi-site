document.addEventListener("DOMContentLoaded", function () {
    const exampleBox = document.getElementById("exampleBox");
    const exampleTitle = document.getElementById("exampleTitle");
    const exampleContent = document.getElementById("exampleContent");
    const closeBtn = document.getElementById("closeBtn");

    const examples = {
        html: {
            title: "Exemplos de HTML",
            content: `
                <p><strong>Exemplo 1:</strong> Criando um parágrafo:</p>
                <pre><code>&lt;p&gt;Olá, mundo!&lt;/p&gt;</code></pre>
                
                <p><strong>Exemplo 2:</strong> Criando um link:</p>
                <pre><code>&lt;a href="https://google.com"&gt;Clique aqui&lt;/a&gt;</code></pre>
            `
        },
        css: {
            title: "Exemplos de CSS",
            content: `
                <p><strong>Exemplo 1:</strong> Alterando a cor do texto:</p>
                <pre><code>p { color: blue; }</code></pre>
                
                <p><strong>Exemplo 2:</strong> Criando um botão estilizado:</p>
                <pre><code>button { background: red; color: white; padding: 10px; }</code></pre>
            `
        },
        js: {
            title: "Exemplos de JavaScript",
            content: `
                <p><strong>Exemplo 1:</strong> Exibir alerta:</p>
                <pre><code>alert("Olá, mundo!");</code></pre>
                
                <p><strong>Exemplo 2:</strong> Alterando texto via JS:</p>
                <pre><code>document.getElementById("meuTexto").innerText = "Novo Texto";</code></pre>
            `
        },
        docker: {
            title: "Exemplos de Docker",
            content: `
                <p><strong>Exemplo 1:</strong> Criar e rodar um container:</p>
                <pre><code>docker run -d -p 80:80 nginx</code></pre>
                
                <p><strong>Exemplo 2:</strong> Listar containers ativos:</p>
                <pre><code>docker ps</code></pre>
            `
        },
        ftp: {
            title: "Exemplos de FTP",
            content: `
                <p><strong>Exemplo 1:</strong> Conectar a um servidor FTP via terminal:</p>
                <pre><code>ftp meu-servidor.com</code></pre>
                
                <p><strong>Exemplo 2:</strong> Enviar arquivo para o servidor:</p>
                <pre><code>put arquivo.txt</code></pre>
            `
        }
    };

    document.querySelectorAll(".sm-btn").forEach(button => {
        button.addEventListener("click", function () {
            const lang = this.getAttribute("data-lang");
            exampleTitle.innerHTML = examples[lang].title;
            exampleContent.innerHTML = examples[lang].content;
            exampleBox.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", function () {
        exampleBox.style.display = "none";
    });

    document.addEventListener("click", function (event) {
        if (exampleBox.style.display === "flex" && !exampleBox.contains(event.target) && !event.target.closest(".sm-btn")) {
            exampleBox.style.display = "none";
        }
    });
});
