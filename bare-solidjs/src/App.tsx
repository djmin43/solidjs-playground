import {
  Component,
  createEffect,
  createResource,
  createSignal,
  For,
  Show,
} from "solid-js";
import Api from "./api/api";

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
    <main>
      <label>file:</label>
      <input type="text" value={searchInput()} onInput={(e) => onInput(e)} />
      <span>{query.loading && "loading"}</span>
        {searchInput().length !== 0 &&
            <div>
                {query()?.map((item) => <p>{item.name}</p>)}
            </div>
        }
    </main>
  );
};

export default App;
