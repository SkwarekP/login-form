import { useEffect, useState } from "react";

export const ChosePerson = (props) => {
  const [osoby, setOsoby] = useState([]);
  const [chosenPerson, setChosenPerson] = useState({});
  useEffect(() => {
    fetch("http://localhost:8000/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setOsoby(() => data));
    setChosenPerson(osoby[0]);
  }, []);
  const changePerson = (event) => {
    var selectedIndex = event.target.options.selectedIndex;
    setChosenPerson(osoby[selectedIndex - 1]);
  };
  return (
    <p>
      <select onChange={changePerson}>
        <option disabled selected>
          Wybierz osobe
        </option>
        {osoby.map((o) =>
          props.osoba !== null && o.id === props.osoba.id ? (
            <option key={o.user_id}>
              {o.imie} {o.nazwisko}
            </option>
          ) : (
            <option key={o.user_id}>
              {o.imie} {o.nazwisko}
            </option>
          )
        )}
      </select>
      <button onClick={() => props.submitChange(chosenPerson)}>
        Zatwierdz
      </button>
    </p>
  );
};
