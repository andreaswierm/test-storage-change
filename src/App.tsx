import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import "./App.css";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

function App() {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "83bee83b-81e0-44c3-843c-435ab186f470",
        apiBaseUrl: "https://app.dynamic-preprod.xyz/api/v0",
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <DynamicWidget />
    </DynamicContextProvider>
  );
}

export default App;
