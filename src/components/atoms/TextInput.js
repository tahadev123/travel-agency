"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Inputs.module.css";
import locationIcon from "../../assets/icons/location.svg";

function TextInput({
  placeholder,
  icon,
  name,
  value = {},
  changeHandler,
  setInputValue,
}) {
  const { origin = "", destination = "" } = value;

  const [isInputClicked, setIsInputClicked] = useState(false);

  const cities = [
    { id: 1, cityName: "تهران" },
    { id: 2, cityName: "سنندج" },
    { id: 3, cityName: "تبریز" },
    { id: 4, cityName: "شیراز" },
    { id: 5, cityName: "مشهد" },
    { id: 6, cityName: "کیش" },
  ];

  const userInput = name === "origin" ? origin.trim() : destination.trim();

  let filteredCities =
    isInputClicked && userInput === ""
      ? cities
      : cities.filter((city) => city.cityName.includes(userInput));

  const clickHandler = (cityName) => {
    if (name === "origin") {
      setInputValue({ ...value, origin: cityName });
    } else {
      setInputValue({ ...value, destination: cityName });
    }
    setIsInputClicked(false);
  };

  if (cities.some((city) => city.cityName === userInput)) {
    filteredCities = [];
  }

  return (
    <div className={styles.container}>
      <Image src={icon} className={styles.icon} alt="iconinput" />
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        value={name === "origin" ? origin : destination}
        onChange={changeHandler}
        onFocus={() => setIsInputClicked(true)}
        onBlur={() => setIsInputClicked(false)}
      />
      {isInputClicked && filteredCities.length > 0 && (
        <div className={styles.recomendedCities}>
          <h4>پرتردد</h4>
          {filteredCities.map((city) => (
            <div key={city.id}>
              <Image src={locationIcon} alt="location-icon" />
              <p onMouseDown={() => clickHandler(city.cityName)}>
                {city.cityName}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TextInput;
