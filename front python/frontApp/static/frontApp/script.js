 //Conexión Api WIki
 
 //variables a usar
 const submitButton = document.querySelector('#boton');
 const input = document.querySelector('#entrada');
 const errorSpan = document.querySelector('#error');
 const resultsContainer = document.querySelector('#results');
 //url api 
 const endpoint = 'https://en.wikipedia.org/w/api.php?';

 //json del api
 const params = {
     origin: '*',
     format: 'json',
     action: 'query',
     prop: 'extracts',
     exchars: 250,
     exintro: true,
     explaintext: true,
     generator: 'search',
     gsrlimit: 20,
 };
 
 const disableUi = () => {
     input.disabled = true;
     submitButton.disabled = true;
 };
 
 const enableUi = () => {
     input.disabled = false;
     submitButton.disabled = false;
 };
 //limipar el input
 const clearPreviousResults = () => {
     resultsContainer.innerHTML = '';
     errorSpan.innerHTML = '';
 };
 
 const isInputEmpty = input => {
     if (!input || input === '') return true;
     return false;
 };
 
 //resultados
 const showResults = results => {
     results.forEach(result => {
         resultsContainer.innerHTML += `
         <div class="results__item">
             <a href="https://en.wikipedia.org/?curid=${result.pageId}" target="_blank" class="card animated bounceInUp">
                 <h2 class="results__item__title">${result.title}</h2>
                 <p class="results__item__intro">${result.intro}</p>
             </a>
         </div>
     `;
     });
 };
 
 const gatherData = pages => {
     const results = Object.values(pages).map(page => ({
         pageId: page.pageid,
         title: page.title,
         intro: page.extract,
     }));
 
     showResults(results);
 };
 
 
 
 const handleKeyEvent = e => {
     if (e.key === 'Enter') {
         getData();
        }
    };

 const getData = async () => {
    const userInput = input.value;
    if (isInputEmpty(userInput)) return;

    params.gsrsearch = userInput;
    clearPreviousResults();
    disableUi();

    try {
        const { data } = await axios.get(endpoint, { params });

        if (data.error) throw new Error(data.error.info);
        gatherData(data.query.pages);
    } catch (error) {
        showError(error);
    } finally {
        enableUi();
    }
};
 //registro eventos
 const registerEventHandlers = () => {
     input.addEventListener('keydown', handleKeyEvent);
     submitButton.addEventListener('click', getData);
 };

 //uso de la función
 registerEventHandlers();

 





