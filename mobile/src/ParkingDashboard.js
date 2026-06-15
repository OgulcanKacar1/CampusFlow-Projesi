import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const demoStats = [
  { label: 'Toplam Alan', value: '40' },
  { label: 'Dolu Alan', value: '17' },
  { label: 'Boş Alan', value: '23' },
];

export default function ParkingDashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>CampusFlow Park</Text>
        <Text style={styles.subtitle}>Tolga Olguner RN Demo</Text>
      </View>

      <View style={styles.card}>
        {demoStats.map((item) => (
          <View key={item.label} style={styles.row}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.footer}>
        Bu ekran, IoT otopark doluluk sisteminin mobil önizleme akışını temsil eder.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    color: '#f8fafc',
    fontSize: 32,
    fontWeight: '700',
  },
  subtitle: {
    color: '#38bdf8',
    marginTop: 6,
    fontSize: 16,
  },
  card: {
    backgroundColor: '#111827',
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: '#1f2937',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#1f2937',
  },
  label: {
    color: '#cbd5e1',
    fontSize: 16,
  },
  value: {
    color: '#f8fafc',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    marginTop: 18,
    color: '#94a3b8',
    lineHeight: 22,
  },
});
