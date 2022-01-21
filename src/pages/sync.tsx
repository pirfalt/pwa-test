import { useEffect, useState } from "react";
import db from "../util/db";
import classes from "./sync.module.css";

export default function Sync() {
  const [pics, setPics] = useState<{ path: string; blob: Blob }[]>([]);
  useEffect(() => {
    const fn = async () => {
      const keys = await db.keys();
      const paths = keys.filter((k) => k.startsWith("picture"));
      const ps = paths.map(async (p) => {
        return {
          path: p,
          blob: (await db.getItem(p)) as Blob,
        };
      });
      setPics(await Promise.all(ps));
    };
    fn().catch((err) => console.error("experiment!", err));
  }, []);

  return (
    <div className={classes["Sync"]}>
      <div className={classes["main"]}>
        {pics.map((p) => (
          <div key={p.path}>
            {p.path}
            <img src={URL.createObjectURL(p.blob)} />
          </div>
        ))}
      </div>
    </div>
  );
}
