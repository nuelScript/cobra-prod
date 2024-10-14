import { DesignProps } from "@/types";

const DesignPage = async ({ searchParams }: DesignProps) => {
  const { id } = searchParams;
  return <p className="">{id}</p>;
};

export default DesignPage;
