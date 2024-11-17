var listOfQuote=[
    {
        quote:"“Be yourself; everyone else is already taken.”",
        author:"― Oscar Wilde",
    },
    {
        quote:"“So many books, so little time.”",
        author:"― Frank Zappa",
    },
    {
        quote:"“A room without books is like a body without a soul.”",
        author:"― Marcus Tullius Cicero",
    },
    {
        quote:"“You only live once, but if you do it right, once is enough.”",
        author:"― Mae West",
    },
    {
        quote:"“Be the change that you wish to see in the world.”",
        author:"― Mahatma Gandhi"
    },
    {
        quote:"“In three words I can sum up everything I've learned about",
        author:"― Robert Frost",
    },
    {
        quote:"“To live is the rarest thing in the world. Most people exist, that",
        author:"― Oscar Wilde",
    },
    {
        quote:"“Always forgive your enemies; nothing annoys them so much.”",
        author:"― Oscar Wilde",
    },
    {
        quote:"“We accept the love we think we deserve.”",
        author:"― Stephen Chbosky, The Perks of Being a Wallflower",
    },
    {
        quote:"“To be yourself in a world that is constantly trying to make you",
        author:"― Ralph Waldo Emerson",
    }
];

function shaowQuote(){
   
    var prevousNnmber;
    var randonNumber=Math.trunc(Math.random()* listOfQuote.length);
    console.log(randonNumber);
    if(prevousNnmber==randonNumber)
    {
        var randonNumber=Math.trunc(Math.random()* listOfQuote.length);

    }
    prevousNnmber=randonNumber;
   
 
document.getElementById("h1").innerHTML= ` <td>${listOfQuote[randonNumber].quote}</td>`
document.getElementById("h2").innerHTML= `<td>${listOfQuote[randonNumber].author}</td>`

}
