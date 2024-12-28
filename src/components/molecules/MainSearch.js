"use client";
import { useState } from "react";
import TextInput from "../atoms/HomePageAtoms/TextInput";
import DateInput from "../atoms/HomePageAtoms/DateInput";

import calendarIcon from "../../assets/icons/calendar.svg";
import searchIcon from "../../assets/icons/global-search.svg";
import locationIcon from "../../assets/icons/location.svg";
import styles from "../../styles/moleculesStyles/MainSearch.module.css";

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
    <form className={styles.content}>
      <p className={styles.title}>
        <span>تورینو</span> برگزار کننده بهترین تورهای داخلی و خارجی
      </p>
      <div className={styles.searchBar}>
        <div className={styles.inputs}>
          <div className={styles.textInput}>
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
          </div>
          <div className={styles.dateInput}>
            <DateInput placeholder="تاریخ" icon={calendarIcon} />
          </div>
        </div>
        <button type="submit">جستجو</button>
      </div>
    </form>
  );
}

export default MainSearch;
