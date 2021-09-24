import { useState, useEffect } from "react";

// Styles
import "./portfolio.scss";

// List
import PortfolioList from "components/PortfolioList";

// Data
import {
  contentPortfolio,
  designPortfolio,
  featuredPortfolio,
  mobilePortfolio,
  webPortfolio,
} from "data/index";

// Comp
export default function Portfolio() {
  const [data, setData] = useState([]);

  const [selected, setSelected] = useState("featured");

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  // Get Data
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;

      case "web":
        setData(webPortfolio);
        break;

      case "mobile":
        setData(mobilePortfolio);
        break;

      case "design":
        setData(designPortfolio);
        break;

      case "content":
        setData(contentPortfolio);
        break;

      default:
        setData(featuredPortfolio);
        break;
    }
  }, [selected]);

  // Return
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            active={selected === item.id}
            setSelected={setSelected}
            title={item.title}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
