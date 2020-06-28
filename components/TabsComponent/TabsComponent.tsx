import React from "react";
import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";

import styles from './tabs_component.module.scss'

const Tab = ({ children }) => {
  const { onClick } = useTabState();

  return <button onClick={onClick}>{children}</button>;
};

export const Panel = ({ children }) => {
  const isActive = usePanelState();

  return isActive ? <div className={styles.tab__panel__content}>{children}</div> : null;
};

export default function TabsComponent({ children }){
    return (
        <Tabs>
          <div className={styles.tabs__container}>
            <Tab>Entrar</Tab>
            <Tab>Cadastrar-se</Tab>
          </div>
          {children}
        </Tabs>
      );
}