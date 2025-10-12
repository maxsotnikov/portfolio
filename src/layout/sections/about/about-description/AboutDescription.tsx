import styled from "styled-components";

export const AboutDescription = () => {
  return (
    <StyledAboutDescription>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.
      </Text>
      <Text>
        Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum ullamcorper nec, habitasse vulputate. Eget dictum quis est sed egestas tellus, a lectus. Quam ullamcorper in fringilla arcu aliquet fames arcu.Lacinia eget faucibus urna, nam risus nec elementum cras porta. </Text>
      <Text>
        Sed elementum, sed dolor purus dolor dui. Ut dictum nulla pulvinar vulputate sit sagittis in eleifend dignissim. Natoque mauris cras molestie velit. Maecenas eget adipiscing quisque viverra lectus arcu, tincidunt ultrices pellentesque.
      </Text>
    </StyledAboutDescription>
  );
};

const StyledAboutDescription = styled.p`
  color: #f2f2f2;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  max-width: 437px;
`

const Text = styled.p`
  margin-bottom: 20px;
`