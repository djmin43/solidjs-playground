import {
  Component,
  createResource,
  createSignal,
  For,
  Show,
} from "solid-js";
import Api from "./api/api";

const fetchDir = async (name: string) => {
  return await Api.searchByName(name);
};

const App: Component = () => {
  const [searchInput, setSearchInput] = createSignal("");
  const [query] = createResource(searchInput, () => fetchDir(searchInput()));

  const onInput = (event: unknown) => {
    setSearchInput(event.currentTarget.value);
  };

  return (
    <main>
      <label>file:</label>
      <input type="text" value={searchInput()} onInput={(e) => onInput(e)} />
      <span>{query.loading && "loading"}</span>
      <Show when={searchInput().length !== 0}>
        <For each={query()}>{(item) => <p>{item.name}</p>}</For>
      </Show>
    </main>
  );
};

export default App;
