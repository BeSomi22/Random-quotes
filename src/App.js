import "./App.css";
import { useState, useEffect } from "react";

const quotes = [
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: " - Franklin D. Roosevelt",
  },
  {
    text: "It is never too late to be what you might have been.",
    author: " - George Eliot",
  },
  {
    text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    author: "- Roy T. Bennett",
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: " - Henry David Thoreau",
  },
  {
    text: "The only way to achieve the impossible is to believe it is possible.",
    author: "- Charles Kingsleigh",
  },
  {
    text: "It's not about how hard you hit. It's about how hard you can get hit and keep moving forward.",
    author: " - Rocky Balboa",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: " - Bo Bennett",
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "- Wayne Gretzky",
  },
  {
    text: "Success is liking yourself, liking what you do, and liking how you do it.",
    author: "- Maya Angelou",
  },
  {
    text: "Your attitude, not your aptitude, will determine your altitude.",
    author: "- Zig Ziglar",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: " - Peter Drucker",
  },
  {
    text: "The only person you are destined to become is the person you decide to be.",
    author: " - Ralph Waldo Emerson",
  },
  {
    text: "The journey of a thousand miles begins with one step.",
    author: " - Lao Tzu",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "- Steve Jobs",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "- Winston Churchill",
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: " - Steve Jobs",
  },
  {
    text: "Believe you can and you're halfway there .",
    author: "- Theodore Roosevelt",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "- Eleanor Roosevelt",
  },
  {
    text: "It always seems impossible until it's done.",
    author: " - Nelson Mandela",
  },
  {
    text: "In the middle of difficulty lies opportunity. ",
    author: "- Albert Einstein",
  },
  {
    text: "The only person you are destined to become is the person you decide to be.",
    author: " - Ralph Waldo Emerson",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: " - Sam Levenson",
  },
  {
    text: "Success is stumbling from failure to failure with no loss of enthusiasm. ",
    author: "- Winston Churchill",
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: " - Franklin D. Roosevelt",
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: " - Wayne Gretzky",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: " - Peter Drucker",
  },
  {
    text: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. ",
    author: "- Jordan Belfort",
  },
  {
    text: "Twenty years from now, you will be more disappointed by the things that you didn't do than by the ones you did do.",
    author: " - Mark Twain",
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "- Ralph Waldo Emerson",
  },
  {
    text: "You have within you right now, everything you need to deal with whatever the world can throw at you. ",
    author: "- Brian Tracy",
  },
  {
    text: "Do not wait to strike till the iron is hot, but make it hot by striking. ",
    author: "- William Butler Yeats",
  },
  {
    text: "Our greatest glory is not in never falling, but in rising every time we fall.",
    author: " - Confucius",
  },
  {
    text: "The only place where success comes before work is in the dictionary.",
    author: " - Vidal Sassoon",
  },
  {
    text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
    author: " - Steve Jobs",
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: " - Nelson Mandela",
  },
  {
    text: "I attribute my success to this: I never gave or took any excuse.",
    author: " - Florence Nightingale",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: " - Eleanor Roosevelt",
  },
  {
    text: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    author: " - Brian Tracy",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: " - Winston Churchill",
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: " - Franklin D. Roosevelt",
  },
  {
    text: "It is never too late to be what you might have been.",
    author: " - George Eliot",
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us. ",
    author: "- Ralph Waldo Emerson",
  },
  {
    text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. ",
    author: "- Roy T. Bennett",
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: " - Henry David Thoreau",
  },
  {
    text: "The only way to achieve the impossible is to believe it is possible. ",
    author: "- Charles Kingsleigh",
  },
  {
    text: "It's not about how hard you hit. It's about how hard you can get hit and keep moving forward.",
    author: " - Rocky Balboa",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: " - Bo Bennett",
  },
  {
    text: "You miss 100% of the shots you don't take. ",
    author: "- Wayne Gretzky",
  },
  {
    text: "Success is liking yourself, liking what you do, and liking how you do it. ",
    author: "- Maya Angelou",
  },
  {
    text: "Your attitude, not your aptitude, will determine your altitude. ",
    author: "- Zig Ziglar",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: " - Peter Drucker",
  },
  {
    text: "The only person you are destined to become is the person you decide to be.",
    author: " - Ralph Waldo Emerson",
  },
  {
    text: "The journey of a thousand miles begins with one step.",
    author: " - Lao Tzu",
  },
];

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

const getRandomColor = () => {
  const bgColors = [
    "#F1DEDE",
    "#d8ffd3",
    "#b0c4de",
    "#d4c1ec",
    "#edae49",
    "#dda15e",
    "#293241",
  ];
  const wrapperColors = [
    "#d496A7",
    "#34e89e",
    "#6f93c3",
    "#9b7ede",
    "#cc8614",
    "#bc6c25",
    "#ee6c4d",
  ];

  const randomIndexColor = Math.floor(Math.random() * bgColors.length);

  return {
    bgColor: bgColors[randomIndexColor],
    wrapperColor: wrapperColors[randomIndexColor],
  };
};

function App() {
  const [quote, setQuote] = useState({ text: "Loading...", author: "" });
  // eslint-disable-next-line no-unused-vars
  const [bgColor, setBgColor] = useState();
  const [wrapperColor, setWrapperColor] = useState();

  const fetchQuote = () => {
    const newQuote = getRandomQuote(quotes);
    const { bgColor, wrapperColor } = getRandomColor();
    setQuote(newQuote);
    setBgColor(bgColor);
    setWrapperColor(wrapperColor);
    document.body.style.background = bgColor;
  };

  useEffect(() => {
    fetchQuote();
    document.title = "Random Quote Machine";
  }, []);

  const tweetUrl = `https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`;

  return (
    <div id="wrapper" style={{ backgroundColor: wrapperColor }}>
      <div id="quote-box">
        <p id="text">"{quote.text}"</p>
        <p id="author">{quote.author}</p>
        <div className="buttons">
          <button id="new-quote" onClick={fetchQuote}>
            New Quote
          </button>
          <button className="tweet">
            <a href={tweetUrl} id="tweet-quote" target="_blank" rel="noreferrer">
              Tweet
            </a>
          </button>
        </div>
      </div>
      <div className="footer">
        <p className="info">
          © By
          <a
            className="info-link"
            href="https://github.com/BeSomi22"
            target="_blank" rel="noreferrer"
          >
            BeSomi22
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;

