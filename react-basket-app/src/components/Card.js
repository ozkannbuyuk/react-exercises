import { Card, Image, Text, Button, Group } from "@mantine/core";

const CardComponent = ({ name, src, onAdd }) => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={`/assets/images/${src}.jpg`} height={160} alt="" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{name}</Text>
      </Group>

      <Text size="sm" color="dimmed">
        Voluptate elit officia pariatur voluptate incididunt incididunt est
        velit qui cillum adipisicing aliquip reprehenderit ea.
      </Text>

      <Button
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={onAdd}
      >
        Add
      </Button>
    </Card>
  );
};

export default CardComponent;
