const fs = require("fs");

async function main() {
  const news = [
    {
      title: "Автоматическая новость",
      category: "System",
      date: new Date().toLocaleString("ru-RU"),
      text: "Это тестовая новость, созданная GitHub Actions.",
      image: "https://via.placeholder.com/800x450",
      source: "GitHub Actions"
    }
  ];

  fs.writeFileSync("data/news.json", JSON.stringify(news, null, 2), "utf-8");
  console.log("Готово! Файл news.json обновлён.");
}

main();
