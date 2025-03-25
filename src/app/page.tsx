import Layout from "@/components/layout";
import { Button, Divider } from "antd";

export default function Home() {
  return (
    <Layout>
      <div className="bg-white shadow-md rounded-lg py-3 px-2">
        <div className="flex justify-between">
          <p className="text-gray-400 font-semibold">
            Total de despesas: <span className="text-gray-700">1555</span>
          </p>
          <Button>Adicionar despesa</Button>
        </div>
        <Divider />
      </div>
    </Layout>
  );
}
