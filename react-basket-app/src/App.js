import { useState } from "react";
import {
  Button,
  Badge,
  Container,
  Drawer,
  Indicator,
  Group,
  List,
  SimpleGrid,
  ThemeIcon,
  Input,
} from "@mantine/core";
import { IconCircleCheck, IconBasket } from "@tabler/icons";
import Card from "./components/Card";
import "./App.css";

const storeItems = [
  {
    id: 100,
    name: "Camera",
    src: "camera",
    price: 20,
  },
  {
    id: 101,
    name: "Headphones",
    src: "headphone",
    price: 10,
  },
  {
    id: 102,
    name: "Gaming Console",
    src: "joystick",
    price: 25,
  },
  {
    id: 103,
    name: "Retro Camera",
    src: "retro-cam",
    price: 25,
  },
  {
    id: 104,
    name: "Toy Car",
    src: "toy-car",
    price: 25,
  },
  {
    id: 105,
    name: "Wristwatch",
    src: "watch",
    price: 25,
  },
];

function App() {
  let [opened, setOpened] = useState(false);
  let [basketItems, setBasketItems] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  let filteredItems = storeItems.filter(
    (item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
  );
  let addToBasket = ({ id, name }) => {
    let basketIndex = basketItems.findIndex((item) => item.id === id);
    if (basketIndex >= 0) {
      let _basketItems = [...basketItems];
      _basketItems[basketIndex].count += 1;
      setBasketItems(_basketItems);
    } else {
      setBasketItems([...basketItems, { id, name, count: 1 }]);
    }
  };
  return (
    <Container>
      <Group align="end">
        <Input.Wrapper label="Search">
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </Input.Wrapper>
        <Button onClick={() => setSearchValue("")}>Clear</Button>
        <Indicator color="red" label={basketItems.length} size={22}>
          <Button onClick={() => setOpened(true)}>
            <IconBasket size={22} />
          </Button>
        </Indicator>
      </Group>
      <SimpleGrid cols={3} className="Store">
        {filteredItems.map(({ id, name, src }) => {
          return (
            <Card
              key={name}
              name={name}
              src={src}
              onAdd={() => addToBasket({ id, name })}
            />
          );
        })}
      </SimpleGrid>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="My Basket"
        padding="md"
        size="md"
      >
        <List
          className="List"
          spacing="xs"
          size="sm"
          center
          icon={
            <ThemeIcon color="teal" size={24} radius="xl">
              <IconCircleCheck size={16} />
            </ThemeIcon>
          }
        >
          {basketItems.map(({ name, count }, index) => (
            <List.Item key={index}>
              <Group>
                <div>{name}</div> <Badge>{count}</Badge>
              </Group>
            </List.Item>
          ))}
        </List>
      </Drawer>
    </Container>
  );
}

export default App;
