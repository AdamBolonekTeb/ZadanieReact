import "./App.css";
import { useState } from "react";

function App() {
  // Deklaracja stanów dla imienia, nazwiska i wybranego kursu
  const [imie, setImie] = useState("");
  const [nazwisko, setNazwisko] = useState("");
  const [kurs, setKurs] = useState("");

  // Obsługa formularza
  const handleForm = (e) => {
    e.preventDefault();
    // Sprawdzenie, czy wszystkie pola są uzupełnione
    if (imie !== "" && nazwisko !== "" && kurs !== "")
      alert(`${imie} ${nazwisko} Zapisał się na kurs ${kurs}`);
    else alert("Nie pełne dane");
  };

  // Dostępne kursy
  let courses = [
    "programowanie w C#",
    "angular dla początkujących",
    "Kurs django",
  ];

  return (
    <>
      {/* Wyświetlanie liczby dostępnych kursów */}
      Liczba kursów: {courses.length}
      <ol>
        {/* Wyświetlanie listy kursów */}
        {courses.map((el, index) => {
          return <li key={index}>{el}</li>;
        })}
      </ol>
      {/* Formularz zapisu na kurs */}
      <form onSubmit={handleForm}>
        <label>
          Imię
          <input
            value={imie}
            onChange={(e) => setImie(e.target.value)}
            className="form-control"
          />
        </label>
        <label>
          Nazwisko
          <input
            value={nazwisko}
            onChange={(e) => setNazwisko(e.target.value)}
            className="form-control"
          />
        </label>
        <label>
          Kurs
          {/* Wybór kursu z listy rozwijanej */}
          <select
            className="form-control"
            value={kurs}
            onChange={(e) => setKurs(e.target.value)}
          >
            <option>Wybierz opcję</option>
            {/* Mapowanie dostępnych kursów na opcje wyboru */}
            {courses.map((el) => {
              return <option value={el} key={el}>{el}</option>;
            })}
          </select>
        </label>
        {/* Przycisk do zapisu na kurs */}
        <button type="submit" className="btn btn-primary">
          Dodaj do kursu
        </button>
      </form>
    </>
  );
}

export default App;