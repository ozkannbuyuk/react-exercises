import { Container, Grid, Stack, Button, Input, Textarea } from "@mantine/core";
import "./App.css";
import Card from "./components/Card";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [list, setList] = useState([
    {
      id: 1,
      title: "Sea 1",
      par: "Description 1",
    },
    {
      id: 2,
      title: "Sea 2",
      par: "Description 2",
    },
    {
      id: 3,
      title: "Sea 3",
      par: "Description 3",
    },
  ]);

  const click = () => {
    setTitle("");
    setParagraph("");
    setList([
      ...list,
      {
        id: 5,
        title: title,
        par: paragraph,
      },
    ]);
  };

  return (
    <Container>
      <h1>Card App</h1>
      <Stack>
        <Input.Wrapper label="Title">
          <Input
            placeholder="Enter title"
            width={400}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Input.Wrapper>
        <Textarea
          placeholder="Enter paragraph"
          label="Paragraph"
          value={paragraph}
          onChange={(e) => setParagraph(e.target.value)}
        />
        <Button variant="outline" onClick={click}>
          Create Card
        </Button>
      </Stack>
      <h2>Cards:</h2>
      <Grid>
        {list.map(({ par, title }, i) => (
          <Grid.Col span={4} key={`index ${i}`}>
            <Card
              par={par}
              title={title}
              i={i}
              click={() => {
                let copyList = [...list];
                copyList.splice(i, 1);
                setList(copyList);
              }}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
