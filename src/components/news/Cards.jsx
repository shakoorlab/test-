import React, { useState, useRef } from "react";
import CardItem from "./CardItem";
import Pagination from "@mui/material/Pagination";
import "../styles/Cards.css";
import images from "../../assets/images/news/NewsImageImports";

function Cards() {
  const [currentPage, setCurrentPage] = useState(1);
  const h1Ref = useRef(null);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    if (h1Ref.current) {
      h1Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={h1Ref} className="cards">
      <h1>In the News</h1>
      <div className="cards__wrapper">
        {currentPage === 1 && (
          <>
            <ul className="cards__items">
              <CardItem
                src={images.article_14}
                alt="PheNode"
                text="Meet the founder: Agrela&#39;s Nadia Shakoor"
                label="December 11, 2023"
                path="https://agfundernews.com/agrelas-nadia-shakoor-on-how-to-restore-biodiversity-to-us-highways"
              />
              <CardItem
                src={images.article_13}
                alt="PheNode in Field"
                text="Leading Transportation Partnership Deploys Agrela&#39;s Vegetation Monitoring Technology"
                label="November 16, 2023"
                path="https://apnews.com/press-release/3bl-media/georgia-plants-transportation-d58ca32fd396a4fd767d0dce333d7581"
              />
              <CardItem
                src={images.article_12}
                alt="PheNode at the Danforth Center"
                text="Data startup Agrela Ecosystems, begins commercializing technology"
                label="September 20, 2023"
                path="https://www.bizjournals.com/stlouis/inno/stories/news/2023/09/20/agrela-ecosystems-data-phenode-danforth-center.html"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src={images.article_11}
                alt="Sorghum field"
                text="Harnessing the Power of Climate Smart Crops"
                label="January 1, 2023"
                path="https://www.bizjournals.com/stlouis/news/2023/01/01/sorghum-harnessing-the-power-of-climate-smart-crop.html"
              />
              <CardItem
                src={images.article_10}
                alt="Farmer in field"
                text="Sorghum's Revival Goes Against the Grain"
                label="September 30, 2022"
                path="https://www.forbes.com/sites/daphneewingchow/2022/09/30/sorghums-revival-goes-against-the-grain/?sh=1fede1d66f1c"
              />
              <CardItem
                src={images.article_8}
                alt="Photo of Sorghum"
                text="DDPSC Collaborates with Sorghum Producers"
                label="September 28, 2022"
                path="https://www.eurekalert.org/news-releases/966324"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src={images.article_7}
                alt="Photo at the NSF"
                text="Receiving the National Science Foundation Grant"
                label="September 15, 2022"
                path="https://www.slu.edu/news/2022/september/nsf-grant-edge-computing.php"
              />
              <CardItem
                src={images.article_1}
                alt="Image of PheNode in field"
                text="Salk Researchers Launch Collaboration"
                label="September 14, 2021"
                path="https://www.salk.edu/news-release/salk-plant-researchers-launch-collaboration-to-breed-carbon-capturing-sorghum/"
              />
              <CardItem
                src={images.article_6}
                alt="Image of Dr. Shakoor working with PheNode"
                text="You Should Get to Know Dr. Shakoor"
                label="August 5, 2021"
                path="https://www.bizjournals.com/stlouis/inno/stories/profiles/2021/08/05/st-louis-character-2021-nadia-shakoor.html"
              />
            </ul>
          </>
        )}
        {currentPage === 2 && (
          <>
            <ul className="cards__items">
              <CardItem
                src={images.article_5}
                alt="Image of phenotyper"
                text="ETHINKSTL: In This Episode for the Week"
                label=" February 10, 2021"
                path="https://entrepreneuriallythinking.libsyn.com/ethinkstl-ep213-season16-ep10-nadia-shakoor"
              />
              <CardItem
                src={images.article_2}
                alt="Image of TerraReff project"
                text="Farming and Drones? How do they work together?"
                label="November 16, 2020"
                path="https://www.stlmag.com/news/nadia-shakoor-field-dock-farming/"
              />
              <CardItem
                src={images.article_3}
                alt="Image of PheNode in a field"
                text="Phenotyping Station Ready for Field Testing"
                label="November 4, 2016"
                path="https://www.agupdate.com/crops/phenotyping-station-ready-for-field-testing/article_dd916df4-5ed8-5da9-a8cb-0b6696e4d9e1.html"
              />
            </ul>
          </>
        )}
      </div>
      <div className="pagination-container">
        <Pagination
          count={2}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
    </div>
  );
}

export default Cards;
