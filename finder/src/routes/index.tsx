import { Title } from "solid-start";
import Api from "../api/api";
import { createSignal } from "solid-js";
import { createQuery } from "@tanstack/solid-query";

const fetchDir = async () => {
  return await Api.getDirectoryTree();
};

export default function Home() {
  const [searchInput, setSearchInput] = createSignal("");
  const query = createQuery(() => ["todos", searchInput()], fetchDir);

  const onInput = (event: unknown) => {
    setSearchInput(event.currentTarget.value);
  };
  return (
    <main>
      <Title>Hello World</Title>
      <label>file:</label>
      <input type="text" value={searchInput()} onInput={onInput} />
      <div>name: {searchInput()}</div>
    </main>
  );
}
