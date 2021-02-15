import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItem
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";

const Tab2: React.FC = () => {
  const [state, setState] = useState(1);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
        <IonContent>
          <h1>Hello World! {state}</h1>
          <IonButton onClick={() => setState(state + 1)}>Increase</IonButton>
          <IonButton onClick={() => setState(state - 1)}>Decrease</IonButton>
          <IonItem routerLink={"/tab2/detail"}>Go To Detail!</IonItem>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
