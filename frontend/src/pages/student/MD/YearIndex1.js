import LogoHeader from "../../../components/student/MD/LogoHeader";
import Button from "../../../components/student/MD/Button";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import styles from "./YearIndex1.module.css";

const YearIndex1 = () => {
  const [items, setItems] = useState([]);

  const handleList = (itemName) => {
    axios.post('http://127.0.0.1:5000/add-item1', { name: itemName })
      .then(response => {
        console.log('Item added:', response.data);
      })
      .catch(error => {
        console.error('Error adding item:', error);
      });
  };

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/year-index1')
      .then(response => {
        setItems(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className={styles.yearSelection}>
      <LogoHeader untitledDesign11="/untitleddesign1-1@2x.png" />
      <main className={styles.yearSelectionInner}>
        <section className={styles.leftColumnParent}>
          <div className={styles.leftColumn}>
            <div className={styles.logbookDropdown}>
              <div className={styles.dropdownLabel}>
                <h1 className={styles.heading}>Clinical Work</h1>
                <div className={styles.selectLogBook}>
                  Double click on one of the procedure from below to continue 
                </div>
              </div>
              <div className={styles.dropdown}>
              <ol>
                {items.map(item => (
                  <a href='/logbook-field'>
                  <li key={item.id} onClick={() => handleList(item.index_item)}>
                    <div className={styles.listIndex}>{item.id}.</div><div className={styles.listItem}>{item.index_item}</div>
                  </li>
                  </a>
                ))}
              </ol>
              </div>
            </div>
          </div>
          <Button
            textLabel="Back"
            propBackgroundColor="#007066"
            propHeight="unset"
            propBorder="unset"
            propMinWidth="36px"
            propColor="#fff"
          />
        </section>
      </main>
    </div>
  );
};

export default YearIndex1;
