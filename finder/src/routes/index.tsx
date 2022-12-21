import Api from "../api/api";
import { createEffect, createResource, createSignal, For } from "solid-js";
import { File } from "~/components/File";

const fetchDir = async (name: string) => {
  return await Api.searchByName(name);
};
export default function Home() {
  const [searchInput, setSearchInput] = createSignal("");
  const [query] = createResource(searchInput, () => fetchDir(searchInput()));

  const [counter, setCounter] = createSignal(0);

  createEffect(() => {
    const interval = setInterval(() => setCounter((c) => c + 1), 1000);
    Object.keys(window).forEach((key) => {
      if (/^on/.test(key)) {
        window.addEventListener(key.slice(2), (event) => {
          console.log(event);
        });
      }
    });
  });

  const onInput = (event: unknown) => {
    setSearchInput(event.currentTarget.value);
  };

  return (
    <main class={"main-container"}>
      {counter()}
      <h2>search files or dirs</h2>
      <div class={"sub-container"}>
        <div>
          <label>input: </label>
          <input
            type="text"
            value={searchInput()}
            onInput={(e) => onInput(e)}
          />
        </div>
      </div>
      {/*<div class={"sub-container"}>*/}
      {/*  {searchInput().length !== 0 &&*/}
      {/*    query()?.map((node) => (*/}
      {/*      <File searchInput={searchInput()} node={node} />*/}
      {/*    ))}*/}
      {/*</div>*/}
    </main>
  );
}
