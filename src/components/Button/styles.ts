import styled from "styled-components/native";
import { Platform } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.yellow};
  padding: 20px 0 ${Platform.OS === "ios" && `${getBottomSpace()}px`};
`;
