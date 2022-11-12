import { Button, Card, Grid, Row, Text } from "@nextui-org/react";
import { trpc } from "../utils/trpc";

export default function Cards() {
  const { data } = trpc.productsRouter.getProdutcs.useQuery(
    "cladr6wj50000qcwsttq7oh9c"
  );
  return (
    <Grid.Container>
      <Grid sm={12} md={5}>
        <Card>
          <Card.Header>
            <Text b>{data?.name}</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              quae natus! Tempora esse mollitia error odio et, enim cum impedit
              debitis nam voluptatibus commodi nobis ex doloribus. Nemo,
              praesentium quae.
            </Text>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="space-evenly">
              <Button size="sm">Cancel</Button>
              <Button size="sm">Rp.{data?.price}</Button>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
  );
}
