import { Button, GridItem, HStack, Text, VStack, Grid } from "@chakra-ui/react";
import React from "react";
import "../../css/myscss.scss";
import "../../App.css";

const MainHome = () => {
  return (
    <VStack paddingTop="120px" w="full">
      <HStack w="100%" h="60px" bgColor="gray" gap="1.5rem" paddingLeft="7rem">
        <Text variant="link" className="fribtn">
          Show Calendar
        </Text>
        <Text variant="link" className="brobtn">
          My Things
        </Text>
        <Text variant="link" className="brobtn">
          Routine
        </Text>
        <Text variant="link" className="brobtn">
          Check ME
        </Text>
        <Text variant="link" className="brobtn">
          Check ME
        </Text>
        <Text variant="link" className="brobtn">
          Check ME
        </Text>
      </HStack>
      <Grid
        h="200px"
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(8, 1fr)"
        gap={4}
        w="100%"
      >
        <GridItem bg="tomato" />
        <GridItem bg="papayawhip" />
        <GridItem bg="papayawhip" />
        <GridItem bg="tomato" />
        <GridItem bg="papayawhip" />
        <GridItem bg="tomato" />
        <GridItem bg="tomato" />
        <GridItem bg="papayawhip" />
        <GridItem bg="papayawhip" />
        <GridItem bg="tomato" />
        <GridItem bg="papayawhip" />
        <GridItem bg="tomato" />
        <GridItem bg="tomato" />
        <GridItem bg="papayawhip" />
        <GridItem bg="papayawhip" />
        <GridItem bg="tomato" />
        <GridItem bg="papayawhip" />
        <GridItem bg="tomato" />
        <GridItem bg="tomato" />
        <GridItem bg="papayawhip" />
        <GridItem bg="papayawhip" />
        <GridItem bg="tomato" />
        <GridItem bg="papayawhip" />
        <GridItem bg="tomato" />
        <GridItem bg="tomato" />
        <GridItem bg="papayawhip" />
        <GridItem bg="papayawhip" />
        <GridItem bg="tomato" />
        <GridItem bg="papayawhip" />
        <GridItem bg="tomato" />
        <GridItem bg="tomato" />
        <GridItem bg="papayawhip" />
        <GridItem bg="papayawhip" />
        <GridItem bg="tomato" />
        <GridItem bg="papayawhip" />
        <GridItem bg="tomato" />
        <GridItem bg="tomato" />
        <GridItem bg="papayawhip" />
        <GridItem bg="papayawhip" />
        <GridItem bg="tomato" />
        <GridItem bg="papayawhip" />
        <GridItem bg="tomato" />
        <GridItem bg="tomato" />
        <GridItem bg="papayawhip" />
        <GridItem bg="papayawhip" />
        <GridItem bg="tomato" />
        <GridItem bg="papayawhip" />
        <GridItem bg="tomato" colStart={1} colEnd={6} />
      </Grid>
    </VStack>
  );
};

export default MainHome;
