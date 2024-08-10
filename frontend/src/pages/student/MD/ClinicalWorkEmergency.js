import LogoHeader from "../../../components/student/MD/LogoHeader";
import DataHeaders from "../../../components/student/MD/DataHeaders";
import DiagnosisFields from "../../../components/student/MD/DiagnosisFields";
import Button from "../../../components/student/MD/Button";
import styles from "./ClinicalWorkEmergency.module.css";

const ClinicalWorkEmergency = () => {
  return (
    <div className={styles.clinicalWorkEmergency}>
      <LogoHeader untitledDesign11="/untitleddesign1-11@2x.png" />
      <main className={styles.clinicalWorkEmergencyInner}>
        <section className={styles.frameParent}>
          <div className={styles.headingParent}>
            <h1 className={styles.heading}>Clinical Work – Emergency</h1>
            <div className={styles.enterInThe}>
              Enter in the table details of the patients attended by you in
              emergency, A minimum of 100 cases are to be recorded
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.dateHeadersWrapper}>
              <div className={styles.dateHeaders}>
                <div className={styles.sNORow}>
                  <div className={styles.sno}>S.NO.</div>
                  <div className={styles.emptyCellOne}>
                    <div className={styles.separator}>01</div>
                  </div>
                  <div className={styles.typeRow}>
                    <div className={styles.typeCell}>
                      <div className={styles.separator}>02</div>
                      <div className={styles.separator}>03</div>
                      <div className={styles.separator}>04</div>
                      <div className={styles.separator}>05</div>
                      <div className={styles.separator}>06</div>
                      <div className={styles.separator}>07</div>
                      <div className={styles.separator}>08</div>
                      <div className={styles.separator}>09</div>
                      <div className={styles.separator}>10</div>
                      <div className={styles.separator}>11</div>
                    </div>
                  </div>
                </div>
                <DataHeaders
                  propMinWidth="unset"
                  date="Date"
                  propMinWidth1="33px"
                  dDMMYYYY="DD/MM/YYYY"
                  propMinWidth2="102px"
                  dDMMYYYY1="DD/MM/YYYY"
                  propMinWidth3="102px"
                  dDMMYYYY2="DD/MM/YYYY"
                  propMinWidth4="102px"
                  dDMMYYYY3="DD/MM/YYYY"
                  propMinWidth5="102px"
                  dDMMYYYY4="DD/MM/YYYY"
                  propMinWidth6="102px"
                  dDMMYYYY5="DD/MM/YYYY"
                  propMinWidth7="102px"
                  dDMMYYYY6="DD/MM/YYYY"
                  propMinWidth8="102px"
                  dDMMYYYY7="DD/MM/YYYY"
                  propMinWidth9="102px"
                  dDMMYYYY8="DD/MM/YYYY"
                  propMinWidth10="102px"
                  dDMMYYYY9="DD/MM/YYYY"
                  propMinWidth11="102px"
                  dDMMYYYY10="DD/MM/YYYY"
                  propMinWidth12="102px"
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
            </div>
            <div className={styles.diagnosisInputWrapper}>
              <div className={styles.diagnosisInput}>
                <div className={styles.diagnosis}>Diagnosis</div>
                <DiagnosisFields propPadding="0px 0px 5px" />
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
            </div>
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
            <div className={styles.vectorWrapper}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/line-17.svg"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ClinicalWorkEmergency;
