function getArticleGenerator(articles) {

    return function showNext() {
        if (articles.length) {
            const output = document.getElementById('content');
            output.appendChild(document.createElement('article')).textContent = articles.shift();
        }
    };
}