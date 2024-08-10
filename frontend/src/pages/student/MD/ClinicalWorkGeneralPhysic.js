import LogoHeader from "../../../components/student/MD/LogoHeader";
import DataHeaders from "../../../components/student/MD/DataHeaders";
import DiagnosisFields from "../../../components/student/MD/DiagnosisFields";
import Button from "../../../components/student/MD/Button";
import styles from "./ClinicalWorkGeneralPhysic.module.css";

const ClinicalWorkGeneralPhysic = () => {
  return (
    <div className={styles.clinicalWorkGeneralPhysic}>
      <LogoHeader untitledDesign11="/untitleddesign1-11@2x.png" />
      <main className={styles.patientDetails}>
        <form className={styles.patientTable}>
          <div className={styles.tableHeader}>
            <h1 className={styles.heading}>
              Clinical Work – General Physical Examination
            </h1>
            <div className={styles.enterInThe}>
              Enter in the table details of the admitted patients on whom
              general physical examination was performed and presented before
              your consultant. A minimum of 100 cases are to be recorded
            </div>
          </div>
          <div className={styles.tableBody}>
            <div className={styles.patientRow}>
              <div className={styles.patientData}>
                <div className={styles.sno}>S.NO.</div>
                <div className={styles.serialNumberInput}>
                  <div className={styles.serialNumberPlaceholder}>01</div>
                </div>
                <div className={styles.dateColumn}>
                  <div className={styles.dateInputs}>
                    <div className={styles.serialNumberPlaceholder}>02</div>
                    <div className={styles.serialNumberPlaceholder}>03</div>
                    <div className={styles.serialNumberPlaceholder}>04</div>
                    <div className={styles.serialNumberPlaceholder}>05</div>
                    <div className={styles.serialNumberPlaceholder}>06</div>
                    <div className={styles.serialNumberPlaceholder}>07</div>
                    <div className={styles.serialNumberPlaceholder}>08</div>
                    <div className={styles.serialNumberPlaceholder}>09</div>
                    <div className={styles.serialNumberPlaceholder}>10</div>
                    <div className={styles.serialNumberPlaceholder}>11</div>
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
            </div>
            <div className={styles.assistanceColumn}>
              <DataHeaders
                propMinWidth="109px"
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
              <div className={styles.diagnosisColumn}>
                <div className={styles.diagnosisLabel}>
                  <div className={styles.comment}>Comment</div>
                  <div className={styles.diagnosisValue}>
                    <div className={styles.performedWithAssistance}>
                      Performed with assistance
                    </div>
                    <div className={styles.iconChevronDown}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.diagnosisInputs}>
                  <div className={styles.performedWithAssistance}>
                    Performed with assistance
                  </div>
                  <div className={styles.iconChevronDown}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
                <div className={styles.diagnosisInputs}>
                  <div className={styles.performedWithAssistance}>
                    Performed with assistance
                  </div>
                  <div className={styles.iconChevronDown}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
                <div className={styles.diagnosisInputs}>
                  <div className={styles.performedWithAssistance}>
                    Performed with assistance
                  </div>
                  <div className={styles.iconChevronDown}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
                <div className={styles.diagnosisInputs}>
                  <div className={styles.performedWithAssistance}>
                    Performed with assistance
                  </div>
                  <div className={styles.iconChevronDown}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
                <div className={styles.diagnosisInputs}>
                  <div className={styles.performedWithAssistance}>
                    Performed with assistance
                  </div>
                  <div className={styles.iconChevronDown}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
                <div className={styles.diagnosisInputs}>
                  <div className={styles.performedWithAssistance}>
                    Performed with assistance
                  </div>
                  <div className={styles.iconChevronDown}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
                <div className={styles.diagnosisInputs}>
                  <div className={styles.performedWithAssistance}>
                    Performed with assistance
                  </div>
                  <div className={styles.iconChevronDown}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
                <div className={styles.diagnosisInputs}>
                  <div className={styles.performedWithAssistance}>
                    Performed with assistance
                  </div>
                  <div className={styles.iconChevronDown}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
                <div className={styles.diagnosisInputs}>
                  <div className={styles.performedWithAssistance}>
                    Performed with assistance
                  </div>
                  <div className={styles.iconChevronDown}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
                <div className={styles.diagnosisInputs}>
                  <div className={styles.performedWithAssistance}>
                    Performed with assistance
                  </div>
                  <div className={styles.iconChevronDown}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.diagnosisInputColumn}>
              <div className={styles.diagnosisInputLabel}>
                <div className={styles.comment}>Diagnosis</div>
                <DiagnosisFields propPadding="unset" />
              </div>
              <DiagnosisFields propPadding="unset" />
              <DiagnosisFields propPadding="unset" />
              <DiagnosisFields propPadding="unset" />
              <DiagnosisFields propPadding="unset" />
              <DiagnosisFields propPadding="unset" />
              <DiagnosisFields propPadding="unset" />
              <DiagnosisFields propPadding="unset" />
              <DiagnosisFields propPadding="unset" />
              <DiagnosisFields propPadding="unset" />
              <DiagnosisFields propPadding="unset" />
            </div>
            <div className={styles.divider}>
              <img
                className={styles.dividerChild}
                loading="lazy"
                alt=""
                src="/line-17.svg"
              />
            </div>
          </div>
          <div className={styles.actions}>
            <div className={styles.buttons}>
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
        </form>
      </main>
    </div>
  );
};

export default ClinicalWorkGeneralPhysic;
