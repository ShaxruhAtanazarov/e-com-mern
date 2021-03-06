import React, {  useEffect, useState } from "react";
import { get } from "lodash";
import { Helmet } from "react-helmet-async";

// store hook
import { useGetProductsQuery } from "store/slices/products/products";

// components
import { Loader } from "components/Loader";
import { MainTitle } from "components/Title";
import { Container } from "components/Container";
import { SearchField } from "components/SearchField";
import { ProductsGrid } from "components/ProductsGrid";
import { ProductsFilterAside } from "components/ProductsFilterAside";
import { ProductsPagnation } from "components/ProductsPagnation";


const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetProductsQuery(currentPage);

  const productCount = get(data, "productCount", 0);
  const resultPerPage = get(data, "resultPerPage", 0);
  const products = get(data, "products", []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <Container>
      <Helmet>
        <title>All Products</title>
      </Helmet>
      <div className="min-h-[100vh]">
        <div className="ml-auto my-4 w-[100%] lg:w-[50%] flex justify-end">
          <SearchField />
        </div>
        <div className="my-6">
          <MainTitle title={"all Products"} />
        </div>
        <div className="flex gap-6">
          <div
            className="w-[30%] xl:w-[25%] xxl:w-[20%]"
            style={{ display: "unset" }}
          >
            <ProductsFilterAside />
          </div>

          <div className="w-[70%] xl:w-[75%] xxl:w-[80%]">
            {isLoading ? (
              <div className="flex items-center justify-center h-[50vh] w-full">
                <div className="w-[100px]">
                  <Loader />
                </div>
              </div>
            ) : (
              <div>
                <ProductsGrid products={products} />
                <ProductsPagnation
                  currentPage={currentPage}
                  productCount={productCount}
                  resultPerPage={resultPerPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Products;
