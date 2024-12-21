"use client";
import { useState } from "react";
import TextInput from "../atoms/HomePageAtoms/TextInput";
import DateInput from "../atoms/HomePageAtoms/DateInput";

import styles from "../../styles/moleculesStyles/MainSearch.module.css";
import calendarIcon from "../../assets/icons/calendar.svg";
import searchIcon from "../../assets/icons/global-search.svg";
import locationIcon from "../../assets/icons/location.svg";

function MainSearch() {
  const [inputValue, setInputValue] = useState({
    origin: "",
    destination: "",
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <div className={styles.content}>
      <p className={styles.title}>
        <span>تورینو</span> برگزار کننده بهترین تورهای داخلی و خارجی
      </p>
      <div className={styles.searchBar}>
        <TextInput
          placeholder="مبدا"
          icon={locationIcon}
          name="origin"
          value={inputValue}
          changeHandler={changeHandler}
          setInputValue={setInputValue}
        />
        <TextInput
          placeholder="مقصد"
          icon={searchIcon}
          name="destination"
          value={inputValue}
          changeHandler={changeHandler}
          setInputValue={setInputValue}
        />
        <DateInput placeholder="تاریخ" icon={calendarIcon} />
        <button>جستجو</button>
      </div>
    </div>
  );
}

export default MainSearch;
