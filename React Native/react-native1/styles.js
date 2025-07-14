import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isMobile = width <= 700;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const ScrollArea = styled.ScrollView`
  padding: 20px;
`;

export const Layout = styled.View`
  flex-direction: ${isMobile ? 'column' : 'row'};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledInput = styled.TextInput`
  background-color: red;
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
`;

export const StyledOutput = styled.Text`
  font-family: 'QuicksandRegular';
  font-size: 18px;
  margin-bottom: 20px;
`;

export const StyledPressable = styled.Pressable`
  background-color: gray;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  shadow-color: black;
  shadow-opacity: 0.5;
  elevation: 3;
  shadow-offset: 0px 2px;
  shadow-radius: 10px;
`;

export const StyledText = styled.Text`
  color: white;
  text-align: center;
`;

export const TitleText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-vertical: 10px;
  font-family: 'QuicksandRegular';
`;

export const PersonCard = styled.View`
  background-color: #eee;
  padding: 10px;
  margin: 5px;
  width: 45%;
  border-radius: 8px;
  align-items: center;
`;

export const LongText = styled.Text`
  margin-top: 20px;
  line-height: 22px;
`;
