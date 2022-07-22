import produce from "immer";

export default () => {
  const valueUpdater = produce(draft => {
    draft.value = 2;
  });

  const original = {
    id: 1,
    value: 0,
  }

  const changed = valueUpdater(original);

  return (
    <p>{changed.value}</p>
  );
}
