import { useEffect, useState } from "react";
import "./App.css";
import quoteSign from "./assets/quote-svgrepo-com.svg";
import quoteRequests from "./services/quotes";

interface IQuote{
  author: string,
  category: string,
  quote: string
}

function App() {

  const [quote, setQuote] = useState<Array<IQuote>>();

  useEffect(() => {
    // quoteRequests.get().then(data =>{ setQuote(data); console.log(data)});
  }, [])

  return (
    <>
      <div className="quotes">
        <div className="container">
          <div className="quote-body">
            <div className="quotes-header">Quotes Generator</div>
            <div className="quotes-content">  
              <div className="quotes-sign">
                <img src={quoteSign} alt="" style={{ maxWidth: "250px" }} />
              </div>
              <div className="quotes-text">
                <div className="quote-title">
                  { (Array.isArray(quote) && quote.length > 0) ? quote[0].quote : "Quote" }
                </div>
                <div className="quote-author">
                  { (Array.isArray(quote) && quote.length > 0) ? quote[0].author : "Quote" }
                </div>
              </div>
            </div>
            <div className="quotes-setting">Setting</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
