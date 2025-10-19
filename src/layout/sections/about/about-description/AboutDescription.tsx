import styled from "styled-components";

export const AboutDescription = () => {
  return (
    <StyledAboutDescription>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.
      </Text>
      <Text>
        Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum ullamcorper nec, habitasse vulputate. Eget dictum quis est sed egestas tellus, a lectus. Quam ullamcorper in fringilla arcu aliquet fames arcu.Lacinia eget faucibus urna, nam risus nec elementum cras porta.
      </Text>
    </StyledAboutDescription>
  );
};

const StyledAboutDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  max-width: 437px;
  height: 432px;
  margin-bottom: 310px;
`

const Text = styled.p`
  margin-bottom: 20px;
`