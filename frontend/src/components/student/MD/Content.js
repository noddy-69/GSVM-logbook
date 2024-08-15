import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./Content.module.css";

const Content = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.logbookSelection}>
        <div className={styles.fieldSelector}>
          <div className={styles.fieldOptions}>
            <div className={styles.selectionItemsWrapper}>
              <div className={styles.selectionItems}>
                <div className={styles.selectionDetails}>
                  <h3 className={styles.heading}>1st Year</h3>
                </div>
                <div className={styles.selectYourLog}>
                  Select your Log book field
                </div>
              </div>
            </div>
            <div className={styles.tablePreview}>
              <a href="/clinical-work-historytaking">
              <div className={styles.entriesTable}>
                <div className={styles.entriesTableChild} />
                <div className={styles.entries}>Entries</div>
              </div>
              </a>
              <a href="/clinical-work-general-physical-examination">
              <div className={styles.entriesTable1}>
                <div className={styles.entriesTableChild} />
                <div className={styles.tableOverview}>Table overview</div>
              </div>
              </a>
            </div>
          </div>
        </div>
        <Button textLabel="Back" />
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
