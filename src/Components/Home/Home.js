import React from "react";
import "./Home.css";
import Product from "../Product/Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          //   src="https://m.media-amazon.com/images/I/61lr-Q+XTfL._SX3000_.jpg"
          //   alt=""
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />

        <div className="home__row">
          <Product
            id="1234"
            title="Ibanez SR Standard 4 String Electric Bass - Cosmic Blue Starburst Flat"
            price={799.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/717xuAvXgZL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="1235"
            title="Electronic Health Record: Standards, Coding Systems, Frameworks, and Infrastructures "
            price={95.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/71gAW3Mx62L._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="1236"
            title="INSIGNIA 24-inch Class F20 Series Smart HD 720p Fire TV (NS-24F201NA23, 2022 Model)"
            price={89.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/811quPi2PUL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1237"
            title="Traditional Ethiopian cross art Ethiopian Cross T-Shirt"
            price={19.95}
            rating={5}
            image="https://m.media-amazon.com/images/I/71X-fdlmuoL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <Product
            id="21238"
            title="Brighton Ethiopian Convertible Cross Necklace"
            price={54.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/6120lXQbbbL._AC_UL600_FMwebp_QL65_.jpg"
          />
          <Product
            id="1239"
            title="Women's Casual Boho Floral Dress Long Sleeve Crew Neck Fall Dress Flowy Evening Dresses Cocktail Dress"
            price={31.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51DKK6y9iDL._AC_UL1000_.jpg"
          />
          <Product
            id="1233"
            title="Fresh Roasted Coffee, Ethiopian Yirgacheffe Kochere, 2 lb (32 oz), Medium Roast, Kosher, Whole Bean"
            price={26.95}
            rating={5}
            image="https://m.media-amazon.com/images/I/51fJj0x+xyL._AC_UL600_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1232"
            title="BLACK+DECKER BCRK17B Compact Refrigerator Energy Star Single Door Mini Fridge with Freezer, 1.7 Cubic Feet, Black"
            price={130.03}
            rating={5}
            image="https://m.media-amazon.com/images/I/41Sk1RNRjHL._AC_UL600_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
