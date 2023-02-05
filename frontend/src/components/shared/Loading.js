import { ColorRing } from "react-loader-spinner";
import { ContainerML } from "./Message";

export function Loading() {
  return (
    <ContainerML>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </ContainerML>
  );
}
