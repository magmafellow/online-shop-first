import styles from "@/app/ui/thing.module.css";

export default function Thing({
  name,
  urlFragment,
  desc,
}: {
  name: string;
  urlFragment: string;
  desc: string;
}) {
  return (
    <div className={styles.thingContainer}>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.imgContainer}>
        <img className={styles.mainImg} src={`/images/${urlFragment}`} alt={name} />
      </div>
      <div className={styles.descContainer}>
        <p className={styles.desc}>{desc}</p>
      </div>
    </div>
  );
}
