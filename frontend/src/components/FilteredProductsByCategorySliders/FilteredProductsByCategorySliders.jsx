import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { get } from "lodash";

// components
import { MainTitle } from "components/Title";
import { Product } from "components/Product";
import { NoResults } from "components/NoResults";
import { Container } from "components/Container";
import { SliderScrolled } from "components/SliderScrolled";

const FilteredProductsByCategorySliders = ({
  filteredProducts,
  title,
  NoResultsTitle,
  inViewedLaterList,
  inLikedList,
}) => {
  return (
    <Container>
      <div className="my-6">
        <MainTitle title={title} extraClasses={"mx-auto mb-4"} />
      </div>
      <>
        <div>
          {filteredProducts.length === 0 ? (
            <NoResults type={NoResultsTitle} />
          ) : null}
        </div>
        {filteredProducts.map((filteredProduct, filteredProductIndex) => (
          <Fragment key={filteredProductIndex}>
            <SliderScrolled
              title={get(filteredProduct, "category.name", "boys")}
            >
              {filteredProduct.filtererd.map((product, productIndex) => (
                <Product
                  product={product}
                  inViewedLaterList={inViewedLaterList}
                  inLikedList={inLikedList}
                  extraClasses="md:min-w-[360px] min-w-[300px]"
                  key={productIndex}
                />
              ))}
            </SliderScrolled>
            <div className="w-full h-[1.2px] bg-slate-300 my-4" />
          </Fragment>
        ))}
      </>
    </Container>
  );
};

FilteredProductsByCategorySliders.propTypes = {
  filteredProducts: PropTypes.array.isRequired,
  title: PropTypes.string,
  NoResultsTitle: PropTypes.string,
  inViewedLaterList: PropTypes.bool,
  inLikedList: PropTypes.bool,
};

FilteredProductsByCategorySliders.defaultProps = {
  filteredProducts: [],
  title: "Your Title",
  NoResultsTitle: "Empty Result Title",
  inViewedLaterList: false,
  inLikedList: false,
};

export default FilteredProductsByCategorySliders;
