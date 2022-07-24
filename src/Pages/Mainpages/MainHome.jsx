import {
  Button,
  GridItem,
  HStack,
  Text,
  VStack,
  Grid,
  Container,
  Stack,
  Box,
} from "@chakra-ui/react";
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
      <Container maxW="90%">
        <Grid
          templateColumns="repeat(7,1fr)"
          // textAlign="center"
          marginBottom="10px"
          gap="1px"
        >
          <GridItem paddingLeft="40%" bgColor="cyan">
            Monday
          </GridItem>
          <GridItem paddingLeft="35%" bgColor="cyan">
            Tuesday
          </GridItem>
          <GridItem paddingLeft="12%" bgColor="cyan">
            Wednesday
          </GridItem>
          <GridItem bgColor="cyan">Thursday</GridItem>
          <GridItem bgColor="cyan">Friday</GridItem>
          <GridItem bgColor="cyan">Saturday</GridItem>
          <GridItem bgColor="cyan">Sunday</GridItem>
        </Grid>
        <HStack display="flex">
          <Grid gap="1px" mt="1px" border="1px" borderColor="red" w="30px">
            <GridItem w="28px" h="58px" bgColor="cyan">
              1
            </GridItem>
            <GridItem w="28px" h="58px" bgColor="cyan">
              2
            </GridItem>
            <GridItem w="28px" h="58px" bgColor="cyan">
              3
            </GridItem>
            <GridItem w="28px" h="58px" bgColor="cyan">
              4
            </GridItem>
            <GridItem w="28px" h="58px" bgColor="cyan">
              5
            </GridItem>
            <GridItem w="28px" h="58px" bgColor="cyan">
              6
            </GridItem>
          </Grid>
          <Grid gap="5px" templateColumns="repeat(8,1fr)">
            <GridItem w="131px" h="57px" bgColor="cyan">
              1
            </GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan">
              1
            </GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan">
              1
            </GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan">
              1
            </GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
            <GridItem w="131px" h="57px" bgColor="cyan"></GridItem>
          </Grid>
        </HStack>
      </Container>
    </VStack>
  );
};

export default MainHome;
