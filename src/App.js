import "./index.css";
// Routes
import { Routes, Route } from "react-router-dom";
// components
import NavBAr from "./components/navbar";
import Landing from "./components/landing";
import AboutIPTV from "./components/aboutIPTV";
import Pricing from "./components/pricing";
import Work from "./components/work";
import Faq from "./components/faq";
import Footer from "./components/footer";
// for admin user
import Authentificator from "./components/adminComponents/authentificator";
import Dashboard from "./components/adminComponents/dashboard";
import FindUser from "./components/adminComponents/findUser";
import AllUsers from "./components/adminComponents/allUsers";
import Setting from "./components/adminComponents/setting";
import Interface from "./components/adminComponents/interface";
// helpers
import Whatsapp from "./components/helpers/whatsapp";
import Telegram from "./components/helpers/telegram";
// PAYPAL PAYMENT
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
// admin page
import Admin from "./components/views/admin";
// 404 Page Not Found
import NoMatch from "./components/views/NoMatch";

function App() {
  const initialOptions = {
    "client-id":
      "Afg6j0cJUbv0mZROavq4m5gjX5ZtHJHbm2LpQ-PJ_rr0uSNGCkKOEgb1etDLCDSkwuAvWXuCz6WNpaHQ",
    currency: "USD",
    intent: "capture",
    // "data-client-token": "abc123xyz==",
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PayPalScriptProvider options={initialOptions}>
            <NavBAr />
            <Whatsapp />
            <Telegram />
            <Landing />
            <AboutIPTV />
            <Pricing />
            <Work />
            <Faq />
            <Footer />
          </PayPalScriptProvider>
        }
      />
      <Route path="admin" element={<Admin />}>
        <Route index element={<Authentificator />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Interface />} />
          <Route path="all-users/:section" element={<AllUsers />} />
          <Route path="find-user" element={<FindUser />} />
          <Route path="find-user/:id" element={<FindUser />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
