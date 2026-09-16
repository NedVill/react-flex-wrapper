import { Flex } from "../src/Flex";
import styles from "./App.module.scss";

function App() {
  return (
    <div className="App">
      <Flex isColumn gap={20} fullHeight>
        Flex row:
        <Flex as="ul" fullWidth gap={10} className={styles.base}>
          <li>element</li>
          <li>element</li>
          <li>element</li>
          <li>element</li>
          <li>element</li>
          <li>element</li>
          <li>element</li>
          <li>element</li>
          <li>element</li>
        </Flex>
        Flex row between:
        <Flex
          as="ul"
          className={styles.base}
          justifyContent="between"
          fullWidth
          gap={10}
        >
          <li>element</li>
          <li>element</li>
          <li>element</li>
          <li>element</li>
          <li>element</li>
          <li>element</li>
          <li>element</li>
          <li>element</li>
          <li>element</li>
          <li>element</li>
          <li>element</li>
          <li>element</li>
          <li>element</li>
          <li>element</li>
        </Flex>
        Flex row center:
        <Flex
          as="ul"
          className={styles.base}
          justifyContent="center"
          fullWidth
          gap={10}
        >
          <li>element</li>
          <li>element</li>
          <li>element</li>
          <li>element</li>
          <li>element</li>
          <li>element</li>
          <li>element</li>
          <li>element</li>
          <li>element</li>
        </Flex>
        <Flex gap={20}>
          <Flex isColumn gap={20}>
            Flex column:
            <Flex
              as="ul"
              isColumn
              className={styles.baseColumn}
              fullWidth
              gap={10}
            >
              <li>element</li>
              <li>element</li>
              <li>element</li>
              <li>element</li>
              <li>element</li>
              <li>element</li>
              <li>element</li>
              <li>element</li>
              <li>element</li>
              <li>element</li>
              <li>element</li>
              <li>element</li>
              <li>element</li>
              <li>element</li>
              <li>element</li>
              <li>element</li>
              <li>element</li>
              <li>element</li>
              <li>element</li>
            </Flex>
          </Flex>
          <Flex isColumn gap={20}>
            Flex column between:
            <Flex
              as="ul"
              isColumn
              fullWidth
              className={styles.baseColumn}
              justifyContent="between"
              gap={10}
            >
              <li>element</li>
              <li>element</li>
              <li>element</li>
              <li>element</li>
              <li>element</li>
              <li>element</li>
              <li>element</li>
              <li>element</li>
              <li>element</li>
            </Flex>
          </Flex>
          <Flex isColumn gap={20}>
            Flex column center:
            <Flex
              as="ul"
              isColumn
              fullWidth
              className={styles.baseColumn}
              justifyContent="between"
              gap={10}
            >
              <li>element</li>
              <li>element</li>
              <li>element</li>
              <li>element</li>
              <li>element</li>
              <li>element</li>
              <li>element</li>
              <li>element</li>
              <li>element</li>
            </Flex>
          </Flex>
        </Flex>
        Flex wrap align: normal
        <Flex isWrap={false} gap={20} alignItems="normal">
          <Flex as="ul" isColumn className={styles.baseColumn} gap={10}>
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
          </Flex>
          <Flex
            as="ul"
            isColumn
            className={styles.baseColumn}
            justifyContent="between"
            gap={10}
          >
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
          </Flex>
          <Flex
            as="ul"
            isColumn
            className={styles.baseColumn}
            justifyContent="center"
            gap={10}
          >
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
            <li>element</li>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}

export default App;
