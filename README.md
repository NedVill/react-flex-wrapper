## React flex wrapper

Универсальная обертка для Flex стилей

```
<Flex as="ul" fullWidth gap={10}>
    <li>element 1</li>
    <li>element 2</li>
    <li>element 3</li>
</Flex>

| Проп | Тип | Описание |
|---|---|---|
| `alignItems` | `aligns` | Выравнивание дочерних элементов по поперечной оси. Значения: `start`, `end`, `center`, `stretch`, `baseline`, `normal`, `inherit`. |
| `alignSelf` | `aligns` | Выравнивание самого Flex-элемента по поперечной оси. Переопределяет `alignItems` родителя. |
| `as` | `React.ElementType` | HTML-тег или React-компонент, в который рендерится контейнер. |
| `fullHeight` | `boolean` | Если `true`, растягивает контейнер на всю доступную высоту. |
| `fullWidth` | `boolean` | Если `true`, растягивает контейнер на всю доступную ширину. |
| `gap` | `number` | Числовой отступ между дочерними элементами. |
| `isColumn` | `boolean` | Если `true`, задаёт вертикальное направление (`flex-direction: column`). |
| `isWrap` | `boolean` | Если `true`, разрешает перенос дочерних элементов (`flex-wrap: wrap`). |
| `justifyContent` | `baseSpaceTypes`, `"between"`, `"around"` | Выравнивание дочерних элементов по главной оси. Значения: `start`, `end`, `center`, `stretch`, `between`, `around`. |
| `children` | `React.ReactNode` | Содержимое Flex-контейнера. |
| `...HTMLAttributes` | — | Стандартные HTML-атрибуты элемента, кроме `children`, пробрасываются в корневой элемент. |
```
