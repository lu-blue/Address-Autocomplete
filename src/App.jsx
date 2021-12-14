import GoogleMap from "./components/GoogleMap";
import AddressForm from "./components/AddressForm";
import { useState } from "react";
import "./css/App.css";

export default function App() {
  const [viewMap, setViewMap] = useState(false);
  const linkName = viewMap
    ? "Close map search"
    : "Search your address with Google Maps";

  const extraMap = <GoogleMap />;

  return (
    <div className="App">
      <div className="grid">
        <h2>Please, fill in your address</h2>

        <AddressForm />

        <div className="More">
          <button
            className="view-more-button"
            onClick={() => {
              setViewMap(!viewMap);
            }}
          >
            {linkName}
          </button>
          {viewMap && extraMap}
        </div>
      </div>
    </div>
  );
}
