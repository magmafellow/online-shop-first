import Link from "next/link";
import Thing from "@/app/ui/thing";
import styles from "@/app/page.module.css";
import { dosis } from "@/app/ui/fonts";
import { sneakers } from "@/app/lib/placeholder";

export default function Page() {
  return (
    <div className={`container ${dosis.className}`}>
      {/* tags */}
      <ul className={`${styles.tagContainer}`}>
        <li>
          <Link className={`${styles.tagLink}`} href="#">
            sneakers
          </Link>
        </li>
        <li>
          <Link className={`${styles.tagLink}`} href="#">
            T-shirts
          </Link>
        </li>
        <li>
          <Link className={`${styles.tagLink}`} href="#">
            caps
          </Link>
        </li>
      </ul>
      {/* shop things */}
      <ul className={`${styles.thingGrid}`}>
        {sneakers.map((sneaker) => (
          <li key={sneaker.name}>
            <Thing
              name={sneaker.name}
              urlFragment={sneaker.urlFragment}
              desc={sneaker.desc}
            />
          </li>
        ))}
        {sneakers.map((sneaker) => (
          <li key={sneaker.name}>
            <Thing
              name={sneaker.name}
              urlFragment={sneaker.urlFragment}
              desc={sneaker.desc}
            />
          </li>
        ))}
        {sneakers.map((sneaker) => (
          <li key={sneaker.name}>
            <Thing
              name={sneaker.name}
              urlFragment={sneaker.urlFragment}
              desc={sneaker.desc}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
