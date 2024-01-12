import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import IMAGES from "./Images";
import styles from "../style/CourseCard.module.css"; // Import CSS module

const CourseCard = ({ data, head }) => {
  const [sortedData, setSortedData] = useState([...data]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([...data]);

  const handleSortChange = (e) => {
    const sortCriteria = e.target.value;
    let sortedResult = [...filteredData];

    if (sortCriteria === "title") {
      sortedResult.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortCriteria === "price") {
      sortedResult.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    } else if (sortCriteria === "description") {
      sortedResult.sort((a, b) =>
        a.description.localeCompare(b.description)
      );
    }

    setSortedData(sortedResult);
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);
  };

  useEffect(() => {
    const results = sortedData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.instructor.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm)
    );
    setFilteredData(results);
  }, [searchTerm, sortedData]);

  return (
    <>
    <div className={styles["main-comp"]}>
      <header className={styles.header}>
        <div className={styles["sort-container"]}>
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" onChange={handleSortChange}>
            <option value="title">Title</option>
            <option value="price">Price</option>
            <option value="description">Description</option>
          </select>
        </div>
        <div className={styles["search-container"]}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className={styles["search-input"]}
          />
        </div>
      </header>

      <div className={styles.headClass}>
        <h1 style={{color:'white'}}>{head}</h1>
      </div>

      <div className={styles["course-card-container"]}>
        {filteredData.map((item, index) => (
          <article className={styles.card} key={index}>
            <img
              className={styles["card__background"]}
              src={item.img}
              alt={item.title}
              width="1920"
              height="2193"
            />
            <div className={styles["card__content"]}>
              <h2 className={`${styles["card__title"]} ${styles["custom_h2"]}`}>{item.title}</h2>
              <p className={`${styles["card__description"]} ${styles["custom_p"]}`}>
                {item.description}
              </p>
              <p className={`${styles["card__description"]} ${styles["custom_p"]}`}>
                Course Type: {item.course}
              </p>
              <p className={`${styles["card__description"]} ${styles["custom_p"]}` } style={{fontSize:'bold' }}>
                Price: {item.price}
              </p>
              <a href={`/moredetails/${item.id}`} className={styles["more-info-link"]}>
                <button className={styles["card__button"]}>Read more</button>
              </a>
            </div>
          </article>
        ))}
      </div>
      </div>
    </>
  );
};

export default CourseCard;
