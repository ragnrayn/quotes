import { useEffect, useRef, useState } from "react";
import "./App.css";
import quoteSign from "./assets/quote-svgrepo-com.svg";
import quoteRequests from "./services/quotes";

interface IQuote{
  author: string,
  category: string,
  quote: string
}

enum ECategoy{
  age,
  alone,
  amazing,
  anger,
  architecture,
  art,
  attitude,
  beauty,
  best,
  birthday,
  business,
  car,
  change,
  communication,
  computers,
  cool,
  courage,
  dad,
  dating,
  death,
  design,
  dreams,
  education,
  environmental,
  equality,
  experience,
  failure,
  faith,
  family,
  famous,
  fear,
  fitness,
  food,
  forgiveness,
  freedom,
  friendship,
  funny,
  future,
  god,
  good,
  government,
  graduation,
  great,
  happiness,
  health,
  history,
  home,
  hope,
  humor,
  imagination,
  inspirational,
  intelligence,
  jealousy,
  knowledge,
  leadership,
  learning,
  legal,
  life,
  love,
  marriage,
  medical,
  men,
  mom,
  money,
  morning,
  movies,
  success,
}

function App() {

  const [quote, setQuote] = useState<Array<IQuote>>();
  const calledOnce = useRef(false);

  useEffect(() => {
    if(calledOnce.current) return;

    quoteRequests.get().then(data =>{setQuote(data);});
    calledOnce.current = true;
  }, [])

  const categoryGet = (category: string) => {
    quoteRequests.get(category).then(data =>{ setQuote(data); console.log(data)});
  }

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
                  { (Array.isArray(quote) && quote.length > 0) ? quote[0].author : "Quote Author" }
                </div>
              </div>
            </div>
            <div className="quotes-setting">
              <select onChange={(e) => categoryGet(e.target.value)}>
                {
                  Object.keys(ECategoy).filter((v) => isNaN(v)).map((item, key) => <option key={key}>{ item }</option>)
                }
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
