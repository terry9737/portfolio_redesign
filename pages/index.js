import AsiderLeft from "../comps/Navigation/AsiderLeft";
import AsiderRight from "../comps/Navigation/AsiderRight";
import Content from "../comps/Content/Content";
import InnerContainer from "../comps/UI/InnerContainer";
export default function Home() {
  return (
    <>
      <InnerContainer>
        <AsiderLeft />
        <Content />
        <AsiderRight />
      </InnerContainer>
    </>
  );
}
