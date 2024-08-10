import LogoHeader from "../../../components/student/MD/LogoHeader";
import DataHeaders from "../../../components/student/MD/DataHeaders";
import DiagnosisFields from "../../../components/student/MD/DiagnosisFields";
import Button from "../../../components/student/MD/Button";
import styles from "./ClinicalWorkHistoryTaking.module.css";

const ClinicalWorkHistoryTaking = () => {
  return (
    <div className={styles.clinicalWorkHistoryTaking}>
      <LogoHeader untitledDesign11="/untitleddesign1-11@2x.png" />
      <main className={styles.patientHistory}>
        <section className={styles.historyInstructions}>
          <div className={styles.headingParent}>
            <h1
              className={styles.heading}
            >{`Clinical Work - History Taking `}</h1>
            <div className={styles.writeDownThe}>
              Write down the details of patients whose history has been taken by
              you and presented before consultant. A minimum of 100 cases are to
              be recorded
            </div>
          </div>
          <div className={styles.patientDataTable}>
            <div className={styles.patientDataHeader}>
              <div className={styles.serialNoHeader}>
                <div className={styles.sno}>S.NO.</div>
                <div className={styles.serialNoField}>
                  <div className={styles.serialNoInput}>01</div>
                </div>
                <div className={styles.patientDetails}>
                  <div className={styles.detailFields}>
                    <div className={styles.serialNoInput}>02</div>
                    <div className={styles.serialNoInput}>03</div>
                    <div className={styles.serialNoInput}>04</div>
                    <div className={styles.serialNoInput}>05</div>
                    <div className={styles.serialNoInput}>06</div>
                    <div className={styles.serialNoInput}>07</div>
                    <div className={styles.serialNoInput}>08</div>
                    <div className={styles.serialNoInput}>09</div>
                    <div className={styles.serialNoInput}>10</div>
                    <div className={styles.serialNoInput}>11</div>
                  </div>
                </div>
              </div>
              <DataHeaders
                date="Date"
                dDMMYYYY="DD/MM/YYYY"
                dDMMYYYY1="DD/MM/YYYY"
                dDMMYYYY2="DD/MM/YYYY"
                dDMMYYYY3="DD/MM/YYYY"
                dDMMYYYY4="DD/MM/YYYY"
                dDMMYYYY5="DD/MM/YYYY"
                dDMMYYYY6="DD/MM/YYYY"
                dDMMYYYY7="DD/MM/YYYY"
                dDMMYYYY8="DD/MM/YYYY"
                dDMMYYYY9="DD/MM/YYYY"
                dDMMYYYY10="DD/MM/YYYY"
              />
              <DataHeaders
                propMinWidth="unset"
                date="UHID No"
                propMinWidth1="62px"
                dDMMYYYY="xx02912xx"
                propMinWidth2="77px"
                dDMMYYYY1="xx02912xx"
                propMinWidth3="77px"
                dDMMYYYY2="xx02912xx"
                propMinWidth4="77px"
                dDMMYYYY3="xx02912xx"
                propMinWidth5="77px"
                dDMMYYYY4="xx02912xx"
                propMinWidth6="77px"
                dDMMYYYY5="xx02912xx"
                propMinWidth7="77px"
                dDMMYYYY6="xx02912xx"
                propMinWidth8="77px"
                dDMMYYYY7="xx02912xx"
                propMinWidth9="77px"
                dDMMYYYY8="xx02912xx"
                propMinWidth10="77px"
                dDMMYYYY9="xx02912xx"
                propMinWidth11="77px"
                dDMMYYYY10="xx02912xx"
                propMinWidth12="77px"
              />
            </div>
            <div className={styles.diagnosisParent}>
              <div className={styles.diagnosis}>Diagnosis</div>
              <DiagnosisFields />
              <DiagnosisFields propPadding="0px 0px 5px" />
              <DiagnosisFields propPadding="0px 0px 5px" />
              <DiagnosisFields propPadding="0px 0px 5px" />
              <DiagnosisFields propPadding="0px 0px 5px" />
              <DiagnosisFields propPadding="0px 0px 5px" />
              <DiagnosisFields propPadding="0px 0px 5px" />
              <DiagnosisFields propPadding="0px 0px 5px" />
              <DiagnosisFields propPadding="0px 0px 5px" />
              <DiagnosisFields propPadding="0px 0px 5px" />
              <DiagnosisFields propPadding="unset" />
            </div>
            <div className={styles.patientDataTableInner}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/line-17.svg"
              />
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.actionButtons}>
              <Button
                textLabel="Add Patient"
                propBackgroundColor="unset"
                propHeight="49px"
                propBorder="1px solid #007066"
                propMinWidth="83px"
                propColor="#007066"
              />
              <Button
                textLabel="Submit"
                propBackgroundColor="#007066"
                propHeight="unset"
                propBorder="unset"
                propMinWidth="51px"
                propColor="#fff"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ClinicalWorkHistoryTaking;
