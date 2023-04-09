import React, { useCallback, useEffect, useState } from "react";
import { useElapsedTime } from "use-elapsed-time";
import "./App.scss";
import ProgressBar from "./ProgressBar";
import {
  Button,
  FormGroup,
  Header,
  Input,
  Label,
  SubHeader,
  TextArea,
} from "./Components";

function App() {
  const [settingsAreOpen, setSettingsAreOpen] = useState(true);
  const [text, setText] = useState("");
  const [goal, setGoal] = useState(250);
  const [goalAchieved, setGoalAchieved] = useState(false);
  const [inDanger, setInDanger] = useState(false);
  const [lastWriteTime, setLastWriteTime] = useState(0);
  const [isWriting, setIsWriting] = useState(false);
  const { elapsedTime } = useElapsedTime({
    isPlaying: isWriting,
    updateInterval: 1,
  });

  const textUpdated = useCallback(
    (newText: string) => {
      const newTextWordCount = newText.split(" ").filter(Boolean).length;

      if (newText.length === 0) {
        setIsWriting(false);
        setInDanger(false);
        setGoalAchieved(false);
        setText(newText);
        return;
      }

      setLastWriteTime(Date.now());

      if (text.length === 0 && newText.length > 0) {
        setIsWriting(true);
      }

      if (newTextWordCount >= goal) {
        setGoalAchieved(true);
        setIsWriting(false);
      } else if (goalAchieved && newTextWordCount < goal) {
        setGoalAchieved(false);
        setIsWriting(true);
      }

      setText(newText);
    },
    [goal, goalAchieved, text.length]
  );

  useEffect(() => {
    if (isWriting && Date.now() - lastWriteTime > 5000) {
      setInDanger(true);
    } else if (Date.now() - lastWriteTime <= 5000 || !isWriting) {
      setInDanger(false);
    }
  }, [elapsedTime, lastWriteTime, isWriting]);

  return (
    <div
      className={`App ${goalAchieved ? "App-goalAchieved" : ""} ${
        inDanger ? "App-inDanger" : ""
      }`}
    >
      <div className="App-container">
        {settingsAreOpen && (
          <>
            <Header>Kirjoituskone</Header>

            <FormGroup>
              <Label>Tavoitesanamäärä</Label>
              <Input
                type="number"
                onChange={(e) => setGoal(parseInt(e.target.value))}
                defaultValue={250}
              />
            </FormGroup>

            <Button onClick={() => setSettingsAreOpen(false)}>Aloita!</Button>
          </>
        )}
        {!settingsAreOpen && (
          <>
            <Header>
              {text.split(" ").filter(Boolean).length}/{goal} {goalAchieved}
            </Header>
            <SubHeader>
              {new Date(elapsedTime * 1000).toISOString().slice(11, 19)}
              <ProgressBar
                bgColor={goalAchieved ? "#28a745" : "palevioletred"}
                completed={Math.round(
                  (text.split(" ").filter(Boolean).length / goal) * 100
                )}
              />
            </SubHeader>
            <TextArea onChange={(e) => textUpdated(e.target.value)}></TextArea>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
