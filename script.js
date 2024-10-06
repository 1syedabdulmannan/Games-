function fetchTranslation() {
    const sourceLang = document.getElementById('sourceLanguageSelect').value;
    const targetLang = document.getElementById('targetLanguageSelect').value;
    const text = document.getElementById('sourceText').value.trim();

    // Check if input text is empty
    if (!text) {
        alert('Please enter text to translate.');
        return;
    }

    const url = `https:api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('translatedText').value = data.responseData.translatedText || 'No translation available.';
        })
        .catch(error => {
            console.error('Error fetching translation:', error);
            document.getElementById('translatedText').value = 'Error fetching translation.';
        });
}

// Event listener for the translate button
document.getElementById('translateButton').addEventListener('click', fetchTranslation);
