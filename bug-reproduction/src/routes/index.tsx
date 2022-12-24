import {createResource, createSignal, JSX} from "solid-js";
import axios from "axios";

const fetchChar = async (value: string) => {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
        return res.data.count
    } catch(e) {
       //  This is just a minimal error handling for testing purpose
        return 'no data found'
    }
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


