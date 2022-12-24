import {createResource, createSignal, JSX} from "solid-js";

const fetchChar = (value: string) => {
    return api.findChar(value)
}

export default function Home() {

    const [searchInput, setSearchInput] = createSignal("")

    const [query] = createResource(searchInput, () => fetchChar(searchInput()))

    const onInput: JSX.EventHandler<HTMLInputElement, InputEvent> = (event ) => {
        setSearchInput(event.currentTarget.value);
    };

  return (
    <main>
        <h1>bug reproduction</h1>
        <label>file:</label>
        <input type="text" value={searchInput()} onInput={onInput} />
        {query()}
    </main>
  );
}

const charList = ["a", "b", "c", "d", "e"]

const api = {
    findChar: async (value: string) => {
        return charList.find(element => element === value)
    }
}
