import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

import React from "react";
import styles from "./styles.module.scss";

export function Header() {
  const currentDate = format(new Date(), "EEEEEE, d MMM", {
    locale: ptBR,
  });
  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcatr" />
      <p>O melhor para voce ouvir sempre</p>

      <span>{currentDate}</span>
    </header>
  );
}
