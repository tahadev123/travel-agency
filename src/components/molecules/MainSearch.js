"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import QueryString from "qs";
import TextInput from "../atoms/HomePageAtoms/TextInput";
import DateInput from "../atoms/HomePageAtoms/DateInput";
import { flattenObject } from "@/utils/helpers";

import calendarIcon from "@/assets/icons/calendar.svg";
import searchIcon from "@/assets/icons/global-search.svg";
import locationIcon from "@/assets/icons/location.svg";
import styles from "@/styles/moleculesStyles/MainSearch.module.css";

function MainSearch() {
  const [information, setInformation] = useState({});
  const [inputValue, setInputValue] = useState({
    origin: "",
    destination: "",
  });

  const router = useRouter();

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputValue({ ...inputValue, [name]: value });
  };  

  const submitHandler = (e) => {
    e.preventDefault();

    const query = QueryString.stringify(flattenObject(information));
    router.push(`/?${query}`);
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
              information={information}
              setInformation={setInformation}
            />
            <TextInput
              placeholder="مقصد"
              icon={searchIcon}
              name="destination"
              value={inputValue}
              changeHandler={changeHandler}
              setInputValue={setInputValue}
              information={information}
              setInformation={setInformation}
            />
          </div>
          <div className={styles.dateInput}>
            <DateInput
              placeholder="تاریخ"
              icon={calendarIcon}
              information={information}
              setInformation={setInformation}
            />
          </div>
        </div>
        <button onClick={submitHandler}>جستجو</button>
      </div>
    </form>
  );
}

export default MainSearch;
