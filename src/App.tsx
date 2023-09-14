import { createClient } from "graphql-sse";

const client = createClient({ url: "http://localhost:4000/graphql" });

const subscription = client.iterate({
  query: "subscription{ randomNumber }",
});
function App() {
  (async () => {
    for await (const event of subscription) {
      console.log("event", event);
    }
  })();

  return <></>;
}

export default App;
