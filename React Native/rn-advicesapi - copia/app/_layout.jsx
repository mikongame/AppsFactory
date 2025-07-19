import { Tabs } from 'expo-router';
import { AdviceProvider } from '../context/AdviceContext';

export default function Layout() {
  return (
    <AdviceProvider>
      <Tabs>
        <Tabs.Screen name="index" options={{ title: "Inicio" }} />
        <Tabs.Screen name="saved" options={{ title: "Guardados" }} />
      </Tabs>
    </AdviceProvider>
  );
}
