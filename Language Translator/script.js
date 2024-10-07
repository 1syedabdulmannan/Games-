function fetchTranslation() {
    const sourceLang = document.getElementById('sourceLanguageSelect').value;
    const targetLang = document.getElementById('targetLanguageSelect').value;
    const text = document.getElementById('sourceText').value.trim();


    if (!text) {
        alert('Please enter text to translate.');
        return; 
    }
   
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network error');
            }
            return response.json(); 
        })
        .then(data => {
            const translatedText = data.responseData?.translatedText || 'No translation available.';
            document.getElementById('translatedText').value = translatedText;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('translatedText').value = 'Error fetching translation.';
        });
}


document.getElementById('translateButton').addEventListener('click', fetchTranslation);
