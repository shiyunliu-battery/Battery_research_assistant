document.addEventListener('DOMContentLoaded', () => {
    // 这里你可以添加从后端API获取新闻的逻辑
    const newsFeed = document.getElementById('news-feed');

    // 模拟数据 - 实际应从你的后端获取
    const mockNews = [
        {
            title: "Battery Research Update",
            description: "Latest findings in battery technology",
            link: "https://example.com"
        }
    ];

    mockNews.forEach(news => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h2>${news.title}</h2>
            <p>${news.description}</p>
            <a href="${news.link}" target="_blank">Read More</a>
        `;
        newsFeed.appendChild(article);
    });
});
