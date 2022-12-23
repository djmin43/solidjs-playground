export default function Home() {
  return (
    <main>
        <h1>bug reproduction</h1>

    </main>
  );
}

const numberList = [0, 1, 2, 3, 4, 5, 6, 7]

const api = {
    findNumber: async (value: number) => {
        return numberList.includes(value)
    }
}
