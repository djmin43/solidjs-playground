import { Title } from "solid-start";
import Api from "../api/api";
import { createResource, createSignal, For } from "solid-js";

const fetchDir = async (name: string) => {
  return await Api.searchByName(name);
};

export default function Home() {
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
      <For each={query()}>{(item) => <p>{item.name}</p>}</For>
    </main>
  );
}
