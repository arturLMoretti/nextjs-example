import { useRouter } from "next/router";

export default function ProdutoId() {
  const route = useRouter();

  const { id } = route.query;
  return (
    <h1>Produto {id}</h1>
  )
}