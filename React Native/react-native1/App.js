import React, { useState } from 'react';
import { Text, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import QuicksandRegular from './assets/fonts/Quicksand-Light.ttf';
import {
  Container,
  ScrollArea,
  Layout,
  StyledInput,
  StyledPressable,
  StyledText,
  PersonCard,
  TitleText,
  LongText,
  StyledOutput,
} from './styles';

export default function App() {
  const [fontsLoaded] = useFonts({
    QuicksandRegular: QuicksandRegular,
  });

  const [myText, setMyText] = useState('Hello World');

  const people = [
    { id: '1', name: 'Juan', age: 32 },
    { id: '2', name: 'Laura', age: 22 },
    { id: '3', name: 'Carlos', age: 28 },
    { id: '4', name: 'Ana', age: 26 },
  ];

  if (!fontsLoaded) return <AppLoading />;

  return (
    <Container>
      <ScrollArea>
        <Layout>
          <StyledInput
            onChangeText={(text) => setMyText(text)}
            value={myText}
          />

          <StyledOutput>{myText}</StyledOutput>

          <StyledPressable onPress={() => alert('¡Pulsado!')}>
            <StyledText>Aquí no debería poner la etiqueta Button</StyledText>
          </StyledPressable>

          <TitleText>Listado de personas:</TitleText>

          <FlatList
            numColumns={2}
            data={people}
            renderItem={({ item }) => (
              <PersonCard>
                <Text>{item.name}</Text>
                <Text>{item.age} años</Text>
              </PersonCard>
            )}
            keyExtractor={(item) => item.id}
          />

          <LongText>{'Lorem ipsum dolor sit amet. '.repeat(30)}</LongText>
        </Layout>
      </ScrollArea>
    </Container>
  );
}
