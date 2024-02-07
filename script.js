
const quotes = [
    {
        text: "Šta je OSI model ?",
        author: "Konceptualni model koji definiše sedam slojeva za komunikaciju između računarskih sistema."
    },
    {
        text: "Hardver vs Softver ?",
        author: "Hardver su fizičke komponente, dok softver čine programi i podaci."
    },
    {
        text: "Šta je algoritam ?",
        author: "Precizno definisan skup koraka za rešavanje problema."
    },
    {
        text: "Šta je Ram memorija ?",
        author: "Koristi se za privremeno skladištenje podataka i instrukcija u računaru."
    },
    {
        text: "Šta je HTTP, a šta je HTTPS ?",
        author: "Protokoli za prenos hipertekstualnih dokumenata, pri čemu HTTPS obezbeđuje siguran prenos podataka korišćenjem kriptografije."
    },
    {
        text: "Šta je operativni sistem ?",
        author: "Softver koji upravlja hardverom i omogućava rad drugih programa na računaru."
    },
];


function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById("quote-text").textContent = randomQuote.text;
    document.getElementById("quote-author").textContent = `- ${randomQuote.author}`;
}


document.getElementById("new-quote-button").addEventListener("click", generateRandomQuote);


generateRandomQuote();


function copyText() {
    const quoteText = document.getElementById("quote-text").textContent;
    const textArea = document.createElement("textarea");
    textArea.value = quoteText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Text copied to clipboard!");
}


function shareOnTwitter() {
    const quoteText = document.getElementById("quote-text").textContent;
    const quoteAuthor = document.getElementById("quote-author").textContent;
    const twitterURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText + "\n- " + quoteAuthor)}`;
    window.open(twitterURL, "_blank");
}



document.getElementById("copy-text-button").addEventListener("click", copyText);
document.getElementById("share-button").addEventListener("click", shareOnTwitter);