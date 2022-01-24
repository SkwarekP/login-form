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
  }, []);
  const changePerson = (event) => {
    console.log(chosenPerson);
    var selectedIndex = event.target.options.selectedIndex;
    setChosenPerson(osoby[selectedIndex]);
    //{osoby.map((o)=><option key={o.user_id}>{o.imie} {o.nazwisko}</option>)}
  };
  return (
    <p>
      <select onChange={changePerson}>
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
