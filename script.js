let news = [];

function loadNews() {
    fetch("data/news.json")
        .then(response => response.json())
        .then(data => {
            news = data;
            renderNews();
        });
}

function renderNews() {
    const container = document.getElementById("news-container");
    container.innerHTML = "";

    news.forEach(item => {
        const div = document.createElement("div");
        div.className = "news-item";
        div.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p>`;
        container.appendChild(div);
    });
}

// Автоматическое добавление новости каждые 5 секунд
setInterval(() => {
    const newItem = {
        title: "Автоматическая новость " + (news.length + 1),
        text: "Эта новость была добавлена автоматически."
    };

    news.push(newItem);
    renderNews();
}, 5000);

// Загружаем новости при старте
loadNews();
