import { createResource, createSignal } from "solid-js";
import Api from "./api/api";
import { File } from "./components/File";

const fetchDir = async (name: string) => {
  return await Api.searchByName(name);
};

const App = () => {
  const [searchInput, setSearchInput] = createSignal("");
  const [query] = createResource(searchInput, () => fetchDir(searchInput()));

  const onInput = (event: unknown) => {
    setSearchInput(event.currentTarget.value);
  };

  return (
    <main class={"main-container"}>
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
      <div class={"sub-container"}>
        {searchInput().length !== 0 &&
          query()?.map((node) => (
            <File searchInput={searchInput()} node={node} />
          ))}
      </div>
    </main>
  );
};

export default App;
