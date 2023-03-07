import styles from "./WriteUs.module.css";
const WriteUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h1 className={styles.heading}>Write Us</h1>
          <p>
            Let us know. Please don't hesitate to contact us via this form or
            email, and we will reply as soon as possible.
          </p>
        </div>
        <div className={styles.right}>
          <form action="">
            <div className={styles.formWrapper}>
              <div className={styles.name}>
                <div className={styles.inputDisplayBlock}>
                  <label htmlFor="">First Name</label>
                  <input type="text" placeholder="e.g. Julia" />
                </div>
                <div className={styles.inputDisplayBlock}>
                  <label htmlFor="">Last Name</label>
                  <input type="text" placeholder="e.g. Smith" />
                </div>
              </div>
              <div className={styles.name}>
                <div className={styles.inputDisplayBlock}>
                  <label htmlFor="">Company</label>
                  <input type="text" placeholder="e.g. Papers" />
                </div>
                <div className={styles.inputDisplayBlock}>
                  <label htmlFor="">Position</label>
                  <input type="text" placeholder="e.g. CFO" />
                </div>
              </div>
              <div className={styles.inputDisplayBlock}>
                <label htmlFor="">Email</label>
                <input type="email" placeholder="e.g. juliasmith@gmail.com" />
              </div>
              <div className={styles.inputDisplayBlock}>
                <label htmlFor="">Phone</label>
                <input type="tel" placeholder="e.g. 555-777-333" />
              </div>
              <div className={styles.inputDisplayBlock}>
                <label htmlFor="">Message</label>
                <textarea placeholder="e.g. Let us know" />
              </div>
              <div className={styles.checkbox}>
                <input type="checkbox" />
                <label htmlFor="">
                  I agree with the processing of personal data
                </label>
              </div>
              <button>Send Form</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WriteUs;
