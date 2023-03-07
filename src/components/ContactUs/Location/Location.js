import styles from "./location.module.css";
import MapImg from "../../../images/mapImg.webp";
const Location = () => {
  const Location = [
    {
      Primary: "Jabalpur, India",
      Secondary: "Tech City",
    },
    {
      Primary: "Bangalore, India",
      Secondary: "XYZ",
    },
    {
      Primary: "Jabalpur, India",
      Secondary: "Tech City",
    },
    {
      Primary: "Bangalore, India",
      Secondary: "XYZ",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Location</h1>
          <p>
            Location Wissen has an open, tolerant, merit-driven, transparent
            work culture, where we encourage ideas for improvement from all
            quarters and have even created a democratic space for dissent.
          </p>
        </div>
        <div className={styles.pictures}>
          <img src={MapImg} alt="" />
        </div>
      </div>

      <div className={styles.Locations}>
        {Location.map((item, index) => {
          return (
            <div key={index} className={styles.addresses}>
              <h2>{item.Primary}</h2>
              <p>{item.Secondary}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Location;
