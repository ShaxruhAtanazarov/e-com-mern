import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { QueryClient } from "services/QueryClient";
import { HelmetProvider } from "react-helmet-async";
import { PersistGate } from "redux-persist/integration/react";

// Global Store
import store, { persistor } from "store";
import { productsApiSlice } from "store/slices/products/products";
import { categoryApiSlice } from "store/slices/categories/categories";

// components
import App from "./App";

// Import Swiper styles
import "./index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "tippy.js/dist/tippy.css";
import "react-toastify/dist/ReactToastify.css";

// triggering request of getting all products
store.dispatch(productsApiSlice.endpoints.getProducts.initiate());
store.dispatch(categoryApiSlice.endpoints.getCategories.initiate());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClient>
        <HelmetProvider>
          <Provider store={store}>
            <ToastContainer position="bottom-center" limit={1} />
            <AnimatePresence>
              <PersistGate persistor={persistor} loading={null}>
                <App />
              </PersistGate>
            </AnimatePresence>
          </Provider>
        </HelmetProvider>
      </QueryClient>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
