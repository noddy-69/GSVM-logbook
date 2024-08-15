import LogoHeader from "../../../components/student/MD/LogoHeader";
import Button from "../../../components/student/MD/Button";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import styles from "./YearIndex.module.css";

const YearIndex = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const handleList = (itemName) => {
    axios.post('http://127.0.0.1:5000/add-item', { name: itemName })
      .then(response => {
        console.log('Item added:', response.data);
        if (response.data == 'Clinical Work' || response.data == 'Procedures Done') {
          navigate('/year-index1');
        }
        else {
          navigate('/clinical-work-historytaking');
        }
      })
      .catch(error => {
        console.error('Error adding item:', error);
      });
  };

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/year-index')
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
                <h1 className={styles.heading}>1st Year</h1>
                <div className={styles.selectLogBook}>
                  Select Log book field
                </div>
              </div>
              <div className={styles.dropdown}>
              <ol>
                {items.map(item => (
                  
                  <li key={item.id} onClick={() => handleList(item.index_item)}>
                    <div className={styles.listIndex}>{item.id}.</div><div className={styles.listItem}>{item.index_item}</div>
                  </li>

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

export default YearIndex;
