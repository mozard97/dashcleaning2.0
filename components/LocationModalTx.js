import texasLo from "../assets/data/texasLo";
import css from "../styles/LocationsModal.module.css";
import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import Link from "next/link";
export default function LocationsModal() {
  const theme = useMantineTheme();
  const [Opened, setOpened] = useState(false);
  return (
    <div className={css.container}>
      <button className={css.modalButton} onClick={() => setOpened(true)}>
        Our Locations
      </button>
      <Modal
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        opened={Opened}
        onClose={() => setOpened(false)}
        size="calc(100vw - 80px)"
      >
        <div className={css.modalContainer}>
          <span>Locations</span>
          <div className={css.locations}>
            {texasLo.map((location, i) => {
              return (
                <Link href={location.link} key={i}>
                  <span>{location.name}</span>
                </Link>
              );
            })}
          </div>
          <hr/>
        </div>
      </Modal>
    </div>
  );
}