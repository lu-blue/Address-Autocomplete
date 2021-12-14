import { useState } from "react";

export default function AddressForm() {
  const [street, setStreet] = useState("");
  const [code, setCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { street, code, city, country };
    console.log(data);
  };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label>Street</label>
        <input
          type="text"
          required
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <label>Zip Code</label>
        <input
          type="text"
          required
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <label>City</label>
        <input
          type="text"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label>Country</label>
        <input
          type="text"
          required
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
